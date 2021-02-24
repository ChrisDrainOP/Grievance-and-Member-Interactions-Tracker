module.exports = {
  ensureAuth: function (req, res, next) {
    console.log("got here==>>", req.isAuthenticated());
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.status(400).send({ error: "Not Logged In" });
    }
  },
  ensureGuest: function (req, res, next) {
    if (req.isAuthenticated()) {
      console.log(req.isAuthenticated(), "I'm checking");
        return next();
    } else {
      
      return res.status(401).send({error: "Please Log in first"})
    }
  },
};

//templating engine (server-rendered) - res.render/redirect
//client-rendered - res.send/json
