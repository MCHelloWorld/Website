const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const CryptoJS = require("crypto-js");

module.exports = (app, keys) => {
  const authOpts = {
    usernameField: "email",
    passwordField: "password"
  };

  passport.use(
    "local-login",
    new LocalStrategy(authOpts, async (email, password, done) => {
      var myUser = {};
      var user = {
        id: "5ada1a9ad3d3c82faabd70ee",
        username: "admin1@messiah.edu",
        password: "KgeFPwNvpkmluLGc59d7",
        displayName: "Jack",
        emails: [{ value: "jack@example.com" }]
      };

      const sql = "SELECT * FROM user WHERE email = ?";

      app.connection.query(sql, [email], (err, results, fields) => {
        // Helper Assignments
        row = results[0];

        // Error Checking
        if (err) return done(null, false);
        if (row === undefined) return done(null, false);

        // Decrypt password
        var decryptedBytes = CryptoJS.AES.decrypt(row.hash, keys.cryptoKey);
        var decryptedPass = decryptedBytes.toString(CryptoJS.enc.Utf8);

        // Check password equivalence
        if (decryptedPass != password) return done(null, false);

        for (var i in row) myUser[i] = row[i];

        return done(null, myUser);
      });
    })
  );
};
