const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("./UserSchema");

module.exports = function (passport) {
  passport.use(
    new GoogleStrategy(
      //This Strategy should include a way to get the user email from it.
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        console.log("I'm in the using strategy block");
        const newUser = {
          googleId: profile.id,
          email: profile.emails[0].value,
          displayName: profile.displayName,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          image: profile.photos[0].value,
        };
        try {
          console.log("I'm in the try block");
          let user = await User.findOne({ googleId: profile.id });
          
          if (user) {
            done(null, user);
          } else {
            user = await User.create(newUser);
            done(null, user);
          }
        } catch (err) {
          done(err);
        }
      }
    )
  );
  passport.serializeUser((user, done) => done(null, user._id));

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user));
  });
};
