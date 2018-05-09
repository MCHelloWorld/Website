const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

module.exports = (app, keys) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: "/auth/google/callback",
        proxy: true
      },
      (accessToken, refreshToken, profile, done) => {
        // same as function(accessToken, refreshToken, profile, done) { ... }

        app.connection.query(
          "SELECT * from user WHERE googleId = ?",
          [profile.id],
          (error, results, fields) => {
            if (error) throw error;

            // ★ if user already exists, stop executing and send that user
            if (results[0]) return done(null, results[0]);

            // ★ if user DOESN'T already exist, make a new account

            // DECLARE VARIABLES for the eventual use in the USER object
            var now = new Date(),
              first = profile.name.givenName,
              last = profile.name.familyName,
              email = profile.emails[0].value,
              usrnm = profile.displayName,
              googleId = profile.id,
              hash = "",
              created = now,
              modified = now;

            // CHECK VARIABLE LENGTH and make it smaller if necessary
            first_name = first.length > 20 ? first.substring(0, 20) : first;
            last_name = last.length > 20 ? last.substring(0, 20) : last;
            email = email.length > 20 ? email.substring(0, 45) : email;
            username = usrnm.length > 20 ? usrnm.substring(0, 20) : usrnm;

            // CREATE USER OBJECT
            var user = {
              first_name,
              last_name,
              email,
              username,
              googleId,
              hash,
              created,
              modified
            };

            app.connection.query(
              "INSERT INTO user SET ?",
              user,
              (error, results, fields) => {
                if (error) throw error;

                user.user_id = results.insertId;
                done(null, user);
              }
            );
          }
        );
      }
    )
  );
};
