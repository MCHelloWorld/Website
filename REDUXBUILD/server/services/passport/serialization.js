// server/services/passport/serialization.js
// required for persistent login sessions

const passport = require("passport");

// passport needs ability to serialize and unserialize users out of session
module.exports = (app, keys = null) => {
  passport.serializeUser((user, done) => {
    done(null, user.user_id);
  });

  passport.deserializeUser(async (id, done) => {
    app.connection.query(
      "SELECT * from user WHERE user_id = ?",
      [id],
      (error, results, fields) => {
        if (error) throw error;
        var row = results[0];

        var user = {};
        for (var i in row) user[i] = row[i];

        done(null, user);
      }
    );
  });
};
