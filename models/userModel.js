const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 2
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2
  },
  hobby: {
    type: String,
    default: "Not provided"
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
