const mongoose = require("mongoose");
const { Schema } = mongoose;

const LocalUserSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  name: {
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
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const LocalUser = mongoose.model("Local", LocalUserSchema);
module.exports = LocalUser;
