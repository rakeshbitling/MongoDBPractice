let mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
  name: String,
  role: String
});

module.exports = mongoose.model('Users', userSchema);