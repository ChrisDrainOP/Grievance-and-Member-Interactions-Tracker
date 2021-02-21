const mongoose = require('mongoose');
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
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const local = mongoose.model("locals", LocalUserSchema);
module.exports = local;