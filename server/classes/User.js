//const connection = require("../routes/connection.js");
const sessionUtils = require("../routes/session.js");
const CryptoJS = require("crypto-js");
const deasync = require("deasync");
const cp = require("child_process");
const MySQL = require("Mysql");
const query = require("../utils/deasyncSQL.js");
var exec = deasync(cp.exec);
var CryptoKey = "kd2iewGN3Q9PGV8HNQ3G";
const Entity = require("./Entity.js");

var aconnection = MySQL.createConnection({
  host: "153.42.31.18",
  user: "helloadmin",
  password: "h3llo3ar7h",
  database: "helloworld",
  port: 3306
});

class User extends Entity {
  /**
constructor acceps a values object
This will be appended to user.values
  */
  constructor(values) {
    super("user", values.user_id);
    this.values = values;
    this.test = "test";
    console.log("values hit" + this.values.first_name);
  }

  /**
  searches the database for a user based on the given Id
  */
  static async getUser(id) {
    var values = super.get(id);
    return new User(values);
  }
  /*
Dynamically updates the database with given key-value pairs in an object
the keys must be equal to the database fields.
fields - obj - key-value pairs with which to update the database
*/
  async updateUser(fields) {
    return await super.update(fields);
  }

  async updateFirstName(newName) {
    return await this.updateUser({ first_name: newName });
  }

  async delete() {
    return await super.deleteRow();
  }
  //we could get away with classic callbacks for this function since we're technically not initializing a user object
  static login(req, res, next) {
    var email = req.body.email;
    var password = req.body.password;
    aconnection.query("Select * from user where email = ?", [email], function(
      error,
      results,
      fields
    ) {
      if (error) {
        console.debug("", error);
        res.send({
          success: true,
          data: null,
          error: "database error",
          message: "There was an error. You cannot log in at this time",
          code: 500
        });
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
  static async register(req, res, next) {
    // console.log("req",req.body);

    var hash = CryptoJS.AES.encrypt(req.body.password, CryptoKey);

    if (sessionUtils.getSession(req)) {
      res.send({
        success: true,
        data: req.session.user,
        code: 200,
        error: false,
        message: "You are already logged in!"
      });
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
    try {
      await query("INSERT INTO user SET ?", users);

      sessionUtils.initSession(req, res, email, next);
      res.send({
        code: 200,
        success: true,
        data: { id: results.insertid },
        message: "successful user registry"
      });
    } catch (error) {
      res.send({
        code: 200,
        success: false
      });
    }
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
module.exports = User;
