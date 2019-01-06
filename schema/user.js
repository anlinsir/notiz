var mongoose = require('mongoose');


var UsersSchema = mongoose.Schema({
	username:String,
	password:String
})

module.exports= UsersSchema