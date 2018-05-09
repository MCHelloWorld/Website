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
      (accessToken, refreshToken, profile, done) => {
        //const existingUser = await User.findOne({ googleId: profile.id }); //-=-=-=-=-=-=-=-=-= User
        //
        const sql = "SELECT * from user WHERE googleId = ?";
        /*** * * * * * * *
         * FIND THE USER *
         * * * * * * * * */
        app.connection.query(sql, [profile.id], (error, results, fields) => {
          if (error) throw error;

          // if user already exists, stop executing and send that user
          if (results[0]) return done(null, results[0]);

          // if user DOESN'T already exist, make a new account

          // DECLARE VARIABLES
          var now = new Date(),
            first = profile.name.givenName,
            last_name = profile.name.familyName,
            email = profile.emails[0].value,
            username = profile.displayName,
            googleId = profile.id,
            hash = "",
            created = now,
            modified = now;

          var shrink = (str, n) => str.substring(0, 20);

          // CHECK VARIABLE LENGTH
          first_name = first > 20 ? first.substring(0, 20) : first;
          last_name = last_name > 20 ? last_name.substring(0, 20) : last_name;
          email = email > 20 ? email.substring(0, 45) : email;
          username = username > 20 ? username.substring(0, 20) : username;
          console.log(last_name);
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
          // */
        });
      }
    )
  );
};

// OTHERWISE CREATE A NEW USER
/*
  var today = new Date();

  var users = {
    first_name: profile.name.givenName,
    last_name: profile.name.familyName,
    email: HEYYYYYYYY MANNNN YOUUU NEEED TO DEBUG THIS JUNK,
    username: profile.displayName,
    hash: null,
    created: today,
    modified: today
  }
  _json:
      { kind: 'plus#person',
        etag: '"RKS4-q7QGL10FxltAebpjqjKQR0/NgdmKpdos-Pp-R0rB2uSJawrZo0"',
        emails: [ [Object] ],
        objectType: 'person',
        id: '113992969331225066916',
        displayName: 'James Gelok',
        name: { familyName: 'Gelok', givenName: 'James' },
        url: 'https://plus.google.com/113992969331225066916',
        image:
         { url: 'https://lh6.googleusercontent.com/-vb-q2soCZo0/AAAAAAAAAAI/AAAAAAAAApQ/oV2uY4kpTw0/photo.jpg?sz=50',
           isDefault: false },
        isPlusUser: true,
        language: 'en',
        circledByCount: 5,
        verified: false,
        cover: { layout: 'banner', coverPhoto: [Object], coverInfo: [Object] } } }
        */
