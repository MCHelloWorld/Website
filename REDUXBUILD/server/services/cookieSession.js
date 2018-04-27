const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("../config/keys");

module.exports = app => {
  app.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [keys.cookieKey] // used to sign/encrypt our cookie
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
};
