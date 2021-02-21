const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const passport = require("passport");
const localUser = require("../models/LocalUserSchema");
const bcrypt = require("bcryptjs");

//Parse body from http request
const urlencodedParser = bodyParser.urlencoded({ extended: false });

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

router.post("/register", urlencodedParser, (req, res) => {
  const { fullName, email, email2, password, password2 } = req.body;
  req.session.errors = {};
  if (!fullName || !email || !email2 || !password || !password2) {
    req.session.errors.blank = "Please fill in all fields";
  }

  //Check emails
  if (email !== email2) {
    req.session.errors.email = "Email fields do not match";
  }

  //Check passwords
  if (password !== password2) {
    req.session.errors.password = "Passwords do not match";
  }

  //Check password length
  if (password.length < 6) {
    req.session.errors.passwordLength =
      "Password field should be longer than 6 characters";
  }
  console.log(req.session);

  if (Object.keys(req.session.errors).length > 0) {
    req.session.errors.userErrors = "You have errors in your Registration Form";
    res.redirect(process.env.REACT_APP_API_URL + "/");
  } else {
    res.redirect(process.env.REACT_APP_API_URL + "/home");
  }
});

module.exports = router;
