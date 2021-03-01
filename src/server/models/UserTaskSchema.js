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
  },
  reminder: {
    type: Date,
    required: false,
  },
  extensionDate: {
    type: Date,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  subTask: [{ type: Schema.Types.ObjectId, ref: "SubTask" }],
});

const UserTask = mongoose.model("Meeting", UserTaskSchema);
module.exports = UserTask;
