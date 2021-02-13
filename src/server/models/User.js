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
    required: true,
  },
  displayName: {
    type: String,
    required: true,
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
