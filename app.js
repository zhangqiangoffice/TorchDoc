var express = require('express');
var app = express();

app.set('port', 3001);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.send('start');
});


//火炬手接口 API001
app.post('/app/login', function(req, res) {
	var obj001 = {result: 1, message: '登录成功', userid: 1};
	res.json(obj001);
});

//火炬手接口 API002
app.post('/app/register', function(req, res) {
	var obj002 = {result: 1, message: '注册成功', userid: 2};
	res.json(obj002);
});

//火炬手接口 API003
app.post('/api003', function(req, res) {
	var obj003 = {
		result: 1, 
		message: '成功', 
		list: [
			{
				id: 1, 
				title: '习近平就佛罗里达州枪击事件向美国总统奥巴马致慰问电',
				description: '国家主席习近平致电美国总统奥巴马，就美国佛罗里达州奥兰多市发生枪击事件，造成重大伤亡',
				author: '长公主',
				date: '2016-04-21',
				pic: 'img/create_pic1.png',
				tag_name: '政策',
				tag_color: 'F39801',
				likes_num: 110,
				comments_num: 815,
				collected: 0,
				liked: 0},
			{
				id: 2, 
				title: '习近平向美国总统奥巴马致慰问电',
				description: '国家主席习近平致电美国总统奥巴马，就美国佛罗里达州奥兰多市发生枪击事件，造成重大伤亡',
				author: '穆青',
				date: '2016-06-03',
				pic: 'img/learn_pic.png',
				tag_name: '军事',
				tag_color: '22AC35',
				likes_num: 120,
				comments_num: 831,
				collected: 0,
				liked: 1},
			{
				id: 3, 
				title: '就佛罗里达州枪击事件习近平向美国总统奥巴马致慰问电',
				description: '家主席习近平致电美国总统奥巴马，就美国佛罗里达州奥兰多市发生枪击事件，造成重大伤亡',
				author: '百里奇',
				date: '2015-12-29',
				pic: 'img/create_pic1.png',
				tag_name: '政策',
				tag_color: 'F39801',
				likes_num: 10,
				comments_num: 5,
				collected: 0,
				liked: 0},
			{
				id: 4, 
				title: '美国总统奥巴马致慰问电',
				description: '国家主席习近平致电美国总统奥巴马，就美国佛罗里达州奥兰多市发生枪击事件，造成重大伤亡',
				author: '霓凰',
				date: '2016-06-01',
				pic: 'img/learn_pic.png',
				tag_name: '政策',
				tag_color: 'F39801',
				likes_num: 10,
				comments_num: 5,
				collected: 1,
				liked: 0},
			{
				id: 5, 
				title: '建党95周年庆祝大会举行 习近平发表讲话',
				description: '中国网7月1日讯 庆祝中国共产党成立95周年大会于7月1日上午在人民大会堂举行。中共中央总书记、国家主席、中央军委主席习近平出席大会并发表重要讲话。',
				author: '言豫津',
				date: '2016-07-01',
				pic: 'img/learn_pic.png',
				tag_name: '政策',
				tag_color: 'F39801',
				likes_num: 104,
				comments_num: 334,
				collected: 1,
				liked: 1},
			{
				id: 6, 
				title: '美国总统奥巴马致慰问电',
				description: '国家主席习近平致电美国总统奥巴马，就美国佛罗里达州奥兰多市发生枪击事件，造成重大伤亡',
				author: '楼之敬',
				date: '2016-11-01',
				pic: 'img/learn_pic.png',
				tag_name: '政策',
				tag_color: 'F39801',
				likes_num: 80,
				comments_num: 38,
				collected: 1,
				liked: 0},
			{
				id: 7, 
				title: '美国总统奥巴马致慰问电',
				description: '国家主席习近平致电美国总统奥巴马，就美国佛罗里达州奥兰多市发生枪击事件，造成重大伤亡',
				author: '卓鼎风',
				date: '2016-06-21',
				pic: 'img/learn_pic.png',
				tag_name: '政策',
				tag_color: 'F39801',
				likes_num: 67,
				comments_num: 208,
				collected: 0,
				liked: 0}
		]
	};
	res.json(obj003);
});

