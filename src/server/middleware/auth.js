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
  ensureGuest: function (req, res, next) {
    console.log(req.cookies, "In guest")
    if (req.isAuthenticated()) {
     
        return next();
    } else {
      
      return res.status(401).send({error: "Please Log in first"})
    }
  },
};

//templating engine (server-rendered) - res.render/redirect
//client-rendered - res.send/json
