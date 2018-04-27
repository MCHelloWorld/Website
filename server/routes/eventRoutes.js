const Event = require("../classes/Event.js");
var express = require("express");
var router = express.Router();

router.post("/getEvents", function(req, res, next) {
  console.log("register hit!");
  Event.event.register(req, res, next);
});

router.put("/update", function(req, res, next) {
  console.log("update hit!");
  if (Event.event.updateEvent(req.body.email, req, res) === true) {
    console.log("hey, this is true!");
    res.send({ code: 200 });
  }
});

router.get("/get", function(req, res, next) {
  Event.event.getEvents(req.body.event_id);
});

router.delete("/delete", function(req, res, next) {
  Event.event.deleteEvent(req.body.event_id);
});
exports.router = router;
