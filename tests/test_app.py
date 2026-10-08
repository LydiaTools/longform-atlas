import json
import unittest
from unittest.mock import patch
from io import BytesIO

from app import build_messages, generate


class MessageTests(unittest.TestCase):
    def setUp(self):
        self.data = {
            "platform": "x",
            "topic": "Garden bed mulch estimate",
            "audience": "DIY homeowners",
            "angle": "Explain missing measurements first",
            "evidence": "Measure the bed and read bag volume.",
            "query": "mulch bag calculator",
            "intent": "howto",
            "sources": [{"url": "https://example.com/source", "note": "Bag label example"}],
            "outputLanguage": "en",
        }

    def test_prompt_preserves_source_and_prohibits_invented_claims(self):
        messages = build_messages(self.data)
        self.assertIn("Never invent data", messages[0]["content"])
        self.assertIn("https://example.com/source", messages[1]["content"])
        self.assertIn("mulch bag calculator", messages[1]["content"])

    def test_missing_angle_and_invalid_source_rejected(self):
        self.data["angle"] = ""
        with self.assertRaises(ValueError):
            build_messages(self.data)
        self.data["angle"] = "Original angle"
        self.data["sources"] = ["not a source record"]
        with self.assertRaises(ValueError):
            build_messages(self.data)
        self.data["sources"] = [{"url": "file:///secret", "note": "no"}]
        with self.assertRaises(ValueError):
            build_messages(self.data)

    def test_generation_calls_chosen_provider_with_key(self):
        self.data.update({"baseUrl": "https://api.example.com/v1", "model": "demo-model", "apiKey": "test-key"})
        class FakeResponse:
            def __enter__(self): return BytesIO(json.dumps({"choices": [{"message": {"content": "# A useful draft"}}]}).encode())
            def __exit__(self, *args): return False
        with patch("urllib.request.urlopen", return_value=FakeResponse()) as call:
            result = generate(self.data)
        self.assertEqual(result, "# A useful draft")
        request = call.call_args.args[0]
        self.assertEqual(request.full_url, "https://api.example.com/v1/chat/completions")
        self.assertEqual(request.headers["Authorization"], "Bearer test-key")


if __name__ == "__main__":
    unittest.main()
