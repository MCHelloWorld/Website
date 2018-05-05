//const connection = require("../routes/connection.js");
const sessionUtils = require("../routes/session.js");
const CryptoJS = require("crypto-js");
const deasync = require("deasync");
const cp = require("child_process");
const connection = require("../utils/deasyncSQL.js");
var exec = deasync(cp.exec);
var CryptoKey = "kd2iewGN3Q9PGV8HNQ3G";
class User {
  constructor(values) {
    this.values = {};
    for (var i; i < values.length; i++) {
      constrcutor.values;
    }
  }

  async initialize(id) {
    var send = null;
    var back = null;
    var lthis = this;
    console.log("initialize hit");
    var received = await connection("Select * from user where user_id = ?", [
      id
    ]);
    this.values = received[0];
    this.test = "test";

    console.log(received[0] + "recieved from the database");
    console.log(typeof this);
  }
  //requires an array of values
  static async getUser(id) {
    var conn = null;

    conn = await connection("SELECT * FROM user WHERE user_id = ?", [id]);
    console.log("conn=" + conn);
    return conn;
  }

  static updateUser(email, req, res) {
    var updates = req.body;
    var fields = "";
    var name = "";
    var counter = 0;
    var commas = "";
    for (var key in updates) {
      if (counter > 0) {
        commas = ",";
      }
      name = key;
      if (key == "password") {
        name = "hash";
      }
      fields += commas + name + "=" + connection.escape(updates[key]);

      counter++;
    }
    console.log(fields);
    var result = null;
    connection.query(
      "UPDATE user SET " + fields + " WHERE email = '" + email + "' ",
      [],
      function(error, results, fields) {
        if (error) {
          console.log("error ocurred", error);
          result = error;
          res.send({ code: 400 });
        } else {
          res.send({ code: 200 });
        }
      }
    );
  }
  updateFirstName(newName) {
    this.updateUser({ first_name: newName });
  }

  static deleteUser(req) {
    connection.query(
      "DELETE FROM user WHERE email = ? ",
      [this.user_id],
      function(error, results, fields) {
        if (error) {
          console.log("error ocurred", error);
          return error;
        } else {
          return true;
        }
      }
    );
  }
  static login(req, res, next) {
    console.log("<Login hit>");
    var email = req.body.email;
    var password = req.body.password;

    //hash = "111111";
    //var userId = sess ionUtils.getSession(req, res, next);
    /**if (userId > -1) {
      res.send({
        session: "valid"
      });/
    } else {**/

    connection.query("Select * from user where email = ?", [email], function(
      error,
      results,
      fields
    ) {
      if (error) {
        console.log("error ocurred", error);
        if ((error = "ER_DUP_ENTRY")) {
          res.send({
            code: 204
          });
        }
      } else if (results[0] != null) {
        var cPassword = CryptoJS.AES.decrypt(results[0].hash, CryptoKey);
        var dPassword = cPassword.toString(CryptoJS.enc.Utf8);
        console.log(
          "the dpassword is: " + dPassword + " and the password is: " + password
        );
        if (dPassword == password) {
          sessionUtils.initSession(req, res, email, next);

          res.send({
            // Sends back user's information  for use in the React components
            code: 200,
            success: "user registered sucessfully",
            session: "valid",
            first: results[0].first_name,
            last: results[0].last_name,
            email: results[0].email,
            username: results[0].username,
            pic: results[0].url,
            admin: results[0].is_admin,
            bio: results[0].bio
          });
          return true;
        } else {
          res.send({ code: 401 });
        }
      } else {
        res.send({
          code: 401
        });
      }
    });
    //}
    //}
  }
  static register(req, res, next) {
    // console.log("req",req.body);

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
  }
}

//user.update({first_name:"Hi, I have been changed"});
/*
(async () => {
  console.log(
    "this is a value: the last thing that should show up",
    await user.values
  );
})();//*/
//console.log("this is a value: the last thing that should show up", user.values);
exports.User = User;
exports.userobject = async function(id) {
  return await new User(id);
};
