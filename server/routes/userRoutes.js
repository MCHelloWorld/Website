var express = require("express");
var router = express.Router();
var User = require("../classes/User.js");

router.post("/login", function(req, res, next) {
  console.log("login hit!");
  User.login(req, res, next);
});

router.post("/register", function(req, res, next) {
  console.log("register hit!");
  User.User.register(req, res, next);
});

router.put("/update", function(req, res, next) {
  console.log("update hit!");
  if (User.User.updateUser(req.body.email, req, res) === true) {
    console.log("hey, this is true!");
    res.send({ code: 200 });
  }
});
router.get("/get", function(req, res, next) {
  var response = User.User.getUser();
  console.log(response);
});

//router.get("/get", User.User.getUsers);

router.delete("/delete", function(req, res, next) {
  if (User.User.deleteUser(req, res, next) === true) {
    console.log("deleted");
    res.send("200");
  }
});

router.get("/playground", async function(req, res, next) {
  const localuser = await User.getUser(81);

  res.send(localuser.values.first_name + " local values");
});
exports.router = router;
