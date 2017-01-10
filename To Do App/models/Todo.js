var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
  name: String,
  completed: Boolean,
  note: String,
  updated_at: { type: Date, default: Date.now },
});


// To use our schema definition, we need to convert our TodoSchema into a Model we can work with.
module.exports = mongoose.model('Todo', TodoSchema);
