// server/services/passport/serialization.js
// required for persistent login sessions

const passport = require("passport");
const mongoose = require("mongoose");
const User = mongoose.model("users");

// passport needs ability to serialize and unserialize users out of session
module.exports = (app = null, keys = null) => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id).then(user => done(null, user));
  });
};
