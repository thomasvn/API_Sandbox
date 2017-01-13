// -------------------- Dependencies -------------------- //
var bodyParser = require('body-parser'); // Used for POST requests
var mongoose = require('mongoose');
var express = require('express');
var User = require('./models/users')


// -------------------- Connect to Mongoose -------------------- //
mongoose.connect('mongodb://localhost/smartMirror');
var db = mongoose.connection;


// -------------------- Routes -------------------- //

// Handles an HTTP request to a URI (app.post, app.put, app.delete)

var app = express();


// Gets JSON data for Users
app.get('/api/users', function(req, res) {
    // Sends this to the browser
    User.getUsers(function(err, users) {
        if (err) {
            throw err;
        }
        res.json(users);
    });
});


// -------------------- Start the Server -------------------- //
app.listen(3000);
console.log('Listening on port 3000...');


// -------------------- Notes for Mongo -------------------- //
// db.createCollection('books')
// db.createCollection('genres')
// show collections
// db.genres.insert({name:'Suspense'})
// db.genres.find()
// db.genres.insert({name:'Self Help'})
// db.books.insert({title:'The Murder House', genre:'Suspense', description:'fake description', author:'James Patterson', publisher: 'Brown & Company', pages: '480', image_url:'lel'})
// db.books.find()