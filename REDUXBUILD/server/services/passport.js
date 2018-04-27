const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys.js");
const User = mongoose.model("users");

module.exports = app => {
  // =========================================================================
  // passport session setup ==================================================
  // =========================================================================
  // required for persistent login sessions
  // passport needs ability to serialize and unserialize users out of session

  // used to serialize the user for the session
  passport.serializeUser((user, done) => {
    done(null, user.id);
  }); //         │
  //             │
  //             └───────────┬───→ saved to req.session.passport.user = {id:'?'}
  //                         │
  //                         ↓
  passport.deserializeUser((id, done) => {
    //             ┌─────────┘
    //             │
    User.findById(id).then(user => {
      done(null, user);
      //          └──────────────>user object attaches to the request as req.user
    });
  });

  passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: "/auth/google/callback",
        proxy: true
      },
      async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({ googleId: profile.id });

        if (existingUser) {
          return done(null, existingUser);
        }

        const user = await new User({ googleId: profile.id }).save();
        done(null, user);
      }
    )
  );
};
