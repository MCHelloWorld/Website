const connection = require("../utils/deasyncSQL.js");
const sessionUtils = require("../routes/session.js");
const deasync = require("deasync");
const cp = require("child_process");
var exec = deasync(cp.exec);

class Event {
  constructor(values) {
    var id = id;
    g;
    this.values = {};
    this.initialize(id);
  }

  /**returns a list of events. will return events in DESC order
  by date
  num - int- the number of eveents you would lie returned
  */
  static async getEvents(num) {
    var num = num;
    var retEvents = null;
    var events = await connection(
      "SELECT * FROM events LIMIT ? ORDER BY data DESC",
      [num]
    );
    for (var i = 0; i < events.length; i++) {
      retEvents = events.push(events[i]);
    }
    return events;
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

module.exports = Event;
