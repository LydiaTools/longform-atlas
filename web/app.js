const I18N={
  en:{
    brandCaption:'A local editorial workspace',localBadge:'Local-first · manual publishing',workspaceLabel:'Writing route',navBrief:'Define the angle',navSources:'Check the evidence',navDraft:'Write & export',asideHelp:'An article earns trust when every claim can be traced to a source or your own experience.',
    introKicker:'From idea to article',hero:'Long-form writing with a point of view.',heroCopy:'Shape one researched idea for X Articles, Medium, Quora, LinkedIn or Substack. Keep your facts, sources and voice in one place.',sample:'Load a sample brief',
    briefHeading:'The brief',briefHelp:'State who this is for and what you can say that a generic article cannot.',
    topicLabel:'Topic or reader question',audienceLabel:'Reader',platformLabel:'Publishing destination',angleLabel:'Your original angle',evidenceLabel:'Your evidence, examples or first-hand experience',queryLabel:'Primary search phrase (optional)',intentLabel:'Reader search intent',canonicalLabel:'Original URL if republishing (optional)',
    sourcesHeading:'Source ledger',sourcesHelp:'Add links and the exact fact each supports. Sources are not fetched automatically.',addSource:'Add a source',urlLabel:'Source URL',noteLabel:'What does it support?',
    draftHeading:'The draft',draftHelp:'Start offline with an outline, or use your own compatible model API to create a full draft.',outputLanguageLabel:'Article language',wordsLabel:'Target words',
    providerTitle:'Optional writing model',providerHelp:'The API key is sent only to your chosen provider when you press Generate. It is never saved by this app.',baseLabel:'OpenAI-compatible base URL',modelLabel:'Model',keyLabel:'API key',
    outline:'Build offline outline',generate:'Generate article',draftLabel:'Editable Markdown draft',copy:'Copy Markdown',download:'Download .md',auditButton:'Check draft',
    reviewNote:'Review every claim and source, then publish manually in your own account. X Article publishing requires an eligible X subscription.',
    footerLeft:'Your work stays in this browser. No account connection or scheduled posting.',source:'Source',note:'Evidence note',sourceEmpty:'Add a URL or evidence note.',
    missing:'Add a topic, reader and original angle first.',outlineReady:'Outline ready. Add verified evidence and write your original prose.',generating:'Generating with your chosen model…',generated:'Draft ready. Verify each claim before use.',
    apiMissing:'Enter provider URL, model and API key to generate a full article.',copied:'Markdown copied.',downloaded:'Markdown downloaded.',sampleLoaded:'Sample brief loaded. It contains no claimed performance data.',
    sampleTopic:'How should a homeowner estimate mulch bags for a garden bed?',sampleAudience:'DIY homeowners planning a small garden project',sampleAngle:'Explain the measurement decisions before giving a bag count, so readers can spot missing inputs.',sampleEvidence:'Original example: measure the bed area, choose a target depth, then check the bag volume printed on the product. No brand-specific conversion is assumed.',
    question:'Question to answer',claim:'Claim to verify',example:'Original example',outlineOpening:'Opening: the reader’s problem',outlineSections:'Sections',outlineEnding:'Ending: one practical next step',outlineSource:'Sources to check before publication',
    auditResult:'{words} words · {headings} headings · {sources} sources · key phrase: {query}. {notes}',auditNoQuery:'not set',auditNoEvidence:'Add evidence or first-hand examples.',auditNoSources:'Add source links for claims.',auditShort:'Below your target length; expand only where you have substance.',auditReady:'Structure check complete; factual review still needs a human.'
  },
  zh:{
    brandCaption:'本地长文写作工作台',localBadge:'本地优先 · 手动发布',workspaceLabel:'写作路线',navBrief:'确定角度',navSources:'核对证据',navDraft:'写作与导出',asideHelp:'每个事实要能追溯到来源或你自己的经验，文章才有说服力。',
    introKicker:'从选题到长文',hero:'带着自己观点写长文。',heroCopy:'把一个研究过的主题写成适合 X Articles、Medium、Quora、LinkedIn 或 Substack 的稿件，保留来源、证据和个人声音。',sample:'载入示例选题',
    briefHeading:'选题卡',briefHelp:'说清写给谁，以及你比泛泛文章多了什么独特理解。',
    topicLabel:'主题或读者问题',audienceLabel:'目标读者',platformLabel:'目标平台',angleLabel:'你的独特角度',evidenceLabel:'证据、实例或亲身经验',queryLabel:'主要搜索词（可选）',intentLabel:'读者搜索意图',canonicalLabel:'转载时的原文链接（可选）',
    sourcesHeading:'来源台账',sourcesHelp:'写下链接和它支持的具体事实；工具不会自动抓取网页。',addSource:'添加来源',urlLabel:'来源链接',noteLabel:'它支持什么事实？',
    draftHeading:'文章草稿',draftHelp:'可离线生成大纲，也可用自己的兼容模型 API 生成完整初稿。',outputLanguageLabel:'文章语言',wordsLabel:'目标字数',
    providerTitle:'可选写作模型',providerHelp:'仅当你点击“生成文章”时，密钥才会发给你选择的服务商；本工具不保存密钥。',baseLabel:'兼容 OpenAI 的基础 URL',modelLabel:'模型',keyLabel:'API 密钥',
    outline:'离线生成大纲',generate:'生成文章',draftLabel:'可编辑的 Markdown 草稿',copy:'复制 Markdown',download:'下载 .md',auditButton:'检查草稿',
    reviewNote:'核对所有事实与来源，再到自己的平台账号手动发布。发布 X Articles 需要符合条件的订阅。',
    footerLeft:'内容只保存在此浏览器；不连接平台账号，也不定时发布。',source:'来源',note:'证据说明',sourceEmpty:'添加链接或证据说明。',
    missing:'先填写主题、读者和独特角度。',outlineReady:'大纲已生成。补充核实的证据，写入你自己的表达。',generating:'正在用你指定的模型生成…',generated:'初稿完成。使用前请逐条核实事实。',
    apiMissing:'填写服务商 URL、模型和 API 密钥后才能生成完整文章。',copied:'已复制 Markdown。',downloaded:'已下载 Markdown。',sampleLoaded:'已载入示例选题，不包含虚构的效果数据。',
    sampleTopic:'家庭园艺怎么估算一块花坛需要多少袋覆盖物？',sampleAudience:'准备自己动手的小型家庭花园主人',sampleAngle:'先解释测量和规格选择，再给出袋数计算思路，让读者发现输入缺口。',sampleEvidence:'原创示例：测量花坛面积、选定铺设厚度，再查看产品包装标注的每袋体积。不预设任何品牌的换算关系。',
    question:'要回答的问题',claim:'待核实观点',example:'原创例子',outlineOpening:'开头：读者的问题',outlineSections:'正文结构',outlineEnding:'结尾：一个可执行的下一步',outlineSource:'发布前要核对的来源',
    auditResult:'{words} 词 · {headings} 个标题 · {sources} 个来源 · 核心词：{query}。{notes}',auditNoQuery:'未设置',auditNoEvidence:'请补充事实证据或亲身例子。',auditNoSources:'涉及事实判断时请添加来源链接。',auditShort:'未达到目标字数；只有内容足够扎实时才扩写。',auditReady:'结构检查完成，事实仍需人工核对。'
  }
};
const ids={
  'brand-caption':'brandCaption','local-badge':'localBadge','workspace-label':'workspaceLabel',
  'nav-brief':'navBrief','nav-sources':'navSources','nav-draft':'navDraft','aside-help':'asideHelp',
  'intro-kicker':'introKicker','hero':'hero','hero-copy':'heroCopy','sample':'sample',
  'brief-heading':'briefHeading','brief-help':'briefHelp','topic-label':'topicLabel',
  'audience-label':'audienceLabel','platform-label':'platformLabel','angle-label':'angleLabel','evidence-label':'evidenceLabel','query-label':'queryLabel','intent-label':'intentLabel','canonical-label':'canonicalLabel',
  'sources-heading':'sourcesHeading','sources-help':'sourcesHelp','add-source':'addSource',
  'draft-heading':'draftHeading','draft-help':'draftHelp','output-language-label':'outputLanguageLabel',
  'words-label':'wordsLabel','provider-title':'providerTitle','provider-help':'providerHelp',
  'base-label':'baseLabel','model-label':'modelLabel','key-label':'keyLabel','outline':'outline',
  'generate':'generate','draft-label':'draftLabel','copy':'copy','download':'download',
  'review-note':'reviewNote','footer-left':'footerLeft','audit-button':'auditButton'
};
const $=id=>document.getElementById(id);
let lang='en';
let lastStatusKey='',lastStatusError=false;
const tr=key=>I18N[lang][key];
const fields=['topic','audience','platform','angle','evidence','query','intent','canonical','output-language','words','base-url','model','draft'];
function setLanguage(next){lang=next;document.documentElement.lang=lang;$('language').textContent=lang==='en'?'中文':'English';for(const [id,key] of Object.entries(ids))$(id).textContent=tr(key);document.querySelectorAll('.source-row').forEach(updateSourcePlaceholders);if(lastStatusKey)status(lastStatusKey,lastStatusError);localStorage.setItem('la-lang',lang);}
function updateSourcePlaceholders(row){const u=row.querySelector('.source-url'),n=row.querySelector('.source-note');u.placeholder=tr('urlLabel');u.ariaLabel=tr('urlLabel');n.placeholder=tr('noteLabel');n.ariaLabel=tr('noteLabel');row.querySelector('button').ariaLabel=lang==='en'?'Remove source':'移除来源';}
function sourceRow(url='',note=''){
  const row=document.createElement('div');row.className='source-row';
  const u=document.createElement('input');u.className='source-url';u.type='url';u.value=url;u.maxLength=500;u.addEventListener('input',save);
  const n=document.createElement('input');n.className='source-note';n.value=note;n.maxLength=600;n.addEventListener('input',save);
  const remove=document.createElement('button');remove.type='button';remove.textContent='×';remove.onclick=()=>{row.remove();save();};
  row.append(u,n,remove);updateSourcePlaceholders(row);$('sources').append(row);
}
function sources(){return [...document.querySelectorAll('.source-row')].map(row=>({url:row.querySelector('.source-url').value.trim(),note:row.querySelector('.source-note').value.trim()})).filter(s=>s.url||s.note);}
function state(){return {topic:$('topic').value.trim(),audience:$('audience').value.trim(),platform:$('platform').value,angle:$('angle').value.trim(),evidence:$('evidence').value.trim(),query:$('query').value.trim(),intent:$('intent').value,canonical:$('canonical').value.trim(),sources:sources(),outputLanguage:$('output-language').value,words:Number($('words').value)||1200,baseUrl:$('base-url').value.trim(),model:$('model').value.trim(),draft:$('draft').value};}
function save(){localStorage.setItem('la-project',JSON.stringify(state()));}
function status(keyOrText,isError=false){lastStatusKey=I18N.en[keyOrText]?keyOrText:'';lastStatusError=isError;$('status').textContent=I18N[lang][keyOrText]||keyOrText;$('status').style.color=isError?'#b04b3e':'#275965';}
function outline(){
  const d=state();if(!d.topic||!d.audience||!d.angle){status('missing',true);return;}
  const isZh=d.outputLanguage==='zh';
  const text=isZh?[
    '# '+d.topic,'','> 面向：'+d.audience,'','## 开头：读者的问题','[用读者的真实情境引出问题]','','## 你的核心观点',d.angle,'','## 可核实的证据',d.evidence||'[补充亲身经验或可核查事实]','','## 文章结构',
    '1. 读者通常遗漏的关键输入','2. 用一个具体例子解释方法','3. 适用边界与下一步','','## 来源',...d.sources.map(s=>'- '+(s.url||'[待补链接]')+' — '+s.note),'','## 结尾','[给读者一个可以执行的下一步]'
  ]:[
    '# '+d.topic,'','> For: '+d.audience,'','## Opening: the reader’s problem','[Describe a real reader situation without invented data]','','## Your point of view',d.angle,'','## Evidence to verify',d.evidence||'[Add first-hand experience or verifiable facts]','','## Article route',
    '1. The input readers usually miss','2. A concrete example of the method','3. Boundaries and the next action','','## Sources',...d.sources.map(s=>'- '+(s.url||'[add URL]')+' — '+s.note),'','## Closing','[Give the reader one practical next step]'
  ];
  $('draft').value=text.join('\n');save();status('outlineReady');
}
async function generate(){
  const d=state();if(!d.topic||!d.audience||!d.angle){status('missing',true);return;}
  d.apiKey=$('api-key').value.trim();if(!d.baseUrl||!d.model||!d.apiKey){status('apiMissing',true);return;}
  $('generate').disabled=true;status('generating');
  try{
    const response=await fetch('/api/generate',{method:'POST',headers:{'Content-Type':'application/json','X-Local-Token':document.querySelector('meta[name="local-token"]').content},body:JSON.stringify(d)});
    const result=await response.json();
    if(!response.ok)throw new Error(result.error||'Generation failed.');
    $('draft').value=result.article;save();status('generated');
  }catch(error){status(error.message,true);}finally{$('generate').disabled=false;}
}
function restore(){try{const data=JSON.parse(localStorage.getItem('la-project')||'{}');const mapping={topic:'topic',audience:'audience',platform:'platform',angle:'angle',evidence:'evidence',query:'query',intent:'intent',canonical:'canonical',outputLanguage:'output-language',words:'words',baseUrl:'base-url',model:'model',draft:'draft'};for(const [key,id] of Object.entries(mapping))if(data[key]!=null)$(id).value=data[key];for(const s of data.sources||[])sourceRow(s.url,s.note);}catch{}if(!document.querySelector('.source-row'))sourceRow();setLanguage(localStorage.getItem('la-lang')||'en');}
for(const id of fields)$(id).addEventListener('input',save);
$('language').onclick=()=>setLanguage(lang==='en'?'zh':'en');
$('add-source').onclick=()=>{sourceRow();save();};
$('sample').onclick=()=>{$('topic').value=tr('sampleTopic');$('audience').value=tr('sampleAudience');$('angle').value=tr('sampleAngle');$('evidence').value=tr('sampleEvidence');$('query').value=lang==='en'?'mulch bag calculator':'覆盖物袋数计算';$('sources').replaceChildren();sourceRow();save();status('sampleLoaded');};
$('outline').onclick=outline;$('generate').onclick=generate;
$('copy').onclick=async()=>{await navigator.clipboard.writeText($('draft').value);status('copied');};
$('download').onclick=()=>{const blob=new Blob([$('draft').value],{type:'text/markdown;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='longform-atlas-draft.md';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);status('downloaded');};
$('audit-button').onclick=()=>{
  const d=state();const words=d.outputLanguage==='zh'?(d.draft.match(/[\u4e00-\u9fff]/g)||[]).length:(d.draft.match(/\b[\w'-]+\b/g)||[]).length;
  const headings=(d.draft.match(/^#{1,6}\s/gm)||[]).length;
  const notes=[];if(!d.evidence)notes.push(tr('auditNoEvidence'));if(!d.sources.length)notes.push(tr('auditNoSources'));if(words<d.words*0.65)notes.push(tr('auditShort'));if(!notes.length)notes.push(tr('auditReady'));
  $('audit').textContent=tr('auditResult').replace('{words}',words).replace('{headings}',headings).replace('{sources}',d.sources.length).replace('{query}',d.query||tr('auditNoQuery')).replace('{notes}',notes.join(' '));
};
restore();
