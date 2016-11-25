var express = require('express');
var router = express();
var mongoose = require('mongoose');
var Todo = require('../models/Todo.js');


/* GET /todos listing. */
router.get('/', function(req, res, next) {
  Todo.find(function (err, todos) {
    if (err) return next(err);
    res.json(todos);
  });
});


/* GET /todos/:id listing. */
router.get('/:id', function(req, res, next) {
  Todo.findById(req.params.id, function (err, todos) {
    if (err) return next(err);
    res.json(todos);
  });
});


/* POST /todos */
router.post('/', function(req, res, next) {
  Todo.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/* PUT /todos/:id */
router.put('/:id', function(req, res, next) {
  Todo.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/* DELETE /todos/:id */
router.delete('/:id', function(req, res, next) {
  Todo.findByIdAndRemove(req.params.id, req.body, function (err, writeres) {
    if (err) return next(err);
    res.json(writeres);
  });
});


/* DELETE /todos/ */
router.delete('/', function(req, res, next) {
  Todo.remove({}, function (err, writeres) {
    if (err) return next(err);
    res.json(writeres);
  });
});

module.exports = router;