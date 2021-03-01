const express = require("express");
const router = express.Router();
const User = require("../models/UserSchema");
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const jwt = require("jsonwebtoken");
const passport = require("passport");

//Homepage / Dashboard
//route = Get /home
router.get("/home/token", ensureAuth, (req, res, next) => {
  let refreshToken = req.cookies["refreshToken"];

  if (!refreshToken) {
    return res.sendStatus(403);
  } else {
    console.log("inside home/token");
    jwt.verify(
      refreshToken,
      process.env.REFRESH_SECRET_TOKEN,
      (err, decoded) => {
        if (err) {
          throw err;
        }
        const accessToken = generateAccessToken({
          sub: decoded._id,
          name: decoded.displayName,
          email: decoded.email,
          admin: decoded.isAdmin,
        });
        res.json({ accessToken: accessToken });
      }
    );
  }
});

router.get("/userInfo", ensureAuth, (req, res) => {
  //Instead of database query I should pull the info from the jwt here
  console.log(req.user, "here in user Info");
  let userInfo = { ...req.user._doc };
  User.findById({ _id: userInfo._id }, function (err, user) {
    if (err) throw err;
    if (!user) {
      return done(null, false);
    } else {
      let myUser = user.toObject();
      delete myUser.password;
      console.log("Here I'm checking /userInfo", myUser);
      //Make be able to delete once JWT is available But this is official used to retrieve the users info
      res.json({
        ...myUser,
      });
    }
  });
});
//Generate a new access token on page refresh or access token expiration
function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_SECRET_TOKEN, { expiresIn: "5min" });
}
module.exports = router;
