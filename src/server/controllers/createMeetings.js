const express = require("express");
const router = express.Router();
const { ensureAuth } = require("../middleware/auth");
const UserTaskSchema = require("../models/UserTaskSchema");

//@desc Add meeting name and event type to DB
//@route /add/meeting
router.post("/meeting", ensureAuth, (req, res, next) => {

  let {
    meetingName, meetingDate,
    meetingType,
  } = req.body;

  let UserTask = new UserTaskSchema({
    taskCreator: req.user._id,
    meetingName: meetingName,
    actualDateOfEvent: meetingDate,
    meetingType: meetingType,
  });
  console.log(UserTask, "heres the userTask with Id hopefully", UserTask._id);
  try {
    UserTaskSchema.findById({ _id: UserTask._id }, function (err, user) {
      if (err) {
        throw err;
      }
      if (!user) {
        UserTask.save().then((doc) => {
          res.json({ message: "Saved!!!", ...doc });
        });
      } else {
      }
    });
  } catch (err) {
    throw err;
  }
});

//@desc Add a specific meeting type
//Member Interaction
//@route /add/member-interaction
router.post("/member-interaction", ensureAuth, (req, res, next) => {
  console.log(
    req.body,
    "If you got to /add/meeting and user over here-->>",
    req.user._id,
    "+++++"
  );
  let {
    meetingName,
    meetingType,
    meetingDate,
    reminder,
    extension,
    description,
  } = req.body;

  let UserTask = new UserTaskSchema({
    taskCreator: req.user._id,
    meetingName: meetingName,
    meetingType: meetingType,
    actualDateOfEvent: meetingDate,
    reminder: reminder,
    extensionDate: extension,
    description: description,
  });
  console.log(UserTask, "heres the userTask with Id hopefully", UserTask._id);
  try {
    UserTaskSchema.findById({ _id: UserTask._id }, function (err, user) {
      if (err) {
        throw err;
      }
      if (!user) {
        UserTask.save().then((doc) => {
          res.json({ message: "Saved!!!", ...doc });
        });
      } else {
      }
    });
  } catch (err) {
    throw err;
  }
});

module.exports = router;
