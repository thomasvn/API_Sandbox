// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var productSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number
});

// Return model
module.exports = restful.model('User', productSchema);