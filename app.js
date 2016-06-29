var express = require('express');
var app = express();

var handlebars = require('express3-handlebars').create({defaultLayout:'main'});

var fortune = require('./lib/fortune.js');

app.engine('handlebars', j=handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3001);

app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next) {
	res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
	next();
})

app.get('/', function(req, res) {
	res.render('home');
});

app.get('/about', function(req, res){
	res.render('about', {
		fortune: fortune.getFortune(),
		pageTestScript: '/qa/tests-about.js'
	});
});

//火炬手接口 API001
obj001 = {result: 1, message: '登录成功', userid: 1};
app.post('/api001', function(req, res) {
	res.json(obj001);
});

//火炬手接口 API002
obj002 = {result: 1, message: '注册成功', userid: 2};
app.post('/api002', function(req, res) {
	res.json(obj002);
});

//火炬手接口 API003
obj003 = {
	result: 1, 
	message: '成功', 
	list: [
		{
			article_id: 1, 
			title: '习近平就佛罗里达州枪击事件向美国总统奥巴马致慰问电',
			description: '国家主席习近平致电美国总统奥巴马，就美国佛罗里达州奥兰多市发生枪击事件，造成重大伤亡',
			pic: 'img/create_pic1.png',
			learned: 1,
			tag_name: '政策',
			tag_color: '#F39801'},
		{
			article_id: 2, 
			title: '习近平向美国总统奥巴马致慰问电',
			description: '国家主席习近平致电美国总统奥巴马，就美国佛罗里达州奥兰多市发生枪击事件，造成重大伤亡',
			pic: 'img/create_pic1.png',
			learned: 0,
			tag_name: '军事',
			tag_color: '#22AC35'},
		{
			article_id: 3, 
			title: '就佛罗里达州枪击事件习近平向美国总统奥巴马致慰问电',
			description: '国家主席习近平致电美国总统奥巴马，就美国佛罗里达州奥兰多市发生枪击事件，造成重大伤亡',
			pic: 'img/create_pic1.png',
			learned: 1,
			tag_name: '政策',
			tag_color: '#F39801'}
	]
};
app.post('/api003', function(req, res) {
	res.json(obj003);
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