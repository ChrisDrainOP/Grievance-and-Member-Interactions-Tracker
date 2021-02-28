const express = require("express");
const router = express.Router();
const localUser = require("../models/UserSchema");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const jwt = require("jsonwebtoken");

//Error and Success handling Handling
const messages = {
  errors: false,
  logInReady: false,
  accessToken: null,
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
        console.log("I have authenticated and I'm trying to log in");
        if (err) {
          throw err;
        }
        let jwtSignUser = {
          sub: user._id,
          name: user.displayName,
          email: user.email,
          admin: user.isAdmin,
        };
        let accessToken = jwt.sign(
          jwtSignUser,
          process.env.ACCESS_SECRET_TOKEN
        );
        let refreshToken = jwt.sign(
          jwtSignUser,
          process.env.REFRESH_SECRET_TOKEN
        );
        req.cookies["refreshToken"] = refreshToken;
        console.log("Refresh Token right here in /login", req.cookies);
        return res.json({
          ...messages,
          ["logInReady"]: "Success Redirecting to DashBoard!",
          ["accessToken"]: accessToken,
        });
      });
    }
  })(req, res, next);
});

//Register the user
//route post /register

router.post("/register", (req, res, next) => {
  const { fullName, email, password } = req.body;

  //Check password length
  if (password.length < 6 || !email || !fullName) {
    res.json({
      ...messages,
      ["errors"]:
        "Please properly fill out all fields. Remember password field should be longer than 6 characters",
    });
  }

  localUser.findOne({ email: email.toLowerCase() }, (err, user) => {
    if (err) throw err;
    if (user) {
      return res.json({
        ...messages,
        ["userExist"]: "This email is already in use.",
      });
    }
    if (!user) {
      bcrypt.genSalt(13, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {
          const newUser = new localUser({
            displayName: fullName,
            email: email.toLowerCase(),
            password: hash,
          });
          newUser
            .save()
            .then((savedDoc) => {
              console.log(savedDoc, "Heres Yours savedDoc!!!!!");

              req.logIn(savedDoc, (err) => {
                console.log("I have authenticated and I'm trying to log in");
                if (err) {
                  throw err;
                }
                let jwtSignUser = {
                  id: savedDoc._id,
                  name: savedDoc.displayName,
                  email: savedDoc.email,
                  admin: savedDoc.admin,
                };
                let accessToken = jwt.sign(
                  jwtSignUser,
                  process.env.ACCESS_SECRET_TOKEN
                );
                let refreshToken = jwt.sign(
                  jwtSignUser,
                  process.env.REFRESH_SECRET_TOKEN
                );
                req.cookies["refreshToken"] = refreshToken;
                console.log(
                  "Here are your cookies--->>> in /register",
                  req.cookies
                );
                return res.json({
                  ...messages,
                  ["logInReady"]: "Success Redirecting to DashBoard!",
                  ["accessToken"]: accessToken,
                });
              });
            })
            .catch((err) => res.json({ error: err }));
        });
      });
    }
  });
});

module.exports = router;
