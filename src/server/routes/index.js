const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const user = require("../models/UserSchema");

//Login page
//route = Get /
router.get("/", ensureGuest, (req, res) => {
  res.redirect(process.env.REACT_APP_API_HOME_URL + "/");
});

//Homepage / Dashboard
//route = Get /home
router.get("/home", ensureAuth, (req, res) => {
  res.redirect(process.env.REACT_APP_API_HOME_URL + "/home");
});

router.get("/userInfo", ensureAuth, (req, res) => {

  let userInfo = req.user;
  res.json(userInfo);

});


module.exports = router;
