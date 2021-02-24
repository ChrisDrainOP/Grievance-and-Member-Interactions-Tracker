const LocalStrategy = require('passport-local').Strategy;
const LocalUser = require('./LocalUserSchema');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

module.exports = function (passport) {
  passport.use(
  new LocalStrategy({email: 'email'},
    function(email, password, done) {
      LocalUser.findOne({email: email}, function (err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
        return done(null, false, {message: 'Email not found'});
        }
        if(!user.verifyPassword(password)) {
        return done(null, false);
        }
        return done(null, user);
      });
    }
  ));
}