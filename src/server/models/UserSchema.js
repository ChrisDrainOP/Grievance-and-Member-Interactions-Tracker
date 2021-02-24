const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  googleId: {
    type: String,
    required: false,
  },
  displayName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  image: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;