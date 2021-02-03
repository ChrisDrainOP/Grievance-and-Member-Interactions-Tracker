const mongoose = require("mongoose");
const { Schema } = mongoose;

const meetingSchema = new Schema({
  createdAt: {
    type: Date,
    required: true,
  },
  meetingType: {
    type: String,
    required: true,
  },
  meetingDate: {
    type: Date,
    required: true,
  },
  eventName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  reminderDate: {
    type: Date,
  },
  extentionDate: {
    type: Date,
  },

  subTask: [{ type: Schema.Types.ObjectId, ref: "Subtask" }],
});

const meetings = mongoose.model("Meeting", meetingSchema);
module.exports = meetings;
