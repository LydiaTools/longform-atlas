#!/usr/bin/env python3
"""Local writing workspace and opt-in OpenAI-compatible generation gateway."""
import argparse
import json
import secrets
import urllib.error
import urllib.request
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).parent / "web"
MAX_BODY = 100_000
PLATFORMS = {"x", "medium", "quora", "linkedin", "substack"}


def build_messages(data):
    if not isinstance(data, dict):
        raise ValueError("Provide an article brief object.")
    platform = data.get("platform", "")
    if platform not in PLATFORMS:
        raise ValueError("Choose a supported platform.")
    topic = str(data.get("topic", "")).strip()[:250]
    audience = str(data.get("audience", "")).strip()[:250]
    angle = str(data.get("angle", "")).strip()[:1000]
    evidence = str(data.get("evidence", "")).strip()[:8000]
    query = str(data.get("query", "")).strip()[:120]
    intent = str(data.get("intent", "informational")).strip()
    canonical = str(data.get("canonical", "")).strip()[:500]
    if intent not in ("informational", "comparison", "howto"):
        raise ValueError("Choose a supported search intent.")
    if canonical and urlparse(canonical).scheme not in ("https", "http"):
        raise ValueError("Canonical URL must start with http or https.")
    sources = data.get("sources", [])
    if not topic or not audience or not angle:
        raise ValueError("Topic, audience and original angle are required.")
    if not isinstance(sources, list) or len(sources) > 12:
        raise ValueError("Use at most 12 sources.")
    clean_sources = []
    for item in sources:
        if not isinstance(item, dict):
            raise ValueError("Each source must have a URL and evidence note.")
        url = str(item.get("url", "")).strip()[:500]
        note = str(item.get("note", "")).strip()[:600]
        if url and urlparse(url).scheme not in ("https", "http"):
            raise ValueError("Source URLs must start with http or https.")
        if url or note:
            clean_sources.append({"url": url, "note": note})
    language = "English" if data.get("outputLanguage") != "zh" else "Chinese"
    platform_notes = {
        "x": "Format for an X Article: strong specific hook, section headings, skimmable paragraphs and a final discussion prompt. Do not promise reward eligibility.",
        "medium": "Format for a Medium story: clear title, contextual introduction, useful sections, original examples and a thoughtful close. If republishing, include a canonical-source reminder outside the prose.",
        "quora": "Format as a direct answer to a reader question, with the answer near the top and evidence thereafter.",
        "linkedin": "Format as a professional article with practical examples, accessible headings and a concise takeaway.",
        "substack": "Format as a newsletter essay: an opening note, focused argument, section headings and a reader-facing close.",
    }
    system = (
        "You are an editorial writing assistant. Write an original, useful long-form draft in "
        + language + ". Use only the facts and sources supplied by the user. Never invent data, quotes, "
        "first-hand experience, revenue, rankings or citations. Mark unsupported claims as [VERIFY]. "
        "Keep source URLs in a Sources section; distinguish source observations from the author's own angle. "
        "Use the search query naturally when relevant; never stuff keywords. "
        "Suggest a specific SEO title and description in a short editorial note before the article, "
        "and mention the canonical URL only if supplied. Return Markdown only. "
        + platform_notes[platform]
    )
    user = json.dumps({
        "platform": platform,
        "topic": topic,
        "audience": audience,
        "original_angle": angle,
        "evidence_and_examples": evidence,
        "primary_search_query": query,
        "search_intent": intent,
        "canonical_original_url": canonical,
        "sources": clean_sources,
        "target_words": min(2500, max(500, int(data.get("words", 1200)))),
    }, ensure_ascii=False)
    return [{"role": "system", "content": system}, {"role": "user", "content": user}]


def generate(data):
    base = str(data.get("baseUrl", "")).strip().rstrip("/")
    key = str(data.get("apiKey", "")).strip()
    model = str(data.get("model", "")).strip()
    parsed = urlparse(base)
    if parsed.scheme != "https" and not (parsed.scheme == "http" and parsed.hostname in ("127.0.0.1", "localhost")):
        raise ValueError("Use HTTPS, or localhost for a local model.")
    if not parsed.hostname or parsed.username or parsed.password or not model or not key:
        raise ValueError("Provider URL, model and API key are required.")
    messages = build_messages(data)
    payload = json.dumps({"model": model, "messages": messages, "temperature": 0.5}, ensure_ascii=False).encode()
    req = urllib.request.Request(
        base + "/chat/completions", data=payload,
        headers={"Content-Type": "application/json", "Authorization": "Bearer " + key},
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=90) as response:
        result = json.load(response)
    content = result["choices"][0]["message"]["content"]
    if not isinstance(content, str) or not content.strip():
        raise ValueError("Provider returned no article text.")
    return content.strip()


class Handler(BaseHTTPRequestHandler):
    token = ""

    def log_message(self, format, *args):
        pass

    def reply(self, code, payload):
        body = json.dumps(payload, ensure_ascii=False).encode()
        self.send_response(code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Cache-Control", "no-store")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        routes = {"/": ("index.html", "text/html"), "/style.css": ("style.css", "text/css"), "/app.js": ("app.js", "text/javascript")}
        if self.path not in routes:
            self.send_error(404)
            return
        name, mime = routes[self.path]
        body = (ROOT / name).read_bytes()
        if name == "index.html":
            body = body.replace(b"__LOCAL_TOKEN__", self.token.encode())
        self.send_response(200)
        self.send_header("Content-Type", mime + "; charset=utf-8")
        self.send_header("Cache-Control", "no-store")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_POST(self):
        if self.path != "/api/generate" or self.headers.get("X-Local-Token") != self.token:
            self.reply(403, {"error": "Invalid local request."})
            return
        try:
            size = int(self.headers.get("Content-Length", "0"))
        except ValueError:
            self.reply(400, {"error": "Invalid request length."})
            return
        if size < 1 or size > MAX_BODY:
            self.reply(413, {"error": "Request too large."})
            return
        try:
            data = json.loads(self.rfile.read(size))
            article = generate(data)
            self.reply(200, {"article": article})
        except (ValueError, KeyError, TypeError) as exc:
            self.reply(400, {"error": str(exc)})
        except urllib.error.HTTPError as exc:
            self.reply(502, {"error": "Provider HTTP " + str(exc.code)})
        except (urllib.error.URLError, TimeoutError) as exc:
            self.reply(502, {"error": "Provider unavailable or timed out."})


def main():
    parser = argparse.ArgumentParser(description="Longform Atlas local writing workspace")
    parser.add_argument("--port", type=int, default=8765)
    args = parser.parse_args()
    Handler.token = secrets.token_urlsafe(24)
    server = ThreadingHTTPServer(("127.0.0.1", args.port), Handler)
    print("Longform Atlas: http://127.0.0.1:%d" % args.port, flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
