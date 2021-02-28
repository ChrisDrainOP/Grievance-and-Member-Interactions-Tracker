const JwtStrategy = require("passport-jwt").Strategy;
const User = require("./UserSchema");

let cookieExtractor = (req) => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["refreshToken"];
  }
  return token;
};

module.exports = function (passport) {
  passport.use(
    new JwtStrategy(
      {
        jwtFromRequest: cookieExtractor,
        secretOrKey: process.env.REFRESH_SECRET_TOKEN,
        algorithms: "RS256",
      },
      async (payload, done) => {
        console.log(
          "I'm checking jwt extraction",
          ExtractJwt.fromAuthHeaderAsBearerToken()
        );
        await User.findById({ _id: payload.sub }, function (err, user) {
          if (err) {
            return done(err, false);
          }
          if (user) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      }
    )
  );
};
