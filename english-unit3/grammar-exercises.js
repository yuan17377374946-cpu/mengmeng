const CONNECTORS=[
{word:'and',cn:'和；并且',relation:'补充、并列',tag:'课本重点',sample:'My friend is funny and kind.',meaning:'我的朋友有趣又友善。',hint:'把同类信息、人物或活动加在一起。'},
{word:'but',cn:'但是',relation:'转折',tag:'课本重点',sample:'We are different, but we are good friends.',meaning:'我们不同，但我们是好朋友。',hint:'后面的情况和前面的预期不同。'},
{word:'because',cn:'因为',relation:'引出原因',tag:'课本重点',sample:'I like her because she helps me.',meaning:'我喜欢她，因为她帮助我。',hint:'问“为什么”，because 后面的内容给出原因。'},
{word:'or',cn:'或者；还是',relation:'选择',tag:'本课拓展',sample:'Do you want to read or draw?',meaning:'你想读书还是画画？',hint:'在问句中给出两个选择。注意听清要选哪一个。'},
{word:'so',cn:'所以',relation:'引出结果',tag:'本课拓展',sample:'It is raining, so we stay at home.',meaning:'下雨了，所以我们待在家里。',hint:'先说原因，再用 so 引出发生的结果。'}
];
const GQ=(id,prompt,options,answer,why,category='语法 / 连接词')=>({...Q(id,prompt,options,answer,why,'自编练习 · 五个连接词'),category});
const RELATIONS=['补充、并列','转折','解释原因','选择','引出结果'];
const RELATION_QUIZZES=[
GQ('gr1','我们一起读书。我们还一起玩游戏。\n两部分是什么关系？',RELATIONS,0,'两项活动是补充、并列的，用 and 连接。'),
GQ('gr2','安娜会唱歌。她也会跳舞。\n两部分是什么关系？',RELATIONS,0,'“也会”是在增加一个本领，用 and。'),
GQ('gr3','我喜欢踢足球。我的朋友却喜欢画画。\n这里强调什么关系？',RELATIONS,1,'这里强调两人的不同，适合用 but 表达转折。'),
GQ('gr4','我们住在不同的街道。但是我们每天都在学校见面。\n两部分是什么关系？',RELATIONS,1,'住得不同，却仍每天见面，but 表示转折。'),
GQ('gr5','我喜欢和莉莉聊天，因为她认真听我说话。\n“她认真听”是在做什么？',RELATIONS,2,'它在解释“我喜欢聊天”的原因，对应 because。'),
GQ('gr6','你想读书还是画画？\n“读书”和“画画”之间是什么关系？',RELATIONS,3,'让对方选一项，用 or。'),
GQ('gr7','下雨了，所以我们待在家里。\n“待在家里”在这里是什么？',RELATIONS,4,'下雨是原因，待在家里是结果，用 so 引出结果。'),
GQ('gr8','本今天很开心，因为好朋友来参加他的生日聚会了。\n“朋友来参加聚会”是在做什么？',RELATIONS,2,'后半部分说明本开心的原因，用 because。')
];
const FIVE_WORDS=['and','but','because','or','so'];
const CONTEXT_CONNECTORS=[
GQ('gc1','We sing ___ dance at the school party.\n按中文意思选择：我们在学校聚会上唱歌、跳舞。',FIVE_WORDS,0,'唱歌和跳舞是并列活动，用 and。'),
GQ('gc2','I like milk, ___ my friend doesn’t like it.\n按中文意思选择：我喜欢牛奶，但我的朋友不喜欢。',FIVE_WORDS,1,'喜欢和不喜欢形成转折，用 but。'),
GQ('gc3','I like this book ___ the story is funny.\n按中文意思选择：我喜欢这本书，因为故事很有趣。',FIVE_WORDS,2,'故事有趣是喜欢这本书的原因，用 because。'),
GQ('gc4','Anna has a rabbit ___ a dog.\n按中文意思选择：安娜养了一只兔子和一只狗。',FIVE_WORDS,0,'两只动物都养了，用 and 连接。'),
GQ('gc5','My friend is small, ___ she can run very fast.\n按中文意思选择：我的朋友个子小，但是她跑得很快。',FIVE_WORDS,1,'题目强调与预期不同的情况，用 but。'),
GQ('gc6','Ben is unhappy ___ he can’t find his favourite toy.\n按中文意思选择：本不开心，因为他找不到最喜欢的玩具。',FIVE_WORDS,2,'找不到玩具是不开心的原因。'),
GQ('gc7','Would you like an apple ___ a banana?\n按中文意思选择：你想要一个苹果还是一根香蕉？',FIVE_WORDS,3,'让对方作选择，用 or。'),
GQ('gc8','I forgot my book, ___ my friend shares hers with me.\n按中文意思选择：我忘带书了，所以朋友和我共用她的书。',FIVE_WORDS,4,'先说忘带书的原因，再说朋友共用书的结果，用 so。forgot：忘记。'),
GQ('gc9','It is raining, ___ we stay at home.\n按中文意思选择：下雨了，所以我们待在家里。',FIVE_WORDS,4,'原因在前，结果在后，用 so。'),
GQ('gc10','Do you want to read ___ draw?\n按中文意思选择：你想读书还是画画？',FIVE_WORDS,3,'这里是两个活动之间作选择，用 or。')
];
const CAUSE_QUIZZES=[
GQ('ga1','We stay at home because it is raining.\n哪一部分是原因？',['We stay at home.','It is raining.'],1,'下雨是原因，待在家里是结果。'),
GQ('ga2','It is raining, so we stay at home.\n哪一部分是结果？',['It is raining.','We stay at home.'],1,'so 引出的 we stay at home 是结果。'),
GQ('ga3','保持原意，改用 so：\nWe stay at home because it is raining.',['We stay at home, so it is raining.','Because it is raining, so we stay at home.','It is raining, so we stay at home.'],2,'改用 so 时，先说原因“下雨”，再说结果“待在家里”。同一因果连接练习中不同时使用 because 和 so。'),
GQ('ga4','保持原意，改用 because：\nShe helps me, so I like her.',['I like her because she helps me.','She helps me because I like her.','Because I like her, so she helps me.'],0,'原句的原因是“她帮助我”，because 后仍要接这个原因，不能颠倒。'),
GQ('ga5','保持原意，改用 so：\nBen is unhappy because he can’t find his toy.',['Ben is unhappy, so he can’t find his toy.','Ben can’t find his toy, so he is unhappy.','Ben can’t find his toy because he is unhappy.'],1,'找不到玩具 → 不开心。保留这个方向。'),
GQ('ga6','保持原意，改用 because：\nWe listen to each other, so we understand each other.',['We listen to each other because we understand each other.','We understand each other because we listen to each other.','We understand each other, so we listen to each other.'],1,'原句是“互相倾听”帮助我们“互相理解”。because 后保留原因。understand：理解。')
];
const JOIN_EXERCISES=[
{id:'gj1',connector:'and',lines:['My friend is funny.','My friend is musical.'],reference:'My friend is funny and musical.',accepted:['My friend is funny and musical.','My friend is funny and my friend is musical.','My friend is funny and she is musical.','My friend is funny and he is musical.'],why:'同一个主语的两个特点可以用 and 连接，后半句可省略重复的主语和 is。'},
{id:'gj2',connector:'and',lines:['We read books together.','We talk about the stories.'],reference:'We read books together and talk about the stories.',accepted:['We read books together and talk about the stories.','We read books together and we talk about the stories.'],why:'两个活动是补充信息，可保留或省略第二个 we。'},
{id:'gj3',connector:'but',lines:['I like meat.','My friend likes vegetables.'],reference:'I like meat, but my friend likes vegetables.',accepted:['I like meat but my friend likes vegetables.'],why:'这里强调饮食喜好的不同。my friend 后仍用 likes。'},
{id:'gj4',connector:'because',lines:['I want to help Anna.','She is my friend.'],reference:'I want to help Anna because she is my friend.',accepted:['I want to help Anna because she is my friend.','Because she is my friend, I want to help Anna.'],why:'“她是我的朋友”是想帮助她的原因。because 引导的原因也可以放在句首。'},
{id:'gj5',connector:'or',lines:['Do you want to read?','Do you want to draw?'],reference:'Do you want to read or draw?',accepted:['Do you want to read or draw?','Do you want to read or to draw?'],why:'询问两个活动中选哪一个，保留一个问句结构即可。'},
{id:'gj6',connector:'so',lines:['It is raining.','We stay at home.'],reference:'It is raining, so we stay at home.',accepted:['It is raining so we stay at home.'],why:'so 前是原因“下雨”，后是结果“待在家里”。'}
];
const CONNECTOR_PASSAGES=[
{id:'gp1',title:'不同的朋友',vocab:'spend time：度过时光',text:'Lucy is my best friend. She is funny ①___ musical. We have different hobbies, ②___ we enjoy spending time together. I like talking to her ③___ she always listens to me.',questions:[
GQ('gp1a','① 她既有趣又擅长音乐：She is funny ___ musical.',FIVE_WORDS,0,'两个特点并列，用 and。','语法 / 短文填空'),
GQ('gp1b','② 虽然爱好不同，但仍享受在一起的时间。',FIVE_WORDS,1,'不同与仍相处愉快形成转折，用 but。','语法 / 短文填空'),
GQ('gp1c','③ 她认真倾听，是我喜欢和她说话的原因。',FIVE_WORDS,2,'原因用 because 引出。','语法 / 短文填空')]},
{id:'gp2',title:'一起做海报',vocab:'poster：海报；clear：清楚的',text:'Tom and I make a poster together. I draw pictures ①___ Tom writes the words. We have different ideas about the colours, ②___ we listen to each other. Our teacher likes our poster ③___ the pictures and words are clear.',questions:[
GQ('gp2a','① 我画图，汤姆写字。这里并列介绍两人的分工。',FIVE_WORDS,0,'两人的活动并列，用 and。','语法 / 短文填空'),
GQ('gp2b','② 对颜色有不同想法，但我们仍倾听彼此。',FIVE_WORDS,1,'题目强调转折关系，用 but。','语法 / 短文填空'),
GQ('gp2c','③ 图片和文字清楚，是老师喜欢海报的原因。',FIVE_WORDS,2,'在 because 后解释老师喜欢海报的原因。','语法 / 短文填空')]},
{id:'gp3',title:'下雨天的新计划',vocab:'outside：在外面；a board game：桌面游戏',text:'It is raining, ①___ we can’t play outside. I ask Mia, “Do you want to read ②___ play a board game?” We choose a board game. We have different ideas, ③___ we talk openly. We are happy ④___ we find a game we both like.',questions:[
GQ('gp3a','① 下雨了，所以不能在外面玩。',FIVE_WORDS,4,'原因在前，so 后是结果。','语法 / 短文填空'),
GQ('gp3b','② 问米娅想读书还是玩桌面游戏。',FIVE_WORDS,3,'提出两个选择，用 or。','语法 / 短文填空'),
GQ('gp3c','③ 有不同想法，但我们坦诚沟通。',FIVE_WORDS,1,'转折用 but。','语法 / 短文填空'),
GQ('gp3d','④ 找到都喜欢的游戏，是我们开心的原因。',FIVE_WORDS,2,'because 后说原因。','语法 / 短文填空')]}
];
const EXPRESSION_EXERCISES=[
{id:'ge1',connector:'and',prompt:'说出你和朋友一起做的两件事。',starter:'We often ___ and ___ together.',reference:'We often read books and play games together.'},
{id:'ge2',connector:'but',prompt:'说出你和朋友的一个不同点。',starter:'I like ___, but my friend likes ___.',reference:'I like meat, but my friend likes vegetables.'},
{id:'ge3',connector:'because',prompt:'用一件具体的小事，解释你为什么喜欢这位朋友。',starter:'I like my friend because ___.',reference:'I like my friend because she listens to me.'},
{id:'ge4',connector:'or',prompt:'邀请朋友在两项活动中选择一项。',starter:'Do you want to ___ or ___?',reference:'Do you want to read or draw?'},
{id:'ge5',connector:'so',prompt:'先说一件事的原因，再说它的结果。',starter:'___, so ___.',reference:'It is raining, so we play at home.'}
];
const EXTRA_GRAMMAR_QUIZZES=[...RELATION_QUIZZES,...CONTEXT_CONNECTORS,...CAUSE_QUIZZES,...CONNECTOR_PASSAGES.flatMap(p=>p.questions)];
const GRAMMAR_TABS=[['learn','五词讲解'],['relations','判断关系'],['fill','情境填空'],['join','合并句子'],['cause','因果转换'],['passages','短文填空'],['express','自己表达'],['textbook','课本与原有练习']];
let grammarTab='learn';
function grammarDashboard(){const ids=new Set([...GRAMMAR,...EXTRA_GRAMMAR_QUIZZES].map(q=>q.id));const done=Object.entries(state.answers).filter(([id,a])=>ids.has(id)&&a.correct).length;return title('Connect the ideas','连词工作坊','课本重点 and / but / because · 拓展 or / so')+`<div class="toolbar grammar-tabs">${GRAMMAR_TABS.map(([id,label])=>`<button data-grammartab="${id}" class="${grammarTab===id?'selected':''}">${label}</button>`).join('')}</div><div class="practice-summary"><span>客观练习 <strong>${done} / ${ids.size}</strong> 已答对</span><span>另有6道合并句子、5道自主表达；每轮可以选少量题做。</span></div>${grammarPanel()}`;}
function grammarPanel(){switch(grammarTab){case'learn':return connectorLesson();case'relations':return `<p class="lead">先判断意思，再想连接词。每题答完说出你找到的线索。</p>${RELATION_QUIZZES.map(quiz).join('')}`;case'fill':return `<div class="notice">按题目给出的中文意思选择连接词。没有明确语境的自由表达，可以有不同的合理连接方式。</div>${CONTEXT_CONNECTORS.map(quiz).join('')}`;case'join':return `<div class="notice">先口头连成一句，再自己输入。系统能识别常见参考写法；其他写法保留给老师确认。空格、大小写、普通标点不同不影响参考匹配。</div>${JOIN_EXERCISES.map(typedGrammar).join('')}`;case'cause':return causeLesson()+CAUSE_QUIZZES.map(quiz).join('');case'passages':return CONNECTOR_PASSAGES.map(p=>`<article class="card passage-card"><span class="badge">自编短文 · ${p.questions.length}空</span><h2 style="margin-top:12px">${p.title}</h2><p class="en">${esc(p.text)}</p><p class="lead">词语提示：${p.vocab}</p></article>${p.questions.map(quiz).join('')}`).join('');case'express':return `<div class="notice">请根据真实情况写，不需要和例句一样。写完可以请老师确认，再自己修改。这里记录完成情况，不自动判定自由表达的语法正确性。</div>${EXPRESSION_EXERCISES.map(typedGrammar).join('')}`;case'textbook':return `<div class="notice">本单元教材重点是 and、but、because；下面保留课本题目和原有练习。or、so 是本节拓展。</div>${GRAMMAR.map(quiz).join('')}`;default:return connectorLesson();}}
function connectorLesson(){return `<div class="connector-grid">${CONNECTORS.map(c=>`<article class="card concept-card"><span class="badge ${c.tag==='本课拓展'?'extension-badge':''}">${c.tag}</span><div class="concept">${c.word}</div><h3>${c.cn} · ${c.relation}</h3><blockquote>${c.sample}</blockquote><p style="margin-top:10px">${c.meaning}</p><p class="lead">${c.hint}</p>${sound(c.sample)}</article>`).join('')}</div><div class="two-grid" style="margin-top:20px"><article class="card"><h2>and 和 or：两个都说，还是作选择？</h2><p class="en">I like apples <strong>and</strong> bananas.</p><p class="lead">两种水果都喜欢。</p>${sound('I like apples and bananas.')}<p class="en">Would you like an apple <strong>or</strong> a banana?</p><p class="lead">让对方在两种水果之间作选择。</p>${sound('Would you like an apple or a banana?')}</article>${causeLesson()}</div><div class="notice">建议顺序：五词讲解 → 判断关系 → 情境填空 → 合并句子 → 因果转换 → 短文填空 → 自己表达。课本原题可随时回头检查。</div>`;}
function causeLesson(){return `<article class="card cause-lesson" style="margin-bottom:18px"><span class="badge">重点比较 · because / so</span><h2 style="margin-top:12px">原因和结果，先分清再连接</h2><div class="cause-flow"><span><small>原因</small>It is raining.</span><b aria-label="导致">→</b><span><small>结果</small>We stay at home.</span></div><p class="en">We stay at home <strong>because it is raining</strong>.</p><p class="translation">先说结果，because 后解释原因。</p><p class="en">It is raining, <strong>so we stay at home</strong>.</p><p class="translation">先说原因，so 后引出结果。</p>${sound('We stay at home because it is raining. It is raining, so we stay at home.')}<p class="lead" style="margin:15px 0 0">because 引导的原因也能放句首：Because it is raining, we stay at home. 在本组因果连接练习中，because 和 so 选一个使用，不照搬中文把两个同时加进去。</p></article>`;}
function normalizeSentence(s){return String(s).normalize('NFKC').toLowerCase().replace(/[’‘]/g,"'").replace(/[.,!?;:，。！？；：]/g,' ').replace(/\s+/g,' ').trim();}
function assessGrammarWriting(text,ex){if(!text.trim())return {status:'empty',message:'先写一句自己的答案。'};const words=normalizeSentence(text).split(' ');if(!words.includes(ex.connector))return {status:'revise',message:`这题要用 ${ex.connector} 连接，请补上并检查句意。`};if((ex.connector==='because'||ex.connector==='so')&&words.includes('because')&&words.includes('so'))return {status:'revise',message:'这题表达同一组因果关系，because 和 so 选一个使用。'};if(ex.accepted?.some(s=>normalizeSentence(s)===normalizeSentence(text)))return {status:'matched',message:'✓ 与一种参考写法一致。再说说连接词表达了什么关系。'};return {status:'review',message:'答案已保存，请对照例句解释自己的写法，再请老师确认。自由表达不按固定句子判错。'};}
function typedGrammar(ex){const saved=state.grammarWriting?.[ex.id]||{},isJoin=!!ex.lines;return `<section class="card exercise typed-grammar"><span class="badge">${isJoin?'合并句子':'真实表达'} · 使用 ${ex.connector}</span>${isJoin?`<p class="prompt">${ex.lines.map(esc).join('<br>')}</p>`:`<h3 style="margin-top:14px">${ex.prompt}</h3><p class="en">${ex.starter}</p>`}<form data-grammarform="${ex.id}"><label class="field">${isJoin?'把两句合成一句':'写一句自己的话'}<textarea data-grammarinput="${ex.id}" rows="2" placeholder="在这里写英文" required>${esc(saved.text)}</textarea></label><div class="toolbar"><button class="primary" type="submit">${isJoin?'检查并对照':'保存并对照'}</button><button type="button" data-grammarreference="${ex.id}">查看参考</button><button type="button" data-grammarreview="${ex.id}">老师已检查</button></div></form><div id="grammar-feedback-${ex.id}" aria-live="polite">${saved.status?grammarWritingFeedback(ex,saved):''}</div><div class="teacher-only teacher-answer">参考：${ex.reference}<br>${ex.why||'参考仅展示表达方式，答案应符合学生的真实情况。请检查句意、主语、动词、连接词和标点。'}</div></section>`;}
function grammarWritingFeedback(ex,saved){return `<div class="feedback ${saved.status==='matched'||saved.status==='teacher_checked'?'ok':''}">${esc(saved.message||'老师已检查，可以根据建议继续修改。')}${saved.status==='teacher_checked'?' ✓':''}<br><span>参考：${esc(ex.reference)}</span>${ex.why?`<br>${ex.why}`:''}</div>`;}
function storeGrammarWriting(id,text,check=false){const ex=[...JOIN_EXERCISES,...EXPRESSION_EXERCISES].find(q=>q.id===id);if(!ex)return null;state.grammarWriting??={};const old=state.grammarWriting[id]||{};const result=check?assessGrammarWriting(text,ex):{};const value={text,...(check?result:{status:'draft',message:'草稿已保存。'})};if(old.text===text&&old.status==='teacher_checked'&&!check)return old;state.grammarWriting[id]=value;save();return value;}
document.addEventListener('input',e=>{const id=e.target.dataset.grammarinput;if(id)storeGrammarWriting(id,e.target.value);});
document.addEventListener('submit',e=>{const id=e.target.dataset.grammarform;if(!id)return;e.preventDefault();const input=$(`[data-grammarinput="${id}"]`),ex=[...JOIN_EXERCISES,...EXPRESSION_EXERCISES].find(x=>x.id===id);const saved=storeGrammarWriting(id,input.value,true);if(saved.status==='empty'){toast(saved.message);return;}$('#grammar-feedback-'+id).innerHTML=grammarWritingFeedback(ex,saved);});
document.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.grammartab){grammarTab=b.dataset.grammartab;render();return;}const id=b.dataset.grammarreference||b.dataset.grammarreview;if(!id)return;const ex=[...JOIN_EXERCISES,...EXPRESSION_EXERCISES].find(x=>x.id===id);if(b.dataset.grammarreference){$('#grammar-feedback-'+id).innerHTML=`<div class="feedback">参考：${ex.reference}<br>${ex.why||'根据自己的真实情况作答，例句只帮助理解表达方式。'}</div>`;return;}if(!$('#teacher').checked){toast('请打开教师模式，再由老师检查。');return;}const value=$(`[data-grammarinput="${id}"]`).value;if(!value.trim()){toast('先写下答案，再请老师检查。');return;}state.grammarWriting??={};state.grammarWriting[id]={text:value,status:'teacher_checked',message:'老师已检查，可根据课堂建议继续修改。'};save();$('#grammar-feedback-'+id).innerHTML=grammarWritingFeedback(ex,state.grammarWriting[id]);});
