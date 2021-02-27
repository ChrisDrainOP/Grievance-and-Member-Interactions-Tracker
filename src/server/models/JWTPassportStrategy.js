const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('./UserSchema');

module.exports = function (passport) {
 passport.use(
   new JwtStrategy(
     {
       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
       secretOrKey: process.env.ACCESS_SECRET_TOKEN,
     },
     async (payload, done) => {
        await User.findOne(
         { id: payload.sub },
         function (err, user) {
           if (err) {
             return done(err, false);
           }
           if (user) {
             return done(null, user);
           } else {
             return done(null, false);
             // or you could create a new account
           }
         }
       );
     }
   )
 );
}