/* 教材依据：Start Up 五上 Unit 2 A green life，p14–25、p94。练习为原创变式。 */
(function(){
const mc=(id,topic,stem,options,why,page,passage)=>({id,type:'choice',topic,stem,options,answer:options[0],why,page,passage});
const fill=(id,topic,stem,answer,why,page,passage)=>({id,type:'fill',topic,stem,answers:Array.isArray(answer)?answer:[answer],why,page,passage});
const order=(id,topic,stem,words,answer,why,page)=>({id,type:'order',topic,stem,words,answers:[answer],why,page});
const L=(id,title,subtitle,notes,questions)=>({id,title,subtitle,notes,questions});
const bird=`The dress is too small for you.\nMum, don’t throw it away.\nI can make use of it.\n\nGrandpa, give those cans to me, please.\n\nDon’t throw away that box, Dad!\nI want to use it.\n\nGrandma, give that old shirt to me, please.\n\nThese are houses for birds. They’re also places to keep them warm.\nI love it! Now they have a better home!`;
const milk=`Each of us has a box of milk every day at school. We use over 150,000 milk boxes every year! But many of us just throw them away.\n\nMilk boxes have three parts: paper, plastic and metal. Each part can turn into something new, like newspapers, bottles and cans.\n\nIt is easy to recycle a milk box in just three steps:\n1. Open the milk box and wash it with water.\n2. Make it flat.\n3. Put it into a recycling box.\n\nNow the milk box moves to a new beginning!\nLet’s start now for a green world!`;
const earth=`Earth Day comes on 22 April every year. On this day, people around the world work together to make the earth greener.\nThey clean up parks, plant trees and choose “green” ways to travel.\n\nKids can help, too! We can pick up rubbish and make posters to call for people to look after the earth.\n\nEvery small action makes a big difference. Let’s do our part on Earth Day — and every day — to keep our world beautiful!`;
const levels=[
L(1,'环保物品与材料','读懂物品，不把材料和成品混淆',[
 'paper 纸，plastic 塑料制的，metal 金属；milk boxes有这三种材料。',
 'cans易拉罐，bottles瓶子，boxes盒子，bottle caps瓶盖；单数变复数要看清。',
 'old T-shirts旧T恤，old toys旧玩具，food waste食物废弃物；paper、plastic、metal、food waste在本课语境通常不数一个两个。'
],[
mc('1-1','物品词汇','哪一项是“瓶盖”？',['bottle caps','milk boxes','old toys'],'cap是盖子，bottle caps是瓶盖。','14,17'),
mc('1-2','物品词汇','“旧T恤”的英文是：',['old T-shirts','new shirts','old toys'],'old表示旧的；T-shirts是T恤的复数。','14'),
mc('1-3','材料词汇','报纸主要对应哪种材料？',['paper','metal','plastic'],'paper是纸；newspaper是报纸，不是金属。','18'),
mc('1-4','材料词汇','“金属”的英文是：',['metal','seat','land'],'metal是金属；seat是座位，land是陆地。','18,94'),
mc('1-5','可数不可数','We can use ___ again.（纸）',['paper','a paper','papers'],'此处paper指材料“纸”，不加a或复数s。','14'),
mc('1-6','物品词汇','哪一项表示“食物废弃物”？',['food waste','food groups','food shops'],'food waste与food group食物类别不同。','14'),
fill('1-7','名词复数','one box → two ___',['boxes'],'box以x结尾，复数加es。','14,18'),
fill('1-8','名词复数','one bottle → three ___','bottles','bottle通常直接加s。','14,18')]),
L(2,'单词辨义 A','废弃物、回收、有用、每个',[
 'waste 废料/废弃物；throw 扔；recycle 回收利用；useful 有用的。',
 'plastic 本单元单词表列“塑料制的”，课文中也可作名词“塑料”。',
 'each 每个，各；over在over 150,000中表示超过；Yours是书信结尾用语，不是开头称呼。'
],[
mc('2-1','核心词汇','recycle 的意思是：',['回收利用','随手扔掉','单纯购买'],'recycle强调回收再利用；use again表示再次使用。','94'),
mc('2-2','核心词汇','The houses are useful. 这里useful是：',['有用的','漂亮但没用的','旧的'],'useful由use引出，表示有用的。','16,94'),
mc('2-3','核心词汇','over 150,000 是：',['超过150,000','正好150,000','少于150,000'],'这里over表示超过，不是位置上的“上方”。','18'),
mc('2-4','核心词汇','each part 表示：',['每个部分','几个部分合起来','所有部分都没有'],'each强调每一个。','18,94'),
mc('2-5','核心词汇','throw 的意思是：',['扔','拿掉','保持'],'throw是扔；take off是拿掉。','94'),
mc('2-6','核心词汇','a plastic bag 是：',['塑料袋','纸盒','金属罐'],'plastic在此修饰bag。','14'),
fill('2-7','单词拼写','拼写“废料；废弃物”：','waste','waste：w-a-s-t-e，注意不是water。','94'),
mc('2-8','书信格式','Yours 一般放在信的：',['结尾，姓名前','开头，称呼前','日期里的月份前'],'课本p17信件用Yours后接写信者姓名。','17,94')]),
L(3,'单词辨义 B','变化、形状、开始、场所',[
 'into表示进入或状态变化；turn into 变成；off表示从某物上移开；take off 拿掉。',
 'newspaper 报纸；flat 平的；beginning 开始；seat 座位；land 陆地；shop 商店。'
],[
mc('3-1','核心词汇','Make it flat. 意思是：',['把它弄平','让它飞起来','把它弄湿'],'flat是平的。','18'),
mc('3-2','核心词汇','a new beginning 是：',['一个新的开始','一张新报纸','一个新座位'],'beginning是开始，不是ending结尾。','18'),
mc('3-3','核心词汇','哪一个词表示“报纸”？',['newspaper','new paper','news shop'],'newspaper是一个单词；new paper是“新纸”。','18,94'),
mc('3-4','核心词汇','turn into something new 是：',['变成新的东西','转身离开新东西','把所有东西扔掉'],'turn into表示变成。','18'),
mc('3-5','核心词汇','land and sea 是：',['陆地和海洋','商店和学校','座位和桌子'],'land是陆地，sea是海洋。','20'),
fill('3-6','单词拼写','拼写“座位”：','seat','seat：s-e-a-t。','20,94'),
fill('3-7','单词拼写','拼写“商店”：','shop','shop：s-h-o-p。','21,94'),
mc('3-8','词组辨义','take off the caps 意思是：',['拿掉瓶盖','盖好瓶盖','把瓶盖回收成报纸'],'本课take off是拿掉，不是交通工具“起飞”。','19')]),
L(4,'再利用词组','use again、make use of、throw away',[
 'use…again 再次使用；make use of…利用；use…to make…用……制作……。',
 'throw away 扔掉；cut down food waste 减少食物浪费；cut down plastic use 减少塑料使用。',
 'Wait and see! 等着瞧！But what for? 可是用来做什么？'
],[
mc('4-1','词组','We can use paper again. 表示：',['再次使用纸张','把纸全部扔掉','只能使用新纸'],'again是再次，强调重复利用。','14'),
mc('4-2','词组','I can make use of it. 表示：',['我能利用它','我能制造它','我不能使用它'],'make use of是固定词组“利用”。','16'),
fill('4-3','词组填空','We can cut ___ food waste.','down','cut down表示减少。','14'),
fill('4-4','词组填空','I can make use ___ it.','of','make use of不可遗漏of。','16'),
mc('4-5','交际用语','Wait and see! 最恰当的中文是：',['等着瞧！','等一下再看时间！','别再看了！'],'用于暂时不揭晓计划，等待结果。','16'),
mc('4-6','词组辨析','“减少塑料使用”应选：',['cut down plastic use','cut down plastic trees','throw every bottle away'],'cut down plastic use不是砍塑料树。','21'),
order('4-7','句子结构','按词块排列：我们可以用罐子做新玩具。',['We','can','use cans','to make','new toys.'],'We can use cans to make new toys.','use cans to make…用罐子制作……。','14'),
mc('4-8','词组辨析','“再次使用”和“回收利用”哪种理解正确？',['use again强调再使用；recycle强调回收再利用','两者都表示扔掉','recycle表示只能用一次'],'都是环保方法，但表达的重点不同。','14,18')]),
L(5,'环保行动词组','读懂动词和后面的搭配',[
 'clean up parks清理公园；pick up rubbish捡垃圾；plant trees种树；make posters制作海报。',
 'look after / take care of the earth照顾地球；work together一起努力；call for people to…号召人们……。',
 'bring your own…带自己的……；turn off关掉；make a difference产生影响；do our part尽我们的一份力。'
],[
mc('5-1','环保词组','“捡垃圾”应选：',['pick up rubbish','put down trees','look at rubbish'],'pick up是捡起；rubbish是垃圾。','25'),
fill('5-2','环保词组','Turn ___ the light when leaving a room.','off','turn off关掉，不能用turn into。','25'),
mc('5-3','环保词组','look after the earth 的意思是：',['照顾地球','看地球的后面','离开地球'],'look after是固定词组“照顾”。','25'),
mc('5-4','环保词组','bring our own lunch boxes 中own表示：',['自己的','旧的','别人的'],'own强调自己所有的，不是old。','21'),
fill('5-5','环保词组','They clean ___ parks.','up','clean up清理。','25'),
mc('5-6','环保词组','Every small action makes a big difference. 表示：',['每个小行动都能产生很大影响','小行动一定没用','所有行动都必须很大'],'difference这里不是找图中的不同。','25'),
fill('5-7','环保词组','Let’s do our ___ on Earth Day.','part','do our part尽我们的一份力。','25'),
mc('5-8','环保行动','哪句真正是环保做法？',['Use food waste for plants in the garden.','Keep the TV on when not watching.','Keep the water running all day.'],'课本用食物废弃物帮助园中植物生长；另两句会浪费资源。','22,25')]),
L(6,'肯定祈使句','给建议、请求时直接用动词',[
 '祈使句用于请求、指令、建议；通常省略you，直接以动词原形开头。',
 'Take it. / Give them to us. / Please bring your own water bottles.',
 'Please放句首或句末都可以；不能把普通指令写成Takes it。'
],[
mc('6-1','祈使句','___ it.（拿走它。）',['Take','Takes','Taking'],'肯定祈使句用动词原形Take。','17'),
mc('6-2','祈使句','哪句是请求别人给你盒子？',['Give me the box, please.','Gives me the box, please.','Giving me the box, please.'],'Give是原形；please让请求更礼貌。','17'),
fill('6-3','祈使句','Please ___ your own water bottles.（带）','bring','Please后直接接动词原形bring。','23'),
mc('6-4','祈使句','Open the milk box and ___ it with water.',['wash','washes','washing'],'Open和wash是and连接的两个指令。','18'),
mc('6-5','祈使句','“请把它们给我们”应选：',['Give them to us, please.','Give they to we, please.','Gives them to us, please.'],'Give原形，them和us作宾语。','17'),
order('6-6','祈使句','按词块排列：把它放进回收箱。',['Put','it','into','a recycling box.'],'Put it into a recycling box.','Put开头；it是宾语，into表示进入。','18'),
mc('6-7','句型辨认','哪句是祈使句，而不是陈述句？',['Make it flat.','It is flat.','The box is flat.'],'Make it flat是在发出指令，另两句描述状态。','18'),
mc('6-8','礼貌表达','哪种please的位置可以接受？',['Please take it. 和 Take it, please. 都可以','只能放句首','只能放句末'],'两种位置都可表达礼貌请求。','16,17')]),
L(7,'否定祈使句与 Let’s','Don’t后原形，Let’s后原形',[
 'Don’t + 动词原形：Don’t throw it away. 不要把它扔掉。',
 'Let’s + 动词原形：Let’s start now. 让我们现在开始吧。',
 'Let’s be kind to the birds. be表示“是/处于”，不能因为后面是形容词就漏掉。'
],[
mc('7-1','否定祈使句','Don’t ___ it away.',['throw','throws','throwing'],'Don’t后接动词原形。','16,17'),
fill('7-2','否定祈使句','___ use too much plastic.','Don’t','表示不要做，用Don’t；可以输入Don\'t。','23'),
mc('7-3','Let’s','Let’s ___ now for a green world!',['start','starts','to start'],'Let’s后接原形，不加to或s。','18'),
mc('7-4','Let’s','Let’s ___ kind to the birds.',['be','are','is'],'Let’s be +形容词；不能选are或is。','17'),
mc('7-5','否定祈使句','“不要使用太多塑料”的正确句子是：',['Don’t use too much plastic.','Not use too much plastic.','Doesn’t use too much plastic.'],'祈使句否定用Don’t。','23'),
order('7-6','否定祈使句','按词块排列：不要把它拿走。',['Please','don’t','take','it away.'],'Please don’t take it away.','Please don’t +原形；这是基于本课句型的变式。','17'),
mc('7-7','祈使句改写','Take it. 的否定形式是：',['Don’t take it.','Don’t takes it.','You aren’t take it.'],'加Don’t，take仍为原形。','17'),
fill('7-8','Let’s','Let’s ___ the earth green.（保持）','keep','Let’s后用keep原形。此句为本单元句型变式。','18,20')]),
L(8,'can 与 should','能力/可以，建议/应该',[
 'can表示能、会、可以；should表示应该。二者后面都直接接动词原形。',
 '不加to，不因he/she而加s；He can make…，We should bring…',
 'can’t / cannot不能；shouldn’t / should not不应该。疑问句把can/should放到主语前。'
],[
mc('8-1','情态动词','We can ___ cans to make toys.',['use','to use','uses'],'can后用use原形。','14'),
mc('8-2','情态动词','We should ___ our own lunch boxes.',['bring','to bring','bringing'],'should后不加to。','21'),
mc('8-3','情态动词','He can ___ a toy car.',['make','makes','to make'],'有can，主语是he也不加s。','17'),
mc('8-4','情态动词含义','We should bring our own water bottles. 侧重：',['应该带，是建议','已经带过，是过去动作','不会带，是能力不足'],'should表示应该。','21'),
mc('8-5','情态动词否定','“我们不应该浪费水”应选：',['We shouldn’t waste water.','We shouldn’t to waste water.','We don’t should waste water.'],'shouldn’t后直接接waste原形。','21,25'),
mc('8-6','情态动词疑问','把You can make a toy car.改为一般疑问句：',['Can you make a toy car?','Do you can make a toy car?','Can you to make a toy car?'],'已有can，把can提前，不再加do。','17'),
mc('8-7','情态动词辨析','I ___ make a toy car.（我会做玩具车。）',['can','shouldn’t','don’t'],'表示能力，用can。','17'),
fill('8-8','情态动词填空','She should ___ up rubbish.（捡）','pick','should后用pick原形，不用picks。','21,25')]),
L(9,'want to 与 use…to…','分清什么时候要 to',[
 'want to + 动词原形：I want to use it. 想做某事；want +名词：I want a box. 想要某物。',
 'use cans to make new toys：to make说明用途。',
 'use old paper for art homework：for后接名词词组。make use of与make a toy car不同。',
 'places to keep them warm中的to keep说明用途：用来保暖的地方。',
 'How can we help make our earth cleaner? 中help make连着用；Let me tell you中的let后接me，不用I，tell用原形。'
],[
mc('9-1','want to','I want ___ use it.',['to','for','of'],'want to do是想做某事，不同于can do。','16'),
mc('9-2','want to','I want to ___ a bird house.',['make','making','makes'],'want to后用原形make。','16'),
mc('9-3','用途结构','We can use cans ___ make new toys.',['to','for','of'],'use…to make…表达用途。can后原形是use，并不排斥后面另一个结构to make。','14'),
mc('9-4','用途结构','Use old paper ___ art homework.',['for','to','of'],'art homework是名词词组，前面用for。','22'),
mc('9-5','易混to','哪句正确？',['I can use it. / I want to use it.','I can to use it. / I want use it.','I can using it. / I want to uses it.'],'can不加to，want to不能漏to。','16'),
mc('9-6','want辨析','“我想要一个盒子”应选：',['I want a box.','I want to a box.','I want of a box.'],'want后若是名词，直接接名词。此题复习旧结构。','16'),
fill('9-7','用途结构','Use food waste ___ plants in the garden.','for','本课原句use food waste for plants…。','22'),
mc('9-8','词组对比','make use of it 与 make a toy car：',['前者是利用它，后者是制作玩具车','两者都表示扔掉它','前者是做汽车，后者是利用它'],'make use of是整块词组；make+物品是制作物品。','16,17')]),
L(10,'代词与动词词组','it/them放哪儿，me/us怎么用',[
 'it代替单个物或不可数材料；them代替多个物/人。give后用me/us/them，不用I/we/they。',
 'give me the box = give the box to me。',
 'throw away that box / throw that box away都可以；代词必须夹中间：throw it away，不说throw away it。take them away同理。'
],[
mc('10-1','代词','Grandpa, give those cans to ___, please.',['me','I','my'],'to后用宾格me。','16'),
mc('10-2','代词','Give ___ to us.（这些盒子）',['them','it','they'],'多个盒子用them，give后不用they。','17'),
mc('10-3','代词位置','哪句正确？',['Don’t throw it away.','Don’t throw away it.','Don’t throw away they.'],'it是代词，必须在throw和away之间。','16,17'),
mc('10-4','代词位置','哪种表达正确？',['throw away that box 和 throw that box away 都可以','throw away it 和 throw it away 都可以','throw away them才正确'],'名词位置较自由；代词必须夹中间。','16'),
mc('10-5','代词指代','The box is useful. Please keep ___.',['it','them','they'],'the box单数，用it。','16'),
mc('10-6','give结构','Give me the box. 意思相同的是：',['Give the box to me.','Give I the box.','Give the box to I.'],'give物品to人，人称用宾格。','16,17'),
fill('10-7','代词','We made houses for birds. Please don’t take ___ away.','them','them在这里指houses，复数。','17'),
order('10-8','代词位置','按词块排列：不要把它们扔掉。',['Don’t','throw','them','away.'],'Don’t throw them away.','them必须夹在throw和away之间。','18,20')]),
L(11,'this/that 与单复数','近远、一个多个、is/are',[
 'this这个、that那个；these这些、those那些。this/that配单数；these/those配复数。',
 'These are houses for birds. / They’re also places…；They’re=They are。',
 'boxes、houses、bottles、cans、caps、newspapers；children是child的复数，不加s。',
 'There are many great ways. 表示有很多好方法：there be表示“有”，ways是复数，配are；a box单数配is。We’re=We are，They’re=They are。'
],[
mc('11-1','指示词','give ___ cans to me（那些罐子）',['those','that','this'],'cans复数，且中文“那些”用those。','16'),
mc('11-2','指示词','give ___ old shirt to me（那件旧衬衫）',['that','those','these'],'shirt单数用that。','16'),
mc('11-3','be动词','These ___ houses for birds.',['are','is','am'],'These复数，配are。','16'),
mc('11-4','缩写','They’re 的完整形式是：',['They are','They is','Their'],'They’re=They are，与Their“他们的”不同。','16'),
mc('11-5','名词复数','one child → two ___',['children','childs','childes'],'child的不规则复数是children，复习阅读问题中的词。','16'),
mc('11-6','单复数','This is a bottle. 变为复数：',['These are bottles.','These is bottle.','This are bottles.'],'this→these，is→are，a bottle→bottles。','14,18'),
fill('11-7','指示词','___ are houses for birds.（这些）','These','These这些，配are。','16'),
mc('11-8','单复数辨义','a box of milk与milk boxes的区别是：',['前者一盒牛奶，后者牛奶盒','前者牛奶盒，后者牛奶本身','完全没有区别'],'a box of milk是容器计量；milk boxes是盒子本身。','18')]),
L(12,'每个、许多与日常动作','each of us has，不是have',[
 'Each of us has a box of milk…每个人都有一盒；主语核心each单数，所以has。',
 'many of us许多我们中的人，配throw/have；每个人不等于许多人。',
 'every day每天、every year每年；Earth Day comes…、Every small action makes…一般现在时，单数主语动作加s。'
],[
mc('12-1','主谓一致','Each of us ___ a box of milk every day.',['has','have','having'],'不要只看到us；主语核心each是单数。','18'),
mc('12-2','主谓一致','Many of us just ___ them away.',['throw','throws','throwing'],'many of us表示许多人，用throw。','18'),
mc('12-3','数量表达','Each part ___ turn into something new.',['can','cans','can to'],'can不加s，后用turn原形。','18'),
mc('12-4','时间表达','every year 表示：',['每年','每天','这一年仅一次'],'year是年，day是天。','18'),
mc('12-5','一般现在时','Earth Day ___ on 22 April every year.',['comes','come','coming'],'Earth Day是单数，comes表示每年发生的事实。','25'),
mc('12-6','there be复习','There ___ many great ways.',['are','is','has'],'there be表示有；ways复数用are，不用has。','19'),
fill('12-7','时间表达','Each of us has a box of milk every ___.（每天）','day','every day分开写，表示每天。','18'),
mc('12-8','主谓一致','Every small action ___ a big difference.',['makes','make','making'],'Every small action指每个小行动，单数主语用makes。','25')]),
L(13,'状态、原因与变化','keep +形容词；because/so',[
 'keep the birds safe and warm：保持鸟儿安全、温暖。make it flat：使它变平。',
 'because后是原因；so后是结果。more更多，better更好，cleaner更干净，greener更环保。',
 'lots of birds是许多鸟；help a lot是帮助很大。lots of后接名词，a lot这里表示程度。',
 'Winter is coming. 正在/即将到来的表达；we made…中的made是make过去式。本课只要求读懂，不扩成整套时态课。'
],[
mc('13-1','keep结构','They keep the birds ___ and warm.',['safe','safely','safety'],'keep+宾语+形容词，safe安全的。','17'),
mc('13-2','make结构','Make it ___.（弄平）',['flat','flatly','flats'],'flat是形容词，说明it的状态。','18'),
mc('13-3','原因结果','We’re making more houses ___ lots of birds need a home.',['because','so','but'],'后面解释做更多房子的原因。','17'),
mc('13-4','原因结果','Winter is coming, ___ we made these houses for birds.',['so','because','or'],'冬天来是原因，造房子是结果，用so。','17'),
mc('13-5','比较表达','a better home 是：',['一个更好的家','一个最小的家','一个更差的家'],'better表示更好，对比原来的家。','16'),
mc('13-6','比较表达','make the earth greener 表示：',['让地球更环保、更绿色','让地球变得更热','让地球更脏'],'greener是green的比较表达。','25'),
mc('13-7','课文时态辨认','we made these houses 中made是哪个词的过去式？',['make','milk','move'],'made是make的过去式，读懂课文即可。','17'),
mc('13-8','课文时态辨认','Winter is coming. 在信里表达：',['冬天快到了','冬天永远不会来','冬天刚刚结束'],'结合信的背景，is coming表示正在到来/快到。','17')]),
L(14,'Wait and see课文','材料、人物、用途和指代',[
 'Amy要留下dress；Daming要cans；Sam要box；Lingling要old shirt。',
 '这些东西用来制作houses for birds；目的是给鸟儿更好的家，keep them warm。',
 '信的开头Dear all，结尾Yours和姓名；be kind to birds表示友善对待鸟。'
],[
mc('14-1','课文理解','What do the children make?',['Houses for birds.','New dresses for Mum.','Lunch boxes for school.'],'文末明确说These are houses for birds。','16',bird),
mc('14-2','课文理解','Amy asks Mum to keep ___.',['the dress','the cans','the old shirt'],'Amy说dress不要扔，她可以利用。','16',bird),
mc('14-3','课文理解','Who asks for the cans?',['Daming','Sam','Lingling'],'Daming对Grandpa说give those cans to me。','16',bird),
mc('14-4','课文理解','Lingling asks Grandma for ___.',['an old shirt','a box','a newspaper'],'Lingling要that old shirt。','16',bird),
mc('14-5','课文理解','Why are the houses useful?',['They help keep birds warm.','They make the birds waste food.','They are only for children to sit on.'],'房子用于keep them warm，保护鸟儿。','16',bird),
mc('14-6','代词指代','They’re also places to keep them warm. 其中them指：',['birds','children','cans'],'warm的受益者是鸟，回看前句houses for birds。','16',bird),
mc('14-7','书信理解','信里说多做鸟屋的原因是：',['lots of birds need a home','all the children need toys','winter has ended'],'课文because lots of birds need a home。','17'),
mc('14-8','书信结构','哪项符合这封信的结构？',['Dear all → 内容 → Yours → 姓名','Yours → 姓名 → Dear all','姓名 → Yours → 内容'],'书信称呼在前，落款在后。','17')]),
L(15,'Milk box magic课文','数量、材料、事实和顺序',[
 '每个学生每天一盒牛奶；每年使用over 150,000 milk boxes，不是每天150,000。',
 'three parts: paper, plastic and metal；can turn into something new是可能变成新东西。',
 '步骤：Open and wash → Make it flat → Put it into a recycling box。'
],[
mc('15-1','阅读数量','How many milk boxes do they use every year?',['Over 150,000.','Exactly 150,000.','Three.'],'原文over 150,000，必须保留“超过”。','18',milk),
mc('15-2','阅读材料','Which materials are in milk boxes?',['Paper, plastic and metal.','Paper, wood and glass.','Metal, cloth and food.'],'原文明确列出三种材料。','18',milk),
mc('15-3','阅读时间','Each student has a box of milk ___.',['every day','every year','every three days'],'别把每天喝牛奶与每年盒子总量混淆。','18',milk),
mc('15-4','阅读步骤','What comes after opening and washing the box?',['Make it flat.','Drink another box of milk.','Throw it away.'],'第二步Make it flat。','18',milk),
mc('15-5','阅读事实','Which sentence agrees with the passage?',['Each part can turn into something new.','All milk boxes have only two parts.','The students use exactly 150,000 boxes a year.'],'can表示可以；two和exactly均与原文不符。','18',milk),
mc('15-6','阅读步骤','How many recycling steps are listed?',['Three.','Two.','Four.'],'三步，其中第一步包括打开和清洗两个动作。','18',milk),
mc('15-7','阅读主旨','Milk box magic 主要讲：',['回收牛奶盒，让材料获得新用途','牛奶为什么甜','如何每天购买150,000盒牛奶'],'标题是“牛奶盒的魔法”，围绕回收。','18',milk),
mc('15-8','阅读词义','a new beginning 对牛奶盒来说意味着：',['材料得到再利用，不只是被扔掉','又开始装原来的牛奶','它永远不能被处理'],'结合turn into something new理解新的用途。','18',milk)]),
L(16,'步骤说明与瓶子回收','先后顺序、with/into、take off',[
 'wash it with water：with说明用水；put it into…：into说明放进。',
 '塑料瓶回收：拿掉瓶盖→清洗→放入回收箱。p19只有词语提示，这里的完整指令是参考作答，不标作原文。',
 'First / Next / Finally可帮助说明顺序，是复习写作工具；不要漏动作。',
 'It is easy to recycle a milk box. 表示回收一个牛奶盒很容易；easy后是to recycle，不能套成can to recycle。'
],[
mc('16-1','介词','Wash it ___ water.',['with','into','off'],'with water用水，into water是进入水里。','18'),
fill('16-2','介词','Put it ___ a recycling box.','into','into强调放入箱子。','18'),
mc('16-3','步骤排序','牛奶盒回收的正确顺序是：',['打开清洗→弄平→放入回收箱','弄平→扔掉→打开','放入箱子→弄平→清洗'],'依据p18三步，不凭常识调换。','18'),
mc('16-4','瓶子回收','看到提示(take off, caps)，合适的指令是：',['Take off the caps.','Turn into the caps.','Take the bottles to school.'],'根据p19提示写拿掉瓶盖，这是参考答案。','19'),
mc('16-5','介词词组辨析','turn off和take off在本单元里分别是：',['关掉；拿掉','变成；照顾','捡起；减少'],'turn off light关灯，take off caps拿盖。','19,25'),
order('16-6','步骤表达','按词块排列：用水洗它。',['Wash','it','with','water.'],'Wash it with water.','wash+宾语+with water。','18'),
mc('16-7','步骤表达','介绍最后一步时，哪个连接词最合适？',['Finally','Because','But'],'Finally表示最后；因为与转折不是步骤序号。','19'),
mc('16-8','难句理解','It is easy ___ recycle a milk box.',['to','for','of'],'It is easy to do表示做某事很容易；这里to不能省略。','18')]),
L(17,'ea/ee 发音','本课的长元音 /iː/',[
 '本课ea：seat、sea、easy、clean；ee：keep、green。课本chant中的me也有/iː/。',
 '本课这些ea/ee词发/iː/，不代表所有ea都发这个音。',
 '听读注意长/iː/与短/ɪ/不同；请点击朗读听示范。自动朗读依赖设备英语语音，不是课本录音。'
],[
mc('17-1','语音','seat中的ea在本课发：',['/iː/','/e/','/æ/'],'seat的ea发长/iː/。','20'),
mc('17-2','语音','keep中的ee在本课发：',['/iː/','/aɪ/','/əʊ/'],'keep的ee发长/iː/。','20'),
mc('17-3','语音归类','哪组与seat的元音音素相同？',['sea, clean','can, bag','box, shop'],'sea和clean都有/iː/，不是只看字母。','20,24'),
mc('17-4','语音归类','哪个单词包含ee字母组合？',['green','seat','sea'],'green含ee，seat/sea含ea。','20,24'),
mc('17-5','语音规则','“所有ea都读/iː/”这句话：',['不对，本课是这些示例词这样读','对，永远如此','对，所有两个元音字母都这样读'],'拼读规律有例外，不能无限扩大。','20'),
mc('17-6','语音归类','哪个词和keep有相同的长元音？',['me','can','box'],'课本chant中的me也发/iː/，拼写不同仍可同音素。','20'),
fill('17-7','拼读拼写','补全“绿色的”：gr___n（填写缺少的字母组合）','ee','green中的组合是ee。','20'),
fill('17-8','拼读拼写','补全“座位”：s___t（填写缺少的字母组合）','ea','seat中的组合是ea。','20')]),
L(18,'Earth Day阅读','日期、行动和主旨',[
 'Earth Day on 22 April every year；日期前用on，不用in。',
 'clean up parks / plant trees / green ways to travel / pick up rubbish / make posters。',
 '环保不只在Earth Day；every day也要行动。when brushing teeth中brushing是课文表达，先整块理解为“刷牙时”。'
],[
mc('18-1','阅读日期','When is Earth Day?',['On 22 April.','On 25 April.','On 22 May.'],'原文22 April；课本页码25不是日期。','25',earth),
mc('18-2','阅读事实','What do people do on Earth Day?',['Clean up parks and plant trees.','Keep all lights on.','Use more plastic every day.'],'课文行动是清理公园、种树等。','25',earth),
mc('18-3','阅读主旨','The passage asks us to protect the earth ___.',['on Earth Day and every day','only once a year','only when we grow up'],'最后一句and every day不能漏。','25',earth),
mc('18-4','阅读推断','What can kids do according to the passage?',['Pick up rubbish and make posters.','Do nothing until they are adults.','Leave water running all day.'],'原文Kids can help, too!。','25',earth),
fill('18-5','日期介词','Earth Day comes ___ 22 April.','on','具体日期前用on。','25'),
mc('18-6','环保判断','What should you do when brushing teeth?',['避免让水一直流着','让水从开始到结束一直流','打开电视但不看'],'p25给的keep the water running不是环保选项。','25'),
mc('18-7','环保判断','Which is a “green” way to travel?',['Take a bus or walk to school.','只要近也每次单独开车','把垃圾扔到车外'],'课本给出bus或walk的选择。','25'),
mc('18-8','阅读指代','On this day中的this day指：',['Earth Day','every school day','the day of a test'],'读回前句Earth Day comes…。','25',earth)]),
L(19,'问句与对话','what/why/how、what for、礼貌回应',[
 'What问什么；Why问原因，回答可用Because…；How问方法。But what for?问用途。',
 'What can you make with it? 用它能做什么？How do we recycle milk boxes? 怎么回收？',
 'Sure / No problem可回应请求；Wait and see用于先保留惊喜。'
],[
mc('19-1','疑问词','___ are the houses useful? —Because they keep birds warm.',['Why','When','Who'],'Because回答原因，所以用Why。','16'),
mc('19-2','疑问词','___ do we recycle milk boxes? —In three steps.',['How','Who','Where'],'问方法用How。','18'),
mc('19-3','用途问句','But what for? 是在问：',['用来做什么','多少钱','什么时候结束'],'what for问用途。','16'),
mc('19-4','问句答句','What can you make with it? 合适回答是：',['I can make a toy car.','Because it is old.','On 22 April.'],'what问能做什么，不是原因或日期。','17'),
mc('19-5','礼貌对话','Give those cans to me, please. 合适回应是：',['Sure.','On 22 April.','Three parts.'],'Sure表示答应请求。','16'),
mc('19-6','数量问句','How many parts do milk boxes have? 应回答：',['Three parts.','Every day.','With water.'],'How many问数量。','19'),
order('19-7','问句结构','按词块排列：用它你能做什么？',['What','can','you','make','with it?'],'What can you make with it?','What+can+主语+原形+其余部分。','17'),
mc('19-8','请求回应','No problem. 在课文请求后的意思是：',['没问题，可以','根本没有数学题','你有大问题'],'结合Grandma同意给旧衬衫的情境理解。','16')]),
L(20,'环保海报与综合改错','把会背的句子用进新情境',[
 '海报可用Please…、Don’t…、We can…、We should…表达行动。',
 'too small太小；too much plastic太多塑料；be bad for对……有害；be kind to对……友善。',
 '自己的计划要有具体行动。课堂口头/草稿写4–5句，开放写作不以“唯一正确答案”自动评分。'
],[
mc('20-1','易混结构','The dress is too small ___ you.',['for','to','of'],'too small for you对你来说太小；这里不是too…to…。','16'),
mc('20-2','too much','Don’t use ___ plastic.',['too much','too many','many'],'plastic指材料，常用too much；可数复数bottles才用too many。','23'),
mc('20-3','形容词搭配','Plastic is bad ___ the land and sea.',['for','to','with'],'be bad for对……有害。','20'),
mc('20-4','形容词搭配','Let’s be kind ___ the birds.',['to','for','into'],'be kind to友善对待……。','17'),
mc('20-5','综合改错','选出正确的环保海报句子：',['Please bring your own water bottles.','Please brings your own water bottles.','Please to bring your own water bottles.'],'Please+原形bring。','23'),
mc('20-6','综合改错','选出正确句子：',['She can make a poster.','She can makes a poster.','She can to make a poster.'],'主语She不改变can后原形。','25'),
mc('20-7','写作素材','写“学校环保计划”，哪组素材最适合？',['自带水瓶、重复用纸、减少塑料','每年150,000个盒子＋只背数字不说行动','保留开着的电视和水龙头'],'环保计划需要具体可做的行动。','22,23'),
order('20-8','综合造句','按词块排列：我们应该带自己的水瓶。',['We','should','bring','our own','water bottles.'],'We should bring our own water bottles.','should后原形bring；own自己的。','21')])
];
window.UNIT2={title:'Unit 2 · A green life',levels,passages:{bird,milk,earth},words:[
['waste','废料；废弃物'],['plastic','塑料制的；课文中也指塑料'],['throw','扔'],['useful','有用的'],['Yours','你真挚的（书信结尾）'],['recycle','回收利用'],['each','每个；各'],['over','超过'],['metal','金属'],['into','进入；表示状态变化'],['turn into','变成'],['newspaper','报纸'],['flat','平的'],['beginning','开始；开端'],['off','从某物上移开'],['take off','拿掉；移去'],['seat','座位'],['land','陆地'],['shop','商店']
]};
})();
