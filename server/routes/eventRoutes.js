const Event = require("../classes/Event.js");
var express = require("express");
var router = express.Router();

router.get("/getevents", async function(req, res, next) {
  console.log("register hit!");
  //this will catch any errors that buttble up from the database if there isn an error.
  //if the romise is rejectes, it will be caught.
  try {
    var events = await Event.getEvents(3);
    res.send({
      data: events,
      success: true,
      code: 200,
      error: false
    });
  } catch (error) {
    res.send({
      success: false,
      message: "there was an error",
      error: "error",
      code: 200
    });
  }
});

router.put("/update", function(req, res, next) {
  var event = Event.getEvent(1);
  event.update({ event_name: "this is the new event_name" });
});

router.delete("/delete", function(req, res, next) {
  var event = Event.getEvent(1);
  event.delete();
});
exports.router = router;
