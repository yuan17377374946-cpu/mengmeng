TEXTS.unshift({id:'warmup',title:'Get ready · Warm up',cn:'导入与短对话',page:'26–27',focus:'先想一想朋友的特点，再说出怎样做一个好朋友。六个行动词组见“朋友的行动”。',lines:[
['What are your friends like?','你的朋友们是什么样的？'],
['What can you do to keep your friendship strong?','你能做些什么来让友谊更牢固？'],
['How can you be a good friend?','你怎样才能成为一位好朋友？'],
['This is nice!','这真不错！'],
['Yes, it is.','是的，的确如此。']
]});
TEXTS.splice(2,0,{id:'profile',title:'Duoduo · My three best friends',cn:'多多介绍朋友',page:'29',hasGaps:true,focus:'本页是课本的连词填空短文，四个空格按原题保留。先通读，再到“连词工作坊”完成第4–7题。',lines:[
['I have three best friends: Tutu, Xiaojun and Momo.','我有三个最好的朋友：兔兔、小军和默默。'],
['Tutu and I live in the same street.','兔兔和我住在同一条街上。'],
['We play games together ___ we always have fun.','我们一起玩游戏，___ 我们总是很开心。'],
['Xiaojun and I have different hobbies ___ we enjoy talking to each other.','小军和我有不同的爱好，___ 我们喜欢互相交谈。'],
['Momo often makes me laugh ___ he is funny.','默默经常让我笑，___ 他很有趣。'],
['He is very musical ___ we often sing together.','他很擅长音乐，___ 我们经常一起唱歌。'],
['He’s very cool.','他很酷。'],
['I love my friends.','我爱我的朋友们。'],
['We’re happy together.','我们在一起很快乐。']
]});
const TEXTBOOK_LISTENING_LINES=[
['Sally, do these.','萨莉，做这些事。'],
['Then you and Mia can be happy friends again.','这样你和米娅就能再次成为快乐的朋友。'],
['First, say ___ to Mia because friends should be ___ to each other.','首先，对米娅说 ___，因为朋友应该对彼此 ___。'],
['Then have a ___ with Mia.','然后和米娅进行一次 ___。'],
['Friends should ___ to each other.','朋友应该互相 ___。'],
['Try to find the ___ plan for the homework.','试着为这份作业找到 ___ 计划。']
];
const TEXTBOOK_ACTIVITIES=[
{page:'34',title:'海报准备',items:['Who is / are your best friend(s)?','What do you like to do with your best friend(s)?','What are the rules of your friendship?']},
{page:'36',title:'Play to win! · 单元复习',items:['We are friends because we...','Friends play together and…','It’s important to have friends because…','How do you make a new friend?','Friends should ___ to each other.','Name one of your best friends and talk about him / her.','Tell one similarity and one difference between you and your friends.','My best friend is different from me, but…','What makes a good friend?','How do you work on problems between you and your friends?']},
{page:'36',title:'Check it · 单元自评',items:['I can talk about friendship with words and expressions like ___;','I can share what I do with my best friend(s): ___;','I know how to be a good friend: ___.']}
];
function textbookListening(){return `<section class="card textbook-listening" style="margin:20px 0"><div class="eyebrow">课本 p33 · 听力原题文字</div><h2>Sally and Mia</h2><p class="notice">当前 PDF 没有附原录音或听力脚本。以下保留原题，不提供猜测答案；下方5段是另外编写的拓展听力。</p><h3>3 Listen and choose.</h3><p class="en">Why are Sally and Mia angry with each other?</p><ol type="a" class="lesson-plan"><li>Because they want to do different things on Saturday.</li><li>Because they don’t want to share things.</li><li>Because they have different plans for their science homework.</li></ol><h3>4 Listen again and write.</h3>${TEXTBOOK_LISTENING_LINES.map((l,i)=>`<label class="field"><span class="en">${esc(l[0])}</span><span class="translation" style="display:block">${l[1]}</span>${l[0].includes('___')?`<input data-draft="textbookListen${i}" value="${esc(state.draft['textbookListen'+i])}" placeholder="拿到原录音后填写；本题如有两个空，请按顺序记录">`:''}</label>`).join('')}<h3>5 Work in groups. Think and share.</h3><p>Do you and your friends have problems?<br>What do you do?</p><a class="chip" href="#texts">两句课本示例回答见原文阅读室 → 坦诚地说出来</a></section><div class="section-head"><h2>下面开始：自编拓展听力</h2><span class="badge">语音合成 · 非原录音</span></div>`;}
function textbookDirectory(){const rows=[['26–27','导入问题、短对话','原文阅读室 → 导入与短对话；词组在朋友的行动'],['28','Duoduo’s best friends','原文阅读室 → 多多最好的朋友们'],['29','In focus；朋友介绍填空短文','连词工作坊；原文阅读室 → 多多介绍朋友'],['30–31','Friends with differences','原文阅读室 → 有差异的朋友'],['32','We’re friends again!','原文阅读室 → 我们又是朋友了'],['33','听力原题；口头交流示例','听力小电台 → 原题文字；原文阅读室 → 坦诚地说出来'],['34–35','海报问题与范文','下方教材活动；原文阅读室 → 他们是我最好的朋友'],['36','Play to win!；Check it','下方教材活动；复习与错题'],['37','International Day of Friendship','原文阅读室 → 国际友谊日']];return `<section class="card" style="margin-top:20px"><h2>教材内容对照表</h2><p class="lead">逐页对应你上传的12页 PDF。原文阅读区收录8个模块；填空保留原题，原录音尚未提供。</p><div style="overflow:auto"><table class="coverage-table"><thead><tr><th>课本页码</th><th>内容</th><th>网页位置</th></tr></thead><tbody>${rows.map(r=>`<tr>${r.map(x=>`<td>${x}</td>`).join('')}</tr>`).join('')}</tbody></table></div></section>${TEXTBOOK_ACTIVITIES.map(a=>`<section class="card" style="margin-top:18px"><span class="badge">课本 p${a.page} · 教材活动原文</span><h3 style="margin-top:12px">${a.title}</h3><ol class="lesson-plan">${a.items.map(s=>`<li class="en">${esc(s)}</li>`).join('')}</ol></section>`).join('')}`;}
