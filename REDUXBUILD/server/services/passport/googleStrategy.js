const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const User = mongoose.model("users");

module.exports = (app = null, keys) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: "/auth/google/callback",
        proxy: true
      },
      async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({ googleId: profile.id }); //-=-=-=-=-=-=-=-=-= User

        if (existingUser) {
          return done(null, existingUser);
        }

        const user = await new User({ googleId: profile.id }).save(); // -=-=-=-=-=-=-=-=-=-=-= User
        done(null, user);
      }
    )
  );
};