//火炬手接口 API004
app.post('/api004', function(req, res) {
	var obj004 = {
		result: 1, 
		message: '成功', 
		content: '冷战后,经济危机、跨国移民等地区性问题开始质疑“东盟方式”的合理性和有效性,要求修改不干涉内政原则,强化东盟机制建设,形成一套有效的跨国管理模式,更好地发挥其地区管理者的作用。那么,东盟会调整“东盟方式”以适应不断变化的国际和地区环境变化的需要吗? 本文试图从东盟有意识的加强自身组织建设过程中探寻“东盟方式”的困境。冷战后,东盟组织经历了一系列重大调整。在组织结构方面,完善决策机制满足政治经济发展需要,吸收印支三国和缅甸实现大东盟梦想。在组织目标方面,借鉴欧洲共同体发展经验,成立自由贸易区,加紧东盟共同体建设。然而,扩大后的东盟成员国对国家主权的依然高度敏感,国家利益优先于地区利益。东盟共同体建设并没有深化成员国之间的政治经济联系,推进东盟制度化建设,其目的是共同协商处理地区问题。因此,东盟组织的完善并没改变东盟松散联盟的性质,决定了“东盟方式”存在的必要。 然而,不容忽视的是：《东盟宪章》赋予了东盟法律人格,保障了东盟实体地位,确立了《东盟宪章》至高无上的地位以及普遍约束力。'		
	};
	res.json(obj004);
});

//火炬手接口 API005
app.post('/api005', function(req, res) {
	var obj005 = {
		result: 1, 
		message: '成功', 
		tests: [
			{
				stem: '上世纪六十年代，哪些国家创建东盟',
				answer: '东南亚',
				options: ['东欧', '东南亚', '欧洲']
			},
			{
				stem: '中国什么时候加入东盟',
				answer: '1973',
				options: ['1973', '1980', '1994']
			}
		]		
	};
	res.json(obj005);
});

//火炬手接口 API006
app.post('/api006', function(req, res) {
	var obj006 = {result: 1, message: '学习通过'};
	res.json(obj006);
});

//火炬手接口 API007
app.post('/api007', function(req, res) {
	var obj007 = {result: 1, message: '操作成功'};
	res.json(obj007);
});

//火炬手接口 API008
app.post('/api008', function(req, res) {
	var obj008 = {result: 1, message: '点赞成功'};
	res.json(obj008);
});


//火炬手接口 API009
app.post('/api009', function(req, res) {
	var obj009 = {result: 1, message: '评论成功'};
	res.json(obj009);
});

//火炬手接口 API010
app.post('/api010', function(req, res) {
	var obj010 = {
		result: 1, 
		message: '成功',
		comments: [
			{
				name: '蒙挚',
				date: '2016-07-01',
				portrait: 'img/portrait_mengzhi.png',
				remark: '小殊，你怎么来了？'
			},
			{
				name: '霓凰',
				date: '2016-07-01',
				portrait: 'img/portrait_nihuang.png',
				remark: '这里明明有一颗痣'
			},
			{
				name: '谢玉',
				date: '2016-07-01',
				portrait: 'img/portrait_xieyu.png',
				remark: '朝堂之中哪有什么正岐之分，胜者，自然为正'
			},
			{
				name: '太奶奶',
				date: '2016-07-01',
				portrait: 'img/portrait_tainainai.png',
				remark: '你们什么时候结婚？'
			},
		]		
		};
	res.json(obj010);
});

//火炬手接口 API011
app.post('/api011', function(req, res) {
	var obj011 = {
		result: 1, 
		message: '成功',
		name: '梅长苏',
		portrait: 'img/portrait_meichangsu.png',
		collected_num: '3',
		learned_num: '4',
		create_num: '5'
	};
	res.json(obj011);
});


app.use(function(req, res) {
	res.status(404);
	res.render('404');
});

app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function(){
	console.log('Express started on http://localhost:' +
		app.get('port') + ';press Ctrl-c to terminate.');
});