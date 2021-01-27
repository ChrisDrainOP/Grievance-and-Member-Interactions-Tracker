const mongoose = require("mongoose");

const { Schema } = mongoose;

const mongoSchema = new Schema({
  createdAt: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  password: {
    type: String,
    required: true,
  },
  displayName: String,
  avatarUrl: String,
});

const User = mongoose.model("User", mongoSchema);
module.exports = User;
