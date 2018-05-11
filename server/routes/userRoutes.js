var express = require("express");
var router = express.Router();
var User = require("../classes/User.js");

/*/
var foo = async function() {
  try {
    var user = await User.getUser(80);
    console.log(user);
    await user.updateUser({ bio: "this is my new bio", is_admin: 0 });
  } catch (error) {
    console.log(error);
  }
};
foo();
// end testing **/
router.post("/login", function(req, res, next) {
  User.login(req, res, next);
});

router.post("/register", function(req, res, next) {
  console.log("register hit!");
  try {
    var userId = User.register(req, res, next);
    res.send({
      success: true,
      data: u
    });
  } catch (error) {}
});

router.put("/update", async function(req, res, next) {
  var user = await User.getUser(req.user);
  try {
    user.updateUser(req.body);
    res.send({
      success: true,
      data: null,
      error: null,
      code: 200,
      message: "Successfully updated information"
    });
  } catch (error) {
    console.debug("userRoutes/update error: " + error);
    res.send({
      success: false,
      data: null,
      error: "database connection error",
      code: 500,
      message: "There was an error, your information could not be updated"
    });
  }
});
router.get("/get", function(req, res, next) {
  var response = User.getUser(req.user);
  console.log(response);
});

router.delete("/delete", function(req, res, next) {
  if (User.deleteUser(req.user) === true) {
    console.log("deleted");
    res.send("200");
  }
});

router.get("/playground", async function(req, res, next) {
  const localuser = await User.getUser(81);

  res.send(localuser.values.first_name + " local values");
});
exports.router = router;
