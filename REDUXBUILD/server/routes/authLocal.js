const passport = require("passport");

module.exports = (app, keys = null) => {
  app.post(
    "/auth/local_login",
    passport.authenticate("local-login", {
      successRedirect: "/success",
      failureRedirect: "/failure", // see text
      failureFlash: true // optional, see text as well
    })
  );
  /*
  app.post("/auth/local_signup", function(req, res, next) {
    passport.authenticate("local", function(err, user, info) {
      if (err) {
        console.log("info", info);
        return next(err); // will generate a 500 error
      }
      // Generate a JSON response reflecting authentication status
      console.log("user", user);

      if (!user) {
        return res.send({ success: false, message: "authentication failed" });
      }

      // ***********************************************************************
      // "Note that when using a custom callback, it becomes the application's
      // responsibility to establish a session (by calling req.login()) and send
      // a response."
      // Source: http://passportjs.org/docs
      // ***********************************************************************
      req.login(user, loginErr => {
        if (loginErr) {
          return next(loginErr);
        }
        return res.send({ success: true, message: "authentication succeeded" });
      });
    })(req, res, next);
  });
  //*/
};
