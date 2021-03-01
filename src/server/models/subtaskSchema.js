const mongoose = require("mongoose");
const { Schema } = mongoose;

const subTaskSchema = new Schema({
  creator: { type: Schema.Types.ObjectId, ref: "user" },
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
