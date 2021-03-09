const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");

//Auth with Google
//Route get /auth/google
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
//Google auth callback
//Get /auth/google/callback
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  function (req, res) {
    let user = {
      sub: req.user._id,
      displayName: req.user.displayName,
      email: req.user.email,
      admin: req.user.isAdmin,
      image: req.user.image,
    };

    let refreshToken = jwt.sign(user, process.env.REFRESH_SECRET_TOKEN);

    res.cookie("refreshToken", refreshToken, {
      maxAge: 14 * 24 * 60 * 60,
      httpOnly: true,
    });

    res.redirect(process.env.REACT_APP_API_HOME_URL + "/home");
  }
);

//@desc Logout User
//@route /auth/logout
router.get("/logout", (req, res) => {
  req.logout();
  res.clearCookie("refreshToken");
  res.redirect(process.env.REACT_APP_API_HOME_URL + "/");
});
module.exports = router;
