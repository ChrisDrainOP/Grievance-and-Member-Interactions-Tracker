const LocalStrategy = require("passport-local").Strategy;
const User = require("./UserSchema");
const bcrypt = require("bcryptjs");

module.exports = function (passport) {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "emailLogIn",
        passwordField: "passwordLogIn",
      },
      function (email, password, done) {
        User.findOne({ email: email }, function (err, user) {
          if (err) throw err;
          if (!user) {
            return done(null, false);
          } else {
            bcrypt.compare(password, user.password, (err, result) => {
              if (err) {
                throw err;
              }
              if (result) {
                return done(null, user);
              } else {
                return done(null, false);
              }
            });
          }
        });
      }
    )
  );
  passport.serializeUser((user, done) => done(null, user.id));

  passport.deserializeUser((id, done) => {
    User.findById({ _id: id }, (err, user) => done(err, user));
  });
};
