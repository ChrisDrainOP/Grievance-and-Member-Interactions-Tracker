const mongoose = require("mongoose");
const { Schema } = mongoose;

const subTaskSchema = new Schema({
  createdAt: {
    type: Date,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  reminder: {
    type: Date,
  },
});

const subTask = mongoose.model("Subtask", subTaskSchema);
module.exports = subTask;
