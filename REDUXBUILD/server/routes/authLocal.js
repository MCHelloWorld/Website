const passport = require("passport");

module.exports = (app, keys = null) => {
  /*
  app.post(
    "/auth/local_login",
    passport.authenticate("local-login", {
      failureFlash: true, // optional, see text as well
      passReqToCallback: true
    })
  );
  /*/
  app.post("/auth/local_login", function(req, res, next) {
    passport.authenticate("local-login", function(err, user, info) {
      if (err) {
        console.debug("error block info", info);
        return next(err);
      }
      // Generate a JSON response reflecting authentication status
      console.debug("user", user);

      if (!user) {
        return res.send({
          success: false,
          message: "Invalid Email or Password."
        });
      }

      // ***********************************************************************
      // "Note that when using a custom callback, it becomes the application's
      // responsibility to establish a session (by calling req.login()) and send
      // a response."
      // Source: http://passportjs.org/docs
      // ***********************************************************************
      req.login(user, loginErr => {
        if (loginErr) return next(loginErr);
        return res.send({ success: true, message: "authentication succeeded" });
      });
    })(req, res, next);
  });
  //*/
};
