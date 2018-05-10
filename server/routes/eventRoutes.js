const Event = require("../classes/Event.js");
var express = require("express");
var router = express.Router();

///testing
var func = async function() {
  var event = Event.getEvents(3);
  console.log(event);
};
func();

// **/
router.post("/getevents", async function(req, res, next) {
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
      success: true,
      message: "there was an error",
      error: "error",
      code: 200
    });
  }
  res.send({
    data: events,
    success: true
  });
});

router.put("/update", function(req, res, next) {});

router.get("/get", function(req, res, next) {
  Event.event.getEvents(req.body.event_id);
});

router.delete("/delete", function(req, res, next) {
  Event.event.deleteEvent(req.body.event_id);
});
exports.router = router;
