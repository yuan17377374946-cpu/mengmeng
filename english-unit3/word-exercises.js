// Extra vocabulary practice is authored from Unit 3's fourteen words.
const WQ=(id,prompt,options,answer,why,category,audio)=>({...Q(id,prompt,options,answer,why,'本单元词汇拓展练习'),category,audio});
const PHONIC_QUIZZES=[
WQ('ph1','tip 中字母 i 的发音是？',['/ɪ/','/iː/','/aɪ/'],0,'tip /tɪp/，中间是短元音 /ɪ/，声音短而放松。','音标 / 元音','tip'),
WQ('ph2','key 中 ey 的发音是？',['/e/','/iː/','/ɪ/'],1,'key /kiː/ 的元音是长元音 /iː/。别把它读成短音 /ɪ/。','音标 / 元音','key'),
WQ('ph3','听 tip 和 key，它们的元音分别是？',['/ɪ/ 和 /iː/','/iː/ 和 /ɪ/','都是 /ɪ/'],0,'tip 是 /ɪ/，key 是 /iː/。不只比较长短，也注意嘴形和舌位。','音标 / 元音','tip. key.'),
WQ('ph4','rabbit 中字母 a 的发音是？',['/ʌ/','/ɑː/','/æ/'],2,'rabbit /ˈræbɪt/ 的 a 发 /æ/，嘴张开，舌位偏前。','音标 / 元音','rabbit'),
WQ('ph5','funny 中字母 u 的发音是？',['/æ/','/ʌ/','/uː/'],1,'funny /ˈfʌni/ 的 u 发 /ʌ/，不要按字母名称读成 /juː/。','音标 / 元音','funny'),
WQ('ph6','plan 和 rabbit 中字母 a 的发音……',['相同，都是 /æ/','不同，分别是 /æ/ 和 /ʌ/','相同，都是 /eɪ/'],0,'plan /plæn/ 和 rabbit /ˈræbɪt/ 中的 a 都是 /æ/。','音标 / 元音','plan. rabbit.'),
WQ('ph7','both 中字母 o 的发音是？',['/ɒ/','/ʌ/','/əʊ/'],2,'按本页英音标注，both /bəʊθ/ 中的 o 是双元音 /əʊ/，从前一个音自然滑向后一个音。','音标 / 元音','both'),
WQ('ph8','openly 的开头 o 和哪个单词的元音相同？',['tip','both','plan'],1,'openly /ˈəʊpənli/ 的开头与 both 中的 /əʊ/ 相同。','音标 / 元音','openly. both.'),
WQ('ph9','friendship 中 sh 对应哪个音？',['/s/','/ʃ/','/tʃ/'],1,'sh 在 friendship 中发 /ʃ/，舌头靠后一些，送气摩擦，不加一个额外的元音。','音标 / 辅音','friendship'),
WQ('ph10','both 结尾 th 对应哪个音？',['/θ/','/s/','/ð/'],0,'both 结尾是清辅音 /θ/。舌尖轻触上下齿之间送气，声带不振动。','音标 / 辅音','both'),
WQ('ph11','musical 中字母 s 对应哪个音？',['/ʃ/','/s/','/z/'],2,'musical /ˈmjuːzɪkl/ 中 s 发浊辅音 /z/，可以轻触喉咙感受声带振动。','音标 / 辅音','musical'),
WQ('ph12','friendship 中 ie 对应哪个元音？',['/aɪ/','/iː/','/e/'],2,'friendship 的 friend 部分是 /frend/，ie 在这里发 /e/。这是这个词的读法，不可套用到所有 ie 单词。','音标 / 元音','friendship'),
WQ('st1','unhappy /ʌnˈhæpi/ 的重音在哪里？',['第一音节 un','第二音节 hap','第三音节 py'],1,'重音符号 ˈ 放在重读音节前面；unhappy 的重音在第二音节 /hæ/。','音标 / 重音','unhappy'),
WQ('st2','friendship /ˈfrendʃɪp/ 的重音在哪里？',['第一音节 friend','第二音节 ship','两个音节都不重读'],0,'ˈ 在 /frend/ 前，第一音节重读。','音标 / 重音','friendship'),
WQ('st3','similar /ˈsɪmələ(r)/ 的重音在哪里？',['第二音节','第三音节','第一音节'],2,'ˈ 在第一个音节前。先听，再模仿“第一部分更突出”的节奏。','音标 / 重音','similar'),
WQ('st4','openly /ˈəʊpənli/ 的重音在哪里？',['第一音节','最后一音节','第二音节'],0,'openly 的首音节重读，不要把词尾 -ly 读得最重。','音标 / 重音','openly'),
WQ('st5','difference /ˈdɪfrəns/ 的重音在哪里？',['最后一部分','第一音节','每一部分都一样重'],1,'重音在第一音节 /dɪf/。中间和词尾读轻一些，不要逐字母平均用力。','音标 / 重音','difference'),
WQ('st6','musical /ˈmjuːzɪkl/ 的重音在哪里？',['第一音节','第二音节','最后一音节'],0,'首音节 /mjuː/ 重读。music 和 musical 都保留开头的重音。','音标 / 重音','musical')
];
const HEAR_QUIZZES=WORDS.map((w,i)=>{const candidates=[w[0],WORDS[(i+3)%14][0],WORDS[(i+7)%14][0],WORDS[(i+10)%14][0]],shift=i%4,options=candidates.slice(shift).concat(candidates.slice(0,shift));return WQ('hear'+i,'先点播放：你听到的是哪个单词？',options,options.indexOf(w[0]),`${w[0]} ${w[1]}：${w[2]}。先比较元音，再听开头和结尾。`,'单词 / 听音辨词',w[0]);});
const CONTEXT_QUIZZES=[
WQ('cx1','We help and listen to each other. Our ___ is strong.',['friendship','rabbit','parent'],0,'前面说互相帮助、倾听，空格表示“我们的友谊”。','单词 / 语境'),
WQ('cx2','Duoduo feels sad. He is ___.',['musical','unhappy','similar'],1,'sad 是难过的，对应 unhappy；不是擅长音乐的或相似的。','单词 / 语境'),
WQ('cx3','Anna and I ___ like music.（我们两个都喜欢音乐。）',['key','tip','both'],2,'both 表示“两个都”，在这里放在实义动词 like 前。','单词 / 语境'),
WQ('cx4','Momo makes me laugh. He is ___.',['funny','unhappy','openly'],0,'让人发笑，说明他有趣，用 funny。','单词 / 语境'),
WQ('cx5','My friend enjoys music and is good at singing. She is ___.',['similar','musical','both'],1,'喜欢音乐、擅长唱歌，和 musical 的意思相符。','单词 / 语境'),
WQ('cx6','One ___ between us is that I like meat and she likes vegetables.',['different','openly','difference'],2,'One 后面需要单数名词：difference（一处差异）。','单词 / 语境'),
WQ('cx7','“___, what do we share?” Bird asks.',['Er','Both','Parent'],0,'Er 是思考或犹豫时的“呃”。','单词 / 语境'),
WQ('cx8','In the story, Bird and Dog get advice from ___.',['a plan','Rabbit','a key'],1,'教材故事里提出建议的角色是 Rabbit。','单词 / 语境'),
WQ('cx9','Friends share with each other. That’s the ___.',['openly','similar','key'],2,'这里 key 表示“关键”，不是字面上的钥匙。','单词 / 语境'),
WQ('cx10','My mother is a ___.',['parent','rabbit','plan'],0,'parent 指父亲或母亲，一位家长用单数。','单词 / 语境'),
WQ('cx11','Here is a useful ___: listen before you speak.',['both','tip','funny'],1,'后面给出一条建议，所以用 a useful tip。','单词 / 语境'),
WQ('cx12','We like the same games. Our hobbies are ___.',['openly','difference','similar'],2,'爱好相近，be 后用形容词 similar。','单词 / 语境'),
WQ('cx13','Let’s make a ___ for our homework.',['plan','parent','musical'],0,'make a plan 表示“制定一个计划”。','单词 / 语境'),
WQ('cx14','When we have a problem, we talk ___.',['open','openly','opening'],1,'这里要表达怎样交谈：talk openly，坦诚地交谈。','单词 / 语境')
];
const FORM_QUIZZES=[
WQ('fm1','We are ___.（我们是不同的。）',['different','difference','differently'],0,'are 后描述人的特点，用形容词 different。difference 是名词。','单词 / 词形'),
WQ('fm2','We have some ___.（我们有一些差异。）',['different','difference','differences'],2,'some 后这里用可数名词复数 differences。','单词 / 词形'),
WQ('fm3','My friend is ___ from me.',['difference','different','differences'],1,'be different from 是“与……不同”。','单词 / 词形'),
WQ('fm4','My ___ are at home.（我的父母都在家。）',['parent','parents','parentes'],1,'表示父母两人用 parents；parent 加 s 即可。','单词 / 词形'),
WQ('fm5','Here are two useful ___.',['tip','tipes','tips'],2,'two 后面用复数 tips，直接加 s。','单词 / 词形'),
WQ('fm6','选出与 happy 意思相反的词。',['unhappy','funny','musical'],0,'un- 在 unhappy 中表示“不”；happy 开心 → unhappy 不开心。','单词 / 词形'),
WQ('fm7','She likes music. She is very ___.',['musical','music','musics'],0,'music 是名词“音乐”；musical 是形容词，用来描述她。','单词 / 词形'),
WQ('fm8','We have two different ___ for Sunday.',['plan','plans','planning'],1,'two 后用名词复数 plans。','单词 / 词形')
];
const IPA_QUIZZES=WORDS.map((w,i)=>{const options=[WORDS[(i+2)%14][0],w[0],WORDS[(i+5)%14][0]],shift=i%3,rotated=options.slice(shift).concat(options.slice(0,shift));return WQ('ipa'+i,`看音标，先试着拼读，再选单词：\n${w[1]}`,rotated,rotated.indexOf(w[0]),`${w[1]} 对应 ${w[0]}：${w[2]}。核对重音，再到单词卡片听读。`,'音标 / 读音标');});
PHONIC_QUIZZES.push(...IPA_QUIZZES);
const WORD_QUIZZES=[...PHONIC_QUIZZES,...HEAR_QUIZZES,...CONTEXT_QUIZZES,...FORM_QUIZZES];
const CHUNKS=[['friend','ship'],['un','hap','py'],['bo','th'],['fun','ny'],['mu','sic','al'],['dif','fer','ence'],['e','r'],['rab','bit'],['k','ey'],['par','ent'],['t','ip'],['sim','i','lar'],['pl','an'],['open','ly']];
let phonicsGroup='元音',hearBatch=0,contextBatch=0,chunkIndex=0,chunkChoices=[],chunkPicked=[];
const WORD_MODES=[['cards','单词卡片'],['phonics','音标小课堂'],['hear','听音选词'],['chunks','词块拼拼乐'],['context','语境填词'],['forms','词形辨析'],['match','单词配对'],['spell','拼写挑战']];
function wordModeName(){return WORD_MODES.find(m=>m[0]===wordMode)?.[1]||'单词练习';}
function wordPracticeSummary(){const ids=new Set(WORD_QUIZZES.map(q=>q.id));let correct=0;for(const [id,a] of Object.entries(state.answers)){if((ids.has(id)||id.startsWith('chunk_'))&&a.correct)correct++;}return `<div class="practice-summary"><span>新增练习 <strong>${correct} / ${WORD_QUIZZES.length+CHUNKS.length}</strong> 已答对</span><span>建议每次选 4–6 题，错题说清原因后再做。</span></div>`;}
function phonicsPractice(){const groups=['元音','辅音','重音','读音标'];return `<div class="two-grid"><div class="card"><span class="badge">先认识，再辨认</span><h3 style="margin-top:12px">音标里的两个小信号</h3><p><strong>ː</strong> 跟在元音后，提示长元音，例如 key /kiː/。<br><strong>ˈ</strong> 放在重读音节前，例如 unhappy /ʌnˈhæpi/。</p><p class="lead">/ɪ/ 与 /iː/ 不只是长短不同，嘴形、舌位也不同。先听 tip 和 key，再模仿。</p>${sound('tip. key. unhappy.')}</div><div class="card"><h3>看口形，听词里的声音</h3><p><strong>/æ/</strong>：嘴张开，舌位偏前，试读 rabbit、plan。<br><strong>/ʌ/</strong>：嘴形放松，试读 funny。<br><strong>/θ/</strong>：舌尖轻放齿间，送气，试读 both。<br><strong>/ʃ/</strong>：舌头稍后，摩擦送气，试读 friendship。</p><p class="tiny">播放的是完整单词，不是音标符号。英音音标沿用本页词表；设备声音可能带不同口音。</p></div></div><div class="toolbar">${groups.map(g=>`<button data-phgroup="${g}" class="${phonicsGroup===g?'selected':''}">${g}练习 · ${PHONIC_QUIZZES.filter(q=>q.category.endsWith(g)).length}题</button>`).join('')}</div>${PHONIC_QUIZZES.filter(q=>q.category.endsWith(phonicsGroup)).map(quiz).join('')}`;}
function hearPractice(){return `<div class="notice">先听，再选英文单词。可以反复播放，也可以调整页面右上角语速。回答后会显示音标和中文；没有声音时，可由老师看教师答案读词。</div><div class="toolbar">${[0,1].map(i=>`<button data-hearbatch="${i}" class="${hearBatch===i?'selected':''}">第${i+1}组 · 7词</button>`).join('')}</div>${HEAR_QUIZZES.slice(hearBatch*7,hearBatch*7+7).map(quiz).join('')}`;}
function contextPractice(){return `<div class="notice">先理解整句话，再根据空格需要的意思与词性选择。每个课本单词都有一道语境题。</div><div class="toolbar">${[0,1].map(i=>`<button data-contextbatch="${i}" class="${contextBatch===i?'selected':''}">第${i+1}组 · 7题</button>`).join('')}</div>${CONTEXT_QUIZZES.slice(contextBatch*7,contextBatch*7+7).map(quiz).join('')}`;}
function formsPractice(){return `<div class="grid"><div class="card"><h3>different ↔ difference</h3><p>We <strong>are different</strong>.<br>We <strong>have differences</strong>.</p><p class="lead">一个描述特点，一个表示“差异”这种事物。</p></div><div class="card"><h3>parent → parents</h3><p>a parent → two parents<br>a tip → two tips<br>a plan → two plans</p><p class="lead">先看数量，再检查单复数。</p></div><div class="card"><h3>词形变了，作用也变了</h3><p>happy → unhappy<br>music → musical<br>open → openly</p><p class="lead">留意“不开心”“擅长音乐”“坦诚地交谈”分别需要什么形式。</p></div></div><div class="section-head"><h2>把词放在合适的位置</h2></div>${FORM_QUIZZES.map(quiz).join('')}`;}
function prepareChunks(){if(chunkChoices.length!==CHUNKS[chunkIndex].length)chunkChoices=shuffle(CHUNKS[chunkIndex].map((text,id)=>({text,id})));}
function chunkPractice(){prepareChunks();const w=WORDS[chunkIndex],a=state.answers['chunk_'+w[0]];return `<div class="notice">把打乱的字母块按顺序拼成单词。这是帮助记忆拼写的分块，不等于音节划分，也不表示每块只有一种固定读音。</div><div class="card chunk-card"><div class="row"><span class="badge">词块 ${chunkIndex+1} / 14</span><span class="badge">${a?.correct?'✓ 已拼对':'动手拼一拼'}</span></div><h2 style="margin-top:24px">${w[2]}</h2>${sound(w[0])}<div class="chunk-answer" aria-live="polite">${chunkPicked.length?chunkPicked.map((id,i)=>`<button data-chunkremove="${i}" aria-label="移除 ${chunkChoices.find(c=>c.id===id).text}">${chunkChoices.find(c=>c.id===id).text} ×</button>`).join(''):'<span>依次点击下面的字母块</span>'}</div><div class="chunk-bank">${chunkChoices.map(c=>`<button data-chunkpick="${c.id}" ${chunkPicked.includes(c.id)?'disabled':''}>${c.text}</button>`).join('')}</div><div class="toolbar"><button class="primary" data-wordaction="chunkcheck">检查词块</button><button data-wordaction="chunkreset">清空重拼</button><button data-wordaction="chunkhint">提示</button></div><div id="chunkFeedback" aria-live="polite"></div><div class="toolbar"><button data-wordaction="chunkprev">← 上一个</button><button data-wordaction="chunknext">下一个 →</button></div></div>`;}
function chunkAnswer(){return chunkPicked.map(id=>chunkChoices.find(c=>c.id===id).text).join('');}
function checkChunks(){const w=WORDS[chunkIndex],value=chunkAnswer();if(chunkPicked.length!==chunkChoices.length){toast('还有字母块没有用上，先拼完整。');return;}const id='chunk_'+w[0],correct=value===w[0];state.answers[id]={choice:value,correct,attempts:(state.answers[id]?.attempts||0)+1};if(correct)delete state.wrong[id];else state.wrong[id]={id,word:w[0],kind:'chunk',prompt:'词块拼写：'+w[2],student:value,answerText:w[0],category:'单词 / 词块拼写',why:`正确顺序：${CHUNKS[chunkIndex].join(' + ')}。${w[4]}`};save();$('#chunkFeedback').innerHTML=`<div class="feedback ${correct?'ok':'bad'}">${correct?'✓ 拼对了！试着不看词块，再去拼写挑战里写一遍。':`顺序还不对。正确分块：${CHUNKS[chunkIndex].join(' + ')}。再读一遍，重新拼。`}</div>`;}
document.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.phgroup){phonicsGroup=b.dataset.phgroup;render();return;}if(b.dataset.hearbatch!==undefined){hearBatch=Number(b.dataset.hearbatch);render();return;}if(b.dataset.contextbatch!==undefined){contextBatch=Number(b.dataset.contextbatch);render();return;}if(b.dataset.chunkpick!==undefined){const id=Number(b.dataset.chunkpick);if(!chunkPicked.includes(id))chunkPicked.push(id);render();return;}if(b.dataset.chunkremove!==undefined){chunkPicked.splice(Number(b.dataset.chunkremove),1);render();return;}if(b.dataset.retrychunk){chunkIndex=WORDS.findIndex(w=>w[0]===b.dataset.retrychunk);chunkChoices=[];chunkPicked=[];wordMode='chunks';if(location.hash==='#words')navigate('words');else location.hash='words';return;}switch(b.dataset.wordaction){case'chunkcheck':checkChunks();break;case'chunkreset':chunkPicked=[];render();break;case'chunknext':chunkIndex=(chunkIndex+1)%14;chunkChoices=[];chunkPicked=[];render();break;case'chunkprev':chunkIndex=(chunkIndex+13)%14;chunkChoices=[];chunkPicked=[];render();break;case'chunkhint':$('#chunkFeedback').innerHTML=`<div class="feedback">${WORDS[chunkIndex][4]}<br>第一个字母块是 ${CHUNKS[chunkIndex][0]}。</div>`;break;}});
