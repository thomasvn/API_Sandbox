// -------------------- Dependencies -------------------- //
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser'); // Used for POST requests
var UserController = require('./models/users')


// -------------------- Connect to Mongoose -------------------- //
mongoose.connect('mongodb://localhost/smartMirror');
var db = mongoose.connection;


// -------------------- Routes -------------------- //
// Handles an HTTP request to a URI (app.post, app.put, app.delete)

var app = express();
app.use(bodyParser.json()); // Initialize Body Parser

app.get('/api/users', function(req, res) {
    UserController.getUsers(function(err, users) {
        if (err) {
            throw err;
        }
        res.json(users); // Sends this to the browser
    });
});

app.post('/api/users', function(req, res) {
    var user = req.body; // Uses body parser
    UserController.addUser(user, function(err, user) {
        console.log(user);
        if (err) {
            throw err;
        }
        res.json(user);
    });
});


// -------------------- Start the Server -------------------- //
app.listen(3000);
console.log('Listening on port 3000...');


// -------------------- Notes for Mongo -------------------- //

// When posting, we should normally post things individually and add security authentication

// db.createCollection('books')
// db.createCollection('genres')
// show collections
// db.genres.insert({name:'Suspense'})
// db.genres.find()
// db.genres.insert({name:'Self Help'})
// db.books.insert({title:'The Murder House', genre:'Suspense', description:'fake description', author:'James Patterson', publisher: 'Brown & Company', pages: '480', image_url:'lel'})
// db.books.find()