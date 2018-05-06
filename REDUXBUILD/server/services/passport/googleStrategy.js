const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const User = mongoose.model("users");

module.exports = (app, keys) => {
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

        app.connection.query(
          "SELECT * from user WHERE googleId = ?",
          [googleId],
          (error, results, fields) => {
            if (error) throw error;

            var row = results[0];

            for (var k in row) myUser[k] = row[k];
          }
        );

        const user = await new User({ googleId: profile.id }).save(); // -=-=-=-=-=-=-=-=-=-=-= User
        done(null, user);
      }
    )
  );
};
