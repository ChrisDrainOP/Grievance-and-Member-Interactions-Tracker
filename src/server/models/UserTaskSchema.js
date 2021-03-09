const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserTaskSchema = new Schema({
  taskCreator: Schema.Types.ObjectId,
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  meetingName: {
    type: String,
    required: true,
  },
  meetingType: {
    type: String,
    required: true,
  },
  actualDateOfEvent: {
    type: Date,
    required: false,
    default: "",
  },
  reminder: {
    type: Date,
    required: false,
    default: "",
  },
  extensionDate: {
    type: Date,
    required: false,
    default: "",
  },
  description: {
    type: String,
    required: false,
    default: "",
  },
  subTask: [{ type: Schema.Types.ObjectId, ref: "Subtask" }],
});

const UserTask = mongoose.model("Meeting", UserTaskSchema);
module.exports = UserTask;
