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
      res.status(400).json({ error: "Please Login" });
    }
  },

};

//templating engine (server-rendered) - res.render/redirect
//client-rendered - res.send/json
