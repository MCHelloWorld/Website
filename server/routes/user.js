var mysql = require("mysql");
var bcrypt = require("bcrypt");
var connection = require("./connection");

// Updating a user's profile information
exports.edit = function(req, res) {
  //bcrypt.hash(req.body.password, 5, function(err, bcryptedPassword) {
  var payload = {};
  var email = req.body.email;

  // Generates salt-rounded password
  if (req.body.hasOwnProperty("password")) {
    var salt = bcrypt.genSaltSync(5);
    var hashed = bcrypt.hashSync(req.body.password, salt);
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
  if (getSession(req)) {
    res.send({ session: "valid" });
  }
  var today = new Date();
  bcrypt.hash(req.body.password, 5, function(err, bcryptedPassword) {
    var users = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      username: req.body.email.substring(0, 6),
      hash: bcryptedPassword,
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
        initSession(req, email, next);
        res.send({
          code: 200,
          success: "user registered sucessfully"
        });
      }
    });
  });
};
// Eventually .login will be exported from this file instead of loginroutes.js
exports.login = (req, res) => {
  var email = req.body.email;
  var password = req.body.password;

  userId = session.getSession(req);
  if (userId > -1) {
    res.send({
      session: "valid"
    });
  } else {
    connection.query(
      "Select * from User where email = ? AND hash = ?",
      { email, password },
      function(error, results, fields) {
        compare = true; //bcrypt.compare(results[0].hash, password);
        if (error) {
          console.log("error ocurred", error);
          res.send({
            code: 400,
            failed: "error ocurred"
          });
        } else {
          initSession(req, email, next);
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
  }
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
