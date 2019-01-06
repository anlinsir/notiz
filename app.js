var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose') 
var app = express();

var User = require('./model/user')

app.use(express.static('static'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended:true
}));
mongoose.Promise = global.Promise
mongoose.connect('mongodb://127.0.0.1:27017/enjoy',{ useNewUrlParser: true })
	.then(function(db){
		console.log('ok!!!')
	})
	

// var db = mongoose.connection;

// db.on('open',function(){
// 	console.log('ok!')
// }) 


app.get('/login',function(req,res){
	res.send('suceess login');
})

app.post('/api/re',function(req,res){
	console.log(req.body)

	var u = new User({
		username : req.body.name,
		password : req.body.pass,
	}) 
	console.log(u)
	u.save(function(err,doc){
		if(err){
			console.log(err)
			return
		}
		res.json({
			code:200,
			msg:'注册成功',
		})
		
	})

})



app.listen(8080,function(){
	console.log('pro start')
})