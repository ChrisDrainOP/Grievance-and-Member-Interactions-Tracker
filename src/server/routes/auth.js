const express = require("express");
const router = express.Router();
const passport = require("passport");

//Auth with Google
//Route get /auth/google
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));
//Google auth callback
//Get /auth/google/callback
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => res.redirect(process.env.REACT_APP_API_HOME_URL + "/home")
);
//@desc Logout User
//@route /auth/logout

router.get('/logout', (req, res) => {
  req.logout()
  res.redirect(process.env.REACT_APP_API_HOME_URL + "/")
})
module.exports = router;
