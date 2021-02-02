const mongoose = require("mongoose");
const { Schema } = mongoose;

const eventSchema = new Schema({
  createdAt: {
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
  subTask: [{ type: Schema.Types.ObjectId, ref: "Subtask" }],
});

const events = mongoose.model("Event", eventSchema);
module.exports = events;
