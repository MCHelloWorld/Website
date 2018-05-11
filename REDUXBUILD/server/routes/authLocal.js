const passport = require("passport");
const crypto = require("crypto-js");

module.exports = (app, keys) => {
  app.post("/auth/local_signup", (req, res, next) => {
    var code, success, message;

    const passwords_match = req.body.password === req.body.password_confirm;

    if (!passwords_match) {
      code = 400;
      success = false;
      message = "Passwords do not match";

      console.log(message);
      return res.send({ code, success, message });
    }

    const { first_name, last_name, email } = req.body,
      username = email,
      now = new Date(),
      created = now,
      modified = now;

    const hash = crypto.AES.encrypt(
      req.body.password,
      keys.cryptoKey
    ).toString();

    const users = {
      first_name,
      last_name,
      email,
      username,
      hash,
      created,
      modified
    };

    app.connection.query(
      "INSERT INTO user SET ?",
      users,
      (error, results, fields) => {
        if (error) {
          code = 400;
          success = false;

          //Known errors
          if (error.code === "ER_DUP_ENTRY") {
            message = "This account already exists. Try logging in?";
          } else {
            message = "Error Ocurred. Please try again later.";
          }

          console.log(message.error, "\n", JSON.stringify(error).error);
          return res.send({ code, success, message });
        }

        code = 200;
        message = "User Registered Successfully";
        success = true;

        console.log(message.rainbow.underline);
        return res.send({ code, success, message });
      }
    );
  });

  app.post("/auth/local_login", (req, res, next) => {
    passport.authenticate("local-login", (err, user, info) => {
      if (err) {
        console.debug("error block info", info);
        return next(err);
      }

      // Generate a JSON response reflecting authentication status
      console.debug("user".info, user);

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
