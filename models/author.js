let mongoose = require('mongoose')

let authorSchema = new mongoose.Schema({
  name: String,
  role:String
});

module.exports = mongoose.model('Author', authorSchema);
