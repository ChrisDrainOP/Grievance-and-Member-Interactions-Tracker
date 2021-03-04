const express = require("express");
const router = express.Router();
const localUser = require("../models/UserSchema");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const jwt = require("jsonwebtoken");

//Error and Success handling 
const messagesLogin = {
  errorsLogin: false,
  accessToken: null,
  userExist: false,
  logInReady: false,
};
const messagesRegistration = {
  registrationErrors: false,
  registrationLogInReady: false,
  accessToken: null,
  registeredUserExist: false,
};

//Login with email and password
//route post /login
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    //Send Back errors to Login page specifically
    if (!user)
      res.json({ ...messagesLogin, ["userExist"]: "User does not exist!" });
    else {
      req.logIn(user, (err) => {
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
        res.cookie("refreshToken", refreshToken, {
          maxAge: 14 * 24 * 60 * 60 * 10,
          httpOnly: true,
        });
        res.json({
          ...messagesLogin,
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
      ...messagesRegistration,
      ["registrationErrors"]:
        "Please properly fill out all fields. Remember password field should be longer than 6 characters",
    });
  }

  localUser.findOne({ email: email.toLowerCase() }, (err, user) => {
    if (err) throw err;
    if (user) {
      return res.json({
        ...messagesRegistration,
        ["registeredUserExist"]: "This email is already in use.",
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
              req.logIn(savedDoc, (err) => {
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
                return res.json({
                  ...messagesRegistration,
                  ["registrationLogInReady"]:
                    "Success Redirecting to DashBoard!",
                  ["accessToken"]: accessToken,
                });
              });
            })
            .catch((err) => res.json({ registrationErrors: err }));
        });
      });
    }
  });
});

module.exports = router;
