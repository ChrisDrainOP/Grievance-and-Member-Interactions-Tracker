const express = require("express");
const router = express.Router();
const localUser = require("../models/LocalUserSchema");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const server = express();

//Login with email and password
//route post /login
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  console.log(req.session);
  localUser.findOne({ email: email, password: password }).then((user) => {
    if (user) {
      res.redirect(process.env.REACT_APP_API_HOME_URL + "/home");
    }
  });
});

//Register the user
//route post /register

router.post("/register", (req, res) => {
  console.log("req bodyy==>>>", req.body);
  const { fullName, email, password } = req.body;

  //Check password length
  if (password.length < 6 || !email || !fullName) {
    console.log("got here...credential check");
    res.json({
      errors:
        "Please properly fill out all fields. Remember password field should be longer than 6 characters",
        logInReady: false,
        isAuthenticated: false,
        userExist: false,
    });
  }

  localUser.findOne({ email: email }, async (err, doc) => {
    if (err) throw err;
    if (doc)
      res.json({
        errors: false,
        logInReady: false,
        isAuthenticated: false,
        userExist: "This email is already in use.",
      });
    if (!doc) {
      const newUser = new localUser({
        name: fullName,
        email: email,
        password: password,
      });

      bcrypt.genSalt(13, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {
          const newUser = new localUser({
            name: fullName,
            email: email,
            password: hash,
          });
          await newUser.save();
          res.json({
            errors: false,
            logInReady: "Exit and Please Login with your credentials",
            isAuthenticated: false,
            userExist: false,
          });
        });
      });
    }
  });
});

module.exports = router;
