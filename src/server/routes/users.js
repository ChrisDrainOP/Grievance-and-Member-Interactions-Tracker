const express = require("express");
const router = express.Router();
const passport = require("passport");
const localUser = require("../models/LocalUserSchema");
const bcrypt = require("bcryptjs");

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

router.post("/register", (req, res) => {
  console.log(req.body);
  res.send("hello");
});

module.exports = router;
