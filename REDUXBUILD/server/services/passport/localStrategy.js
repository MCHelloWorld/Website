const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const CryptoJS = require("crypto-js");

module.exports = (app, keys) => {
  const authOpts = {
    usernameField: "username",
    passwordField: "password"
  };

  passport.use(
    "local-login",
    new LocalStrategy(authOpts, async (username, password, done) => {
      var myUser = {
        id: "5ada1a9ad3d3c82faabd70ee",
        username: "admin1@messiah.edu",
        password: "KgeFPwNvpkmluLGc59d7",
        displayName: "Jack",
        emails: [{ value: "jack@example.com" }]
      };

      const sql = "SELECT * FROM user WHERE email = ?";

      await app.connection.query(sql, [username], (err, results, fields) => {
        // Helper Assignments
        row = results[0];

        // Error Checking
        if (err) return done(null, false, { message: "failure message" });
        if (row === undefined)
          return done(null, false, { message: "failure message" });

        // Decrypt password
        var decryptedBytes = CryptoJS.AES.decrypt(row.hash, keys.cryptoKey);
        var decryptedPass = decryptedBytes.toString(CryptoJS.enc.Utf8);

        // Check password equivalence
        if (decryptedPass != password) return done("no match", false);

        return done(null, myUser);
      });
    })
  );
};
