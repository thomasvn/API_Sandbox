// -------------------- Dependencies -------------------- //
var mongoose = require('mongoose');


// -------------------- Schema -------------------- //
var userSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    }
});


// -------------------- Export Mongoose Model -------------------- //
// A model is a class with which we construct documentss
var User = module.exports  = mongoose.model('User', userSchema);


// -------------------- Model Configuration -------------------- //
module.exports.getUsers = function(callback) {
    User.find(callback);
}

module.exports.addUser = function(user, callback) {
    User.create(user, callback);
}