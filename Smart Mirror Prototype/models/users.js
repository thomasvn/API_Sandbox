// -------------------- Dependencies -------------------- //
var mongoose = require('mongoose');


// -------------------- Schema -------------------- //
var userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});


// -------------------- Export Mongoose Model -------------------- //
var User = mongoose.model('User', userSchema) = module.exports;


// Get Users
module.exports.getUsers = function(callback, limit) {
    User.find(callback).limit(limit)
}