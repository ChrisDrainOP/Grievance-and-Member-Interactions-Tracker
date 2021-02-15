module.exports = {
  ensureAuth: function (req, res, next) {
    console.log("got here==>>", req.isAuthenticated());
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.redirect(process.env.REACT_APP_API_HOME_URL + "/");
      // res.status(400).send({ error: "Not authenticated" });
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

//templating engine (server-rendered) - res.render/redirect
//client-rendered - res.send/json
