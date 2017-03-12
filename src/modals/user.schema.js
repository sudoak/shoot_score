var mongoose = require('mongoose')

var user_model = mongoose.Schema({
    user_id : String,
    username : String,
    password : String
})

module.exports = mongoose.model('user',user_model)