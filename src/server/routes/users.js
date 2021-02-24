const express = require("express");
const router = express.Router();
const localUser = require("../models/UserSchema");
const bcrypt = require("bcryptjs");
const passport = require("passport");

//Error and Success handling Handling
const messages = {
  errors: false,
  logInReady: false,
  isAuthenticated: false,
  userExist: false,
};

//Login with email and password
//route post /login
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.json({ ...messages, ["userExist"]: "User does not exist!" });
    else {

      req.logIn(user, (err) => {
        if (err) {
          throw err;
        }

        return res.json({
          ...messages,
          ["logInReady"]: "Success Redirecting to DashBoard!",
          ["isAuthenticated"]: req.isAuthenticated(),
        });
      });
    }
  })(req, res, next);
});

//Register the user
//route post /register

router.post("/register", (req, res) => {
  const { fullName, email, password } = req.body;

  //Check password length
  if (password.length < 6 || !email || !fullName) {
    console.log("got here...credential check");
    res.json({
      ...messages,
      ["errors"]:
        "Please properly fill out all fields. Remember password field should be longer than 6 characters",
    });
  }

  localUser.findOne({ email: email }, async (err, doc) => {
    if (err) throw err;
    if (doc)
      res.json({ ...messages, ["userExist"]: "This email is already in use." });
    if (!doc) {
      await bcrypt.genSalt(13, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {
          const newUser = new localUser({
            displayName: fullName,
            email: email,
            password: hash,
          });
          newUser.save();
          res.json({
            ...messages,
            ["logInReady"]: "Exit and Please Login with your credentials",
          });
        });
      });
    }
  });
});

module.exports = router;
