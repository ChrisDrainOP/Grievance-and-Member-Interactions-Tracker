module.exports = {
  ensureAuth: function (req, res, next) {
    console.log(
      req.cookies["refreshToken"],
      req.isAuthenticated(),
      req.session.passport.user
    );
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.status(403).json({ error: "Please Login" });
    }
  },
};

