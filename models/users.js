const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    unique: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  noclass: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  averageClasses: {
    type: Number,
    default: 0, // Initialize to 0
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;