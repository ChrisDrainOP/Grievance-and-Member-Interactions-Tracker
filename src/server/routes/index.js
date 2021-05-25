const express = require("express");
const router = express.Router();
const { ensureAuth } = require("../middleware/auth");
const jwt = require("jsonwebtoken");
const UserTasks = require("../models/UserTaskSchema");

//Data here is used to display user info on HomePage.js
//Also a refreshToken is created in the browser to allow a persistent login along with an accessToken that allows access to private routes.

//@route /home/meetings
//@desc get route for meeting population

router.get("/home/meetings", ensureAuth, (req, res) => {
  console.log("heres is your user===>", req.user);
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
        
        let tasks = UserTasks.find({
          taskCreator: req.user._id,
        })
          .exec()
          .then((userTasks) => res.json({ accessToken: accessToken, userTasks: userTasks, ...decoded  }));

      }
    );
  }
  
});

//Generate a new access token on page refresh or access token expiration
function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_SECRET_TOKEN, { expiresIn: "5min" });
}


module.exports = router;
