module.exports = {
  ensureAuth: function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.redirect(process.env.REACT_APP_API_HOME_URL + "/");
    }
  },
  ensureGuest: function (req, res, next) {
    if (req.isAuthenticated()) {
      console.log(req.isAuthenticated(), "I'm checking");

      res.redirect(process.env.REACT_APP_API_HOME_URL + "/home");
    } else {
      console.log(req.isAuthenticated(), "I'm checking guest");
      return next();
    }
  },
};
