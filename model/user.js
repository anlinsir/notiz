var mongoose = require('mongoose');


var UsersSchema  = require('../schema/user');


var User = mongoose.model('newUsers',UsersSchema)
	//x集合名称 (+s)

module.exports = User