const connection = require("../routes/connection.js");
const sessionUtils = require("../routes/session.js");
const CryptoJS = require("crypto-js");
const deasync = require("deasync");
const cp = require("child_process");
var exec = deasync(cp.exec);
var CryptoKey = "kd2iewGN3Q9PGV8HNQ3G";
class User {
  constructor(id) {
    var id = id;
    this.values = {};
    this.initialize(id);
  }
  init(id) {
    return this.initialize(id);
  }
  async initialize(id) {
    var send = null;
    var back = null;

    connection.query("Select * from user where user_id = ?", [id], function(
      error,
      results,
      fields
    ) {
      if (error) {
        console.log("error ocurred", error);
      } else if (results[0] != null) {
        this.values = results[0];
      }
    });

    /*  return await resolveAfter2Seconds();
    async function resolveAfter2Seconds() {
      return await new Promise(resolve => {
        setTimeout(() => {
          resolve("resolved");
        }, 2000);
      });
    }
    //TODO: modify with better synchronous functions
    /**SyncFunction();
    function SyncFunction() {
      var ret;
      setTimeout(function() {
        ret = "hey";
        console.log("looping");
      }, 3000);
      while (query instanceof Promise) {
        require("deasync").sleep(100);
      }
      // returns hello with sleep; undefined without
      return query;
    }

    /*======

     paste this block to test await within

     an async function

     ======*

    function resolveAfter2Seconds() {

    }

    console.log("calling");

    var result = await resolveAfter2Seconds();

    console.log(result);

    // expected output: "resolved"

    /*======*/
  }
  //requires an array of values
  getUsers(ids) {
    var values = "";
    var counter = 0;
    var setOr = "";

    for (var key in ids) {
      if (counter > 0) {
        setOr = "OR";
      }

      values += setOr + ids[key];
    }
    connection.query("Select * from user where user_id = ?", [id], function(
      error,
      results,
      fields
    ) {
      if (error) {
        console.log("error ocurred", error);
      } else if (results[0] != null) {
        this.values = results[0];
      }
    });
  }
  updateUser(email, req, res) {
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

  deleteUser(id) {
    connection.query(
      "DELETE FROM user WHERE user_id = ? ",
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
  login(req, res, next) {
    console.log("<Login hit>");
    var email = req.body.email;
    var password = req.body.password;

    //hash = "111111";
    var userId = sessionUtils.getSession(req, res, next);
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
        var dPassword = CryptoJS.AES.decrypt(
          results[0].hash,
          CryptoKey
        ).toString(CryptoJS.enc.Utf8);
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
  register(req, res, next) {
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

exports.user = new User(17);
