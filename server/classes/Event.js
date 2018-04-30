const connection = require("../routes/connection.js");
const sessionUtils = require("../routes/session.js");

const deasync = require("deasync");
const cp = require("child_process");
var exec = deasync(cp.exec);

class Event {
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

    connection.query("Select * from event where event_id = ?", [id], function(
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
  getEvents(ids) {
    var values = "";
    var counter = 0;
    var setOr = "";

    for (var key in ids) {
      if (counter > 0) {
        setOr = "OR";
      }

      values += setOr + ids[key];
    }
    connection.query("Select * from event where event_id = ?", [id], function(
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
  updateEvent(req, res) {
    var id = req.body.event_id;
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
      "UPDATE event SET " + fields + " WHERE event_id = '" + id + "' ",
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

  deleteEvent(id) {
    connection.query("DELETE FROM event WHERE event_id = ? ", [id], function(
      error,
      results,
      fields
    ) {
      if (error) {
        console.log("error ocurred", error);
        return error;
      } else {
        return true;
      }
    });
  }

  create(req, res, next) {
    // console.log("req",req.body);

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

exports.user = Event;
