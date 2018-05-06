// server/services/passport/serialization.js
// required for persistent login sessions

const passport = require("passport");
const mongoose = require("mongoose");
const User = mongoose.model("users");
const Promise = require("bluebird");

// passport needs ability to serialize and unserialize users out of session
module.exports = (app, keys = null) => {
  passport.serializeUser((user, done) => {
    done(null, user.user_id);
  });

  passport.deserializeUser(async (id, done) => {
    //console.log("typeof User.findById(id)", typeof User.findById(id));
    //var user = await User.findById(id);
    var user = {};

    app.connection.query(
      "SELECT * from user WHERE user_id = ?",
      [id],
      (error, results, fields) => {
        if (error) throw error;
        var row = results[0];

        console.log("The solution is: ", row);
        for (var i in row) user[i] = row[i];
        console.log(user);

        done(null, user);
      }
    );
  });
};
