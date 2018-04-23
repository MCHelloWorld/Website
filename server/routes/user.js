var mysql = require("mysql");
var connection = require("./connection");
const CryptoJS = require("crypto-js");
const sessionUtils = require("./session");
const CryptoKey = "kd2iewGN3Q9PGV8HNQ3G";
// Updating a user's profile information
exports.edit = function(req, res) {
  //bcrypt.hash(req.body.password, 5, function(err, bcryptedPassword) {
  var payload = {};
  var email = req.body.email;

  // Generates salt-rounded password
  if (req.body.hasOwnProperty("password")) {
    var hashed = CryptoJS.AES.encrypt(req.body.password, passCrypto);
    payload.hash = hashed;
  }
  if (req.body.hasOwnProperty("first_name"))
    payload.first_name = req.body.first_name;
  if (req.body.hasOwnProperty("last_name"))
    payload.last_name = req.body.last_name;
  if (req.body.hasOwnProperty("bio")) payload.bio = req.body.bio;
  payload.modified = new Date();

  var emailStr = ' WHERE email = "' + email + '"';
  // Select from the database where the email is the value delivered by payload
  connection.query("SELECT * FROM user WHERE email = ?", email, function(
    error,
    results,
    fields
  ) {
    console.log(results.length);
    if (results.length > 0) {
      var str = "UPDATE user SET ?" + emailStr;
      // Updates row in the database
      connection.query(str, payload, function(error, results, fields) {
        if (error) {
          console.log(error);
        } else {
          res.send({
            code: 100,
            success: "Success!",
            returned: payload
          });
        }
      });
    }
  });
};

exports.register = function(req, res) {
  // console.log("req",req.body);

  var hash = CryptoJS.AES.encrypt(password, CryptoKey);

  if (sessionUtils.getSession(req)) {
    res.send({ session: "valid" });
  }
  var today = new Date();
var email = req.body.email;
    var users = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: email,
      username: req.body.email.substring(0, 6),
      hash: hash,
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
        sessionUtils.initSession(req, email, next);
        res.send({
          code: 200,
          success: "user registered sucessfully"
        });
      }
    });

};
// Eventually .login will be exported from this file instead of loginroutes.js
exports.login = (req, res,next) => {
  var email = req.body.email;
  var password = req.body.password;
  var hash = CryptoJS.AES.encrypt(password, CryptoKey);

  userId = sessionUtils.getSession(req,res,next);
  /**if (userId > -1) {
    res.send({
      session: "valid"
    });
  } else {**/
  console.log(email + " " + password + " " +hash);
    connection.query(
      "Select * from user where email = ? AND hash = ?",
      [ email, hash ],
      function(error, results, fields) {
        compare = true; //bcrypt.compare(results[0].hash, password);
        if (error) {
          console.log("error ocurred", error);
          res.send({
            code: 400,
            failed: "error ocurred"
          });
        } else {
          console.log("The solution is: ", results);
          sessionUtils.initSession(req,res, email,next);
          console.log("The solution is: ", results);
          res.send({    // Sends back user's information for use in the React components
            code: 200,
            success: "user registered sucessfully",
            session: "valid",
            first_name: results[0].first_name,
            last_name: results[0].last_name,
            email: results[0].email,
            username: results[0].username,
            profile_pic: results[0].url,
            is_admin: results[0].is_admin
          });
        }
      }
    );
    //}
  //}
};

// Function to get a user's data based on an email
exports.getUser = email => {
  connection.query("Select * from User where email=?", { email }, function(
    error,
    results,
    fields
  ) {
    compare = true; //bcrypt.compare(results[0].hash, password);
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
        success: "user registered sucessfully",
        session: "valid",
        first_name: results[0].first_name,
        last_name: results[0].last_name,
        email: results[0].email,
        username: results[0].username,
        profile_pic: results[0].url,
        is_admin: results[0].is_admin
      });
    }
  });
};
