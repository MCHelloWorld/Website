// user.js contains all of our critical APIs for login, registration,
// etc. Currently they all receive data from axios posts from our frontend
// JavaScript pages.
var mysql = require("mysql");
var connection = require("./connection");
const CryptoJS = require("crypto-js");
const sessionUtils = require("./session");
const cookieSession = require("cookie-session");
var CryptoKey = "kd2iewGN3Q9PGV8HNQ3G";

// Request for updating a user's profile information.
exports.edit = function(req, res) {
  var payload = {};

  // Generates salt-rounded password if necessary
  if (req.body.hasOwnProperty("password")) {
    var hashed = CryptoJS.AES.encrypt(req.body.password, passCrypto);
    payload.hash = hashed;
  }

  // If different elements of the payload are present, add them to the query field list
  if (req.body.hasOwnProperty("first_name"))
    payload.first_name = req.body.first_name;
  if (req.body.hasOwnProperty("last_name"))
    payload.last_name = req.body.last_name;
  if (req.body.hasOwnProperty("bio")) payload.bio = req.body.bio;
  payload.modified = new Date();

  // This is done to create a proper WHERE clause in our query.
  var emailStr = ' WHERE email = "' + req.body.email + '"';

  // Select from the database where the email is the value delivered by payload
  connection.query(
    "SELECT * FROM user WHERE email = ?",
    req.body.email,
    function(error, results, fields) {
      console.log(results.length);
      if (results.length > 0) {
        var str = "UPDATE user SET ?" + emailStr;
        // Updates row in the database
        connection.query(str, payload, function(error, results, fields) {
          if (error) {
            console.log(error);
          } else {
            res.send({
              code: 200,
              success: "Success!",
              returned: payload
            });
          }
        });
      }
    }
  );
};

// Request for new user registration. Creates new
// entry in the user table in our database.
exports.register = function(req, res, next) {
  var hash = CryptoJS.AES.encrypt(req.body.password, CryptoKey);

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
      sessionUtils.initSession(req, res, email, next);
      res.send({
        code: 200,
        success: "user registered sucessfully"
      });
    }
  });
};


// User login requests; checks database for entry matching the entered
// credentials.
exports.login = (req, res, next) => {
  var email = req.body.email;
  var password = req.body.password;
  var userId = sessionUtils.getSession(req, res, next);

  //hash = "111111";
  var userId = sessionUtils.getSession(req, res, next);

  connection.query("SELECT * FROM user WHERE email = ?", [email], function(
    error,
    results,
    fields
  ) {
    compare = true;
    if (error) {
      console.log("error ocurred", error);
      res.send({
        code: 400,
        failed: "error ocurred"
      });
    } else if (results[0] !== null) {
      var dPassword = CryptoJS.AES.decrypt(results[0].hash, CryptoKey).toString(
        CryptoJS.enc.Utf8
      );
      console.log(
        "the dpassword is: " + dPassword + " and the password is: " + password
      );
      if (dPassword == password) {
        sessionUtils.initSession(req, res, email, next);
        res.send({
          // Sends back user's information for use as props in the React components
          code: 200,
          success: "user logged sucessfully",
          session: "valid",
          first: results[0].first_name,
          last: results[0].last_name,
          email: results[0].email,
          username: results[0].username,
          pic: results[0].url,
          admin: results[0].is_admin,
          bio: results[0].bio
        });
      } else {
        res.send({ code: 401 });
      }
    } else {
      res.send({
        code: 401
      });
    }
  });
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
