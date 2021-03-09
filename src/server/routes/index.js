const express = require("express");
const router = express.Router();
const { ensureAuth } = require("../middleware/auth");
const jwt = require("jsonwebtoken");
const User = require("../models/UserSchema");

//Data here is used to display user info on HomePage.js
//Also a refreshToken is created in the browser to allow a persistent login along with an accessToken that allows access to private routes.

//Homepage / Dashboard
//route = Get /home/token
router.get("/home/token", ensureAuth, (req, res, next) => {
  let refreshToken = req.cookies["refreshToken"];

  if (!refreshToken) {
    return res.sendStatus(403);
  } else {
    jwt.verify(
      refreshToken,
      process.env.REFRESH_SECRET_TOKEN,
      (err, decoded) => {
        if (err) {
          throw err;
        }
        const accessToken = generateAccessToken({
          sub: decoded._id,
          displayName: decoded.displayName,
          email: decoded.email,
          admin: decoded.isAdmin,
          image: decoded.image,
        });
        res.json({ accessToken: accessToken, ...decoded });
      }
    );
  }
});

//Here I will code a solution to populate the homepage with the meetings that a user has created. I will use the req.user._id field to retrieve the id of the current user and populate with the path specified as Usertasks and the match being all task with the Task creator field having a matching user id.

//@route /home/meetings
//@desc get route for meeting population

router.get("/home/meetings", ensureAuth, (req, res) => {
  console.log(req.user);
  let user = User.findById({ _id: req.user._id })
    .populate("userTasks")
    .then((task) => {
      res.json(task);
    });
});

//Generate a new access token on page refresh or access token expiration
function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_SECRET_TOKEN, { expiresIn: "5min" });
}
module.exports = router;
