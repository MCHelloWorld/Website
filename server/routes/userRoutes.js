const User = require("../classes/User.js");
var express = require("express");
var router = express.Router();

router.post("/login", function(req, res, next) {
  console.log("login hit!");
  User.user.login(req, res, next);
});

router.post("/register", function(req, res, next) {
  console.log("register hit!");
  User.user.register(req, res, next);
});

router.put("/update", function(req, res, next) {
  console.log("update hit!");
  if (User.user.updateUser(req.body.email, req, res) === true) {
    console.log("hey, this is true!");
    res.send({ code: 200 });
  }
});

router.get("/get", User.user.getUsers);

router.delete("/delete", User.user.deleteUser);
exports.router = router;
