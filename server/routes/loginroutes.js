var mysql = require("mysql");
var connection = require("./connection");
const CryptoJS = require("crypto-js");
const passCrypto = "gjkogjkdfghiadogre0aionf08430nierohr0v@0f0";

// Runs when a user regsiters a new profile
exports.register = function(req, res) {
  // console.log("req",req.body);
  var today = new Date();
  var encryptedPassword = CryptoJS.AES.encrypt(req.body.password, passCrypto);
  var users = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    username: req.body.email.substring(0, 6),
    hash: encryptedPassword,
    created: today,
    modified: today
  };
  connection.query("INSERT INTO user SET ?", users, function(
    error,
    results,
    fields
  ) {
    if (error) {
      console.log("error ocurred", error);
      res.send({
        code: 400,
        failed: "error ocurred"
      });
    } else {
      console.log("The solution is: ", results);
      res.send({
        code: 200,
        success: "user registered sucessfully"
      });
    }
  });
};

exports.login = function(req, res) {
  var email = req.body.email;
  var password = req.body.password;
  connection.query("SELECT * FROM user WHERE email = ?", [email], function(
    error,
    results,
    fields
  ) {
    if (error) {
      // console.log("error ocurred",error);
      res.send({
        code: 400,
        failed: "error ocurred"
      });
    } else {
      console.log(results.length);
      // console.log('The solution is: ', results);
      if (results.length > 0) {
        var bytes = CryptoJS.AES.decrypt(results[0].hash, passCrypto);
        var decrypted = bytes.toString(CryptoJS.enc.Utf8);
        console.log(password);
        console.log(decrypted)
        if (password === decrypted) {
          res.send({
            code: 200,
            success: "Login Successful",
            username: results[0].username,
            first: results[0].first_name,
            last: results[0].last_name,
            email: results[0].email,
            bio: results[0].bio,
            pic: results[0].picture_url,
            admin: results[0].is_admin
          });
          console.log(results[0].picture_url);
        } else {
          res.send({
            code: 204,
            success: "Email and password does not match."
          });
        }
      } else {
        res.send({
          code: 204,
          success: "Email does not exist"
        });
      }
    }
  });
};


function saveSession(username, password) {
  req.session.user = username;
  req.session.pass = password;
}
