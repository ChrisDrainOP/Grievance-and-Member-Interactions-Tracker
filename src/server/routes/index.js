const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Login page
//route = Get /
router.get("/", ensureGuest, (req, res) => {
  let userInfo = { ...req.user._doc };

  console.log('here I\'m checking /home',userInfo, req.isAuthenticated());
  res.json({ isAuthenticated: req.isAuthenticated(), ...userInfo });
});

//Homepage / Dashboard
//route = Get /home
router.get("/home", ensureAuth, (req, res, next) => {
  let userInfo = { ...req.user._doc };

  console.log("here I\'m checking /home",userInfo, req.isAuthenticated());
  res.json({ isAuthenticated: req.isAuthenticated(), ...userInfo });
});

router.get("/userInfo", ensureAuth, (req, res) => {
  let userInfo = {...req.user._doc};

  console.log("Here I\'m checking /userInfo",userInfo, req.isAuthenticated());

  //Make be able to delete once JWT is available But this is official used to retrieve the users info
  res.json({ isAuthenticated: req.isAuthenticated(), ...userInfo });
});

module.exports = router;
