var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  auth_id: String,
  nickname: String,
  givenName: String,
  familyName: String,
  picture: String,
  gender: String,
  name: String,
  email: String,
});

var User = mongoose.model('User', userSchema);

module.exports = User;
