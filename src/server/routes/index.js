const express = require("express");
const router = express.Router();
const { ensureAuth } = require("../middleware/auth");
const jwt = require("jsonwebtoken");

//Data here is used to display user info on HomePage.js

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
          name: decoded.displayName,
          email: decoded.email,
          admin: decoded.isAdmin,
          image: decoded.image,
        });
        res.json({ accessToken: accessToken, ...decoded });
      }
    );
  }
});

//Generate a new access token on page refresh or access token expiration
function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_SECRET_TOKEN, { expiresIn: "5min" });
}
module.exports = router;
