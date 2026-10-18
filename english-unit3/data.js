const WORDS = [
['friendship','/ˈfrendʃɪp/','友谊；朋友关系','关系','friend + ship → friendship'],
['unhappy','/ʌnˈhæpi/','伤心的；难过的；不开心的','感受','un-（不）+ happy'],
['both','/bəʊθ/','两个都','关系','both A and B：A 和 B 都'],
['funny','/ˈfʌni/','有趣的','特点','fun（乐趣）→ funny（有趣的）'],
['musical','/ˈmjuːzɪkl/','擅长音乐的；对音乐感兴趣的','特点','music → musical'],
['difference','/ˈdɪfrəns/','差别；差异','关系','difference 名词；different 形容词'],
['er','/ɜː(r)/','呃；哦','表达','思考或犹豫时的语气词'],
['rabbit','/ˈræbɪt/','兔','角色','rab · bit，注意双写 b'],
['key','/kiː/','关键','表达','That’s the key. 那就是关键。'],
['parent','/ˈpeərənt/','父；母','角色','a parent 一位家长；parents 父母'],
['tip','/tɪp/','窍门；忠告；建议','表达','a tip 一条建议；tips 多条建议'],
['similar','/ˈsɪmələ(r)/','相似的','特点','be similar to：与……相似'],
['plan','/plæn/','计划','表达','a plan；two plans'],
['openly','/ˈəʊpənli/','坦诚地','表达','talk openly：坦诚地交谈']
];
const PHRASES = [
['be happy for each other','为彼此感到高兴','朋友有好事时，真心为对方高兴。'],
['help each other','互相帮助','each other 表示“彼此；互相”。'],
['take care of each other','互相照顾','take care of 是一个完整词组。'],
['do happy things together','一起做开心的事','together 表示“一起”。'],
['listen to each other','互相倾听','listen 后接倾听的对象时要用 to。'],
['share things','分享东西','share things with a friend：和朋友分享东西。'],
['be different from','与……不同','different 是形容词，不要和 difference 混淆。'],
['talk openly','坦诚地交谈','openly 说明怎样交谈。'],
['ask my parents for help','向我的父母求助','ask someone for help：向某人求助。']
];
// Each item is an unchanged textbook sentence, followed by a teaching translation.
const TEXTS = [
{id:'duoduo',title:'Duoduo’s best friends',cn:'多多最好的朋友们',page:'28',focus:'先看人物，再找误会的原因。朋友有新朋友，原来的友谊会消失吗？',lines:[
['For Duoduo, Tutu is his best and only friend.','对多多来说，兔兔是他最好也是唯一的朋友。'],
['He wants to play with Tutu, but Tutu is playing with two other boys.','他想和兔兔一起玩，但兔兔正在和另外两个男孩玩。'],
['This makes Duoduo unhappy.','这让多多不开心。'],
['Tutu asks Duoduo to join them but Duoduo just walks away.','兔兔请多多加入他们，但多多径直走开了。'],
['After a week, Duoduo feels sad and he misses Tutu.','一周后，多多感到难过，他想念兔兔。'],
['“But Tutu may not miss me because he has new friends,” Duoduo thinks.','“但兔兔可能不会想念我，因为他有新朋友了。”多多想。'],
['Just then, Tutu sits down next to him.','就在这时，兔兔在他旁边坐下。'],
['“Hi Duoduo. How are you?” Tutu asks.','“嗨，多多。你好吗？”兔兔问。'],
['“I’m unhappy because I’m not your friend now,” answers Duoduo.','“我不开心，因为我现在不是你的朋友了。”多多回答。'],
['“Why do you say that?” says Tutu.','“你为什么这么说？”兔兔说。'],
['“Yes, I have new friends, but you’re still my friend.','“是的，我有新朋友，但你仍然是我的朋友。'],
['Old friends and new friends are both very nice.','老朋友和新朋友都很好。'],
['Join us and they can be your friends, too.”','加入我们吧，他们也可以成为你的朋友。”'],
['Now Duoduo has three best friends!','现在多多有三个最好的朋友了！']
]},
{id:'bird',title:'Friends with differences',cn:'有差异的朋友',page:'30–31',focus:'找出小鸟和小狗的不同，再找出“成为朋友的关键”。',lines:[
['You can’t be friends with Dog because you’re so different.','你不能和小狗做朋友，因为你们太不一样了。','Mum Bird'],
['You can’t be friends with Bird because you’re so different.','你不能和小鸟做朋友，因为你们太不一样了。','Dad Dog'],
['Let’s show them we aren’t different.','让我们向他们证明我们并不不同。','Bird'],
['Then we can be friends.','这样我们就能做朋友了。','Bird'],
['Good idea!','好主意！','Dog'],
['I am small and you are big.','我小，你大。','Bird'],
['I eat seeds and you eat meat.','我吃种子，你吃肉。','Bird'],
['I fly and you run.','我飞，你跑。','Bird'],
['Er, what do we share?','呃，我们有什么共同之处呢？','Bird'],
['Hey, why are you looking worried?','嘿，你们为什么看起来很担心？','Rabbit'],
['We want to be friends but we can’t.','我们想做朋友，但我们不能。','Dog'],
['We are so different.','我们太不一样了。','Dog'],
['But we are friends because we are happy together.','但我们是朋友，因为我们在一起很快乐。','Rabbit'],
['Friends play together and friends share with each other.','朋友一起玩，也互相分享。','Rabbit'],
['That’s the key.','那就是关键。','Rabbit'],
['Let’s show this to our parents.','让我们把这一点展示给我们的父母。','Bird & Dog'],
['Then we can be friends — the best friends!','这样我们就能做朋友了——最好的朋友！','Bird & Dog']
]},
{id:'chant',title:'We’re friends again!',cn:'我们又是朋友了！',page:'32',focus:'有分歧时，停一停、想一想，再好好沟通。留意 new / you / phew 的声音。',lines:[
['We’ve got a problem today.','我们今天遇到了一个问题。'],
['And it’s getting in the way.','这个问题正妨碍着我们。'],
['You want to stay at home and play.','你想待在家里玩。'],
['I want to go out and try something new.','我想出去尝试新事物。'],
['Let’s stop and think together.','让我们停下来一起想一想。'],
['Let’s talk to each other.','让我们互相谈一谈。'],
['We can find a game for me and you.','我们能找到一个适合你和我的游戏。'],
['A few nice words make us friends again, phew!','几句友善的话又让我们成为朋友了，呼！']
]},
{id:'talk',title:'Talk openly',cn:'坦诚地说出来',page:'33',focus:'sometimes 表示“有时”；but 后面表达不同的情况。',lines:[
['Sometimes my friends and I have problems, but we often talk openly.','有时我和朋友们会遇到问题，但我们经常坦诚地交谈。'],
['Sometimes I ask my parents for help.','有时我会向父母求助。']
]},
{id:'poster',title:'They are my best friends',cn:'他们是我最好的朋友',page:'35',focus:'找出三部分：朋友是谁 → 一起做什么 → 怎样相处。',lines:[
['Feifei, Taotao, Wenwen and Lili are my best friends.','菲菲、涛涛、文文和莉莉是我最好的朋友。'],
['We often read books, watch films and play games together.','我们经常一起读书、看电影和玩游戏。'],
['We help each other.','我们互相帮助。'],
['We share things.','我们分享东西。'],
['We talk openly with each other.','我们彼此坦诚地交谈。'],
['We’re happy together.','我们在一起很快乐。']
]},
{id:'day',title:'International Day of Friendship',cn:'国际友谊日',page:'37',focus:'带着 When / What / How 三个问题阅读；答案要回原文定位。',lines:[
['Every year, 30 July is the United Nations International Day of Friendship.','每年的7月30日是联合国国际友谊日。'],
['People around the world celebrate the day.','世界各地的人们庆祝这一天。'],
['It is about friendship between people, countries and cultures.','它关注人与人、国家与国家以及文化之间的友谊。'],
['On this day, friends have a happy time together.','在这一天，朋友们一起度过快乐的时光。'],
['There are many ways to celebrate the day.','庆祝这一天的方式有很多。'],
['Friends eat out or have a meal at home.','朋友们外出吃饭，或在家里聚餐。'],
['They give each other gifts, cards and best wishes.','他们互赠礼物、卡片和美好的祝愿。']
]}
];
const Q=(id,prompt,options,answer,why,source='拓展练习')=>({id,prompt,options,answer,why,source});
const GRAMMAR=[
Q('g1','Tutu asks Duoduo to join them ___ Duoduo just walks away.',['and','but','because'],1,'兔兔邀请他，他却走开了。前后发生转折，用 but。','课本 p29 原句填空'),
Q('g2','After a week, Duoduo feels sad ___ he misses Tutu.',['and','but','because'],0,'难过和想念是并列的两种情况，用 and。','课本 p29 原句填空'),
Q('g3','I’m unhappy ___ I’m not your friend now.',['and','but','because'],2,'后半句解释“不开心”的原因，用 because。','课本 p29 原句填空'),
Q('g4','We play games together ___ we always have fun.',['and','but','because'],0,'教材在此连接两项并列情况：一起玩游戏，并且总是玩得开心。','课本 p29 原题'),
Q('g5','Xiaojun and I have different hobbies ___ we enjoy talking to each other.',['and','but','because'],1,'虽然爱好不同，但仍喜欢交谈，有转折。','课本 p29 原题'),
Q('g6','Momo often makes me laugh ___ he is funny.',['and','but','because'],2,'有趣是让“我”发笑的原因。','课本 p29 原题'),
Q('g7','He is very musical ___ we often sing together.',['and','but','because'],0,'并列介绍朋友的特点和共同活动。','课本 p29 原题'),
Q('g8','I like apples, ___ my friend doesn’t like them.',['and','but','because'],1,'我喜欢，朋友不喜欢，前后不同，用 but。'),
Q('g9','Why do you like your friend? — ___ she always helps me.',['And','But','Because'],2,'Why 问原因，用 Because 引出原因。'),
Q('g10','We read books ___ play games together.',['and','but','because'],0,'连接两个并列活动：读书和玩游戏。'),
Q('g11','选出正确的句子。',['We listen each other.','We listen to each other.','We listen to each others.'],1,'listen to each other：互相倾听。to 不能省略，each other 不加 s。'),
Q('g12','“他们有差异。” 应该怎样说？',['They have different.','They are difference.','They have differences.'],2,'have 后用名词 differences；也可以说 They are different.。')
];
const READING=[
Q('r1','How many best friends does Duoduo have now?',['One.','Two.','Three.'],2,'文末：Now Duoduo has three best friends!','课本 p28 原题'),
Q('r2','Tutu asks Duoduo to play together and Duoduo joins them.',['✔ True','✘ False'],1,'Duoduo just walks away. 他走开了，没有加入。','课本 p28 原题'),
Q('r3','Duoduo misses Tutu and he thinks Tutu may not miss him.',['✔ True','✘ False'],0,'第二段直接写明他想念兔兔，但认为兔兔可能不想他。','课本 p28 原题'),
Q('r4','Tutu has new friends and he is not Duoduo’s friend now.',['✔ True','✘ False'],1,'you’re still my friend 表明他们仍然是朋友。','课本 p28 原题'),
Q('r5','Duoduo makes friends with the other two boys.',['✔ True','✘ False'],0,'最后多多有三个最好的朋友：兔兔和另外两个男孩。','课本 p28 原题'),
Q('r6','Can the bird and the dog be friends?',['Yes, they can.','No, they can’t.'],0,'能。在一起快乐、一起玩、互相分享，比完全一样更重要。','课本 p30 原题'),
Q('r7','We are friends because we are ___ together.',['worried','happy','different'],1,'Rabbit 说：we are happy together。','课本 p31 原题'),
Q('r8','Friends ___ together.',['play','worry','fly'],0,'原文：Friends play together。','课本 p31 原题'),
Q('r9','Friends ___ with each other.',['run','eat','share'],2,'原文：friends share with each other。','课本 p31 原题'),
Q('r10','When is the United Nations International Day of Friendship?',['30 June.','30 July.','31 July.'],1,'第一句给出日期：30 July。','课本 p37 原题（改为选择）'),
Q('r11','What is the day about?',['Only school friends.','Only family meals.','Friendship between people, countries and cultures.'],2,'原文第三句列出 people、countries 和 cultures。','课本 p37 原题（改为选择）'),
Q('r12','Which activity is mentioned in the text?',['Giving gifts and cards.','Having a running race.','Buying a new pet.'],0,'最后一句提到 gifts、cards 和 best wishes。','拓展练习 · 根据 p37')
];
const LISTENING=[
{text:'My best friend is Anna. She is funny and musical. We often sing together.',q:Q('l1','What do they often do together?',['Read books.','Sing.','Play football.'],1,'听到 We often sing together，定位共同活动。','自编听力 · 语音合成')},
{text:'Tom and I have different hobbies, but we enjoy talking to each other.',q:Q('l2','Do they have the same hobbies?',['Yes, they do.','No, they don’t.','We don’t know.'],1,'different hobbies 是“不同的爱好”，所以回答 No。','自编听力 · 语音合成')},
{text:'I feel unhappy because my friend walks away. I want to talk to her.',q:Q('l3','Why does the speaker feel unhappy?',['Her friend walks away.','She has no homework.','Her friend sings.'],0,'because 后面是原因：my friend walks away。','自编听力 · 语音合成')},
{text:'We have different plans. Let’s stop and listen to each other. Then we can find a good plan together.',q:Q('l4','What should they do first?',['Walk away.','Stop and listen to each other.','Ask for a gift.'],1,'先停下来，互相倾听，再一起找计划。','自编听力 · 语音合成')},
{text:'On the thirtieth of July, I have a meal with my friend. I give her a card and my best wishes.',q:Q('l5','What does the speaker give her friend?',['Seeds.','A rabbit.','A card and best wishes.'],2,'give her a card and my best wishes：卡片和美好祝愿。','自编听力 · 语音合成')}
];
const GLOSSARY={...Object.fromEntries(WORDS.map(w=>[w[0],w[2]])),friend:'朋友',friends:'朋友们',different:'不同的',together:'一起',each:'每个；each other：互相',other:'其他的',share:'分享',shares:'分享',listen:'倾听',care:'照顾；关心',join:'加入',miss:'想念',misses:'想念',still:'仍然',because:'因为',but:'但是',and:'和；并且',worried:'担心的',seeds:'种子',meat:'肉',fly:'飞',run:'跑',parents:'父母',hobbies:'爱好',laugh:'笑',wishes:'祝愿',cultures:'文化',celebrate:'庆祝',july:'七月',problem:'问题',problems:'问题',may:'可能',only:'唯一的；仅仅',sad:'难过的',best:'最好的',enjoy:'喜欢；享受',nice:'友善的；好的',musical:'擅长音乐的；对音乐感兴趣的',new:'新的',old:'旧的；老的',key:'关键',way:'方式；道路',phew:'呼（表示松口气）',fun:'乐趣',street:'街道',same:'相同的',happy:'开心的',walks:'走',away:'离开',then:'然后；那时',show:'展示',small:'小的',big:'大的',eat:'吃',home:'家',out:'在外面',gifts:'礼物',cards:'卡片',openly:'坦诚地',find:'找到',game:'游戏',words:'话语；单词'};
