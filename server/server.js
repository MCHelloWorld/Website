// Server.js handles all routing of our API requests, using
// the Express router package.

const express = require("express");

const special = require("./routes/special");
const bodyParser = require("body-parser");

const User = require("./classes/User.js");
const cookieSession = require("cookie-session");
const CryptoJS = require("crypto-js");

//specify routing files
const userRoutes = require("./routes/userRoutes.js");
const eventRoutes = require("./routes/eventRoutes.js");
//this allows for cross-origin scripting
const cors = require("cors");

const fileUpload = require("express-fileUpload");
const sessionUtils = require("./routes/session.js");

var rp = require("request-promise");

app = express();

//app.private =  require("./private_config.js");
//establish an express routing app and assign it's url interpretation properties.
app.use(bodyParser.urlencoded({ extended: true })); // BodyParser: Allows us to parse JSON data in get and post requests
app.use(bodyParser.json());

app.use(
  cookieSession({
    name: "server-session-cookie-hwcsc",
    secret: "E3cHjHM349sGXRj4KFPsW3dd",
    resave: false,
    saveUninitialized: true,
    maxAge: 600000000
  })
);

var options = {
  origin: true,
  methods: ["POST", "PUT", "GET", "DELETE", "OPTIONS"],
  credentials: true,
  maxAge: 3600000
};
app.use(cors(options));

var router = express.Router();
var corsOptions = {
  origin: true
};

//route to handle user registration

//router.post("/special", special.special); // for testing and debugging
//router.post("/user/edit", user.edit); // editing profile information

//router.post("/login", function(req, res, next) {
// Route to handle login
//  console.log("login hit!");
//  user.login(req, res, next);
//});
router.post("/special", special.special); // for testing and debugging
//router.post("/user/edit", user.edit); // Route for editing profile information
//router.post("/user/images", user.images); // Importing profile pictures. Currently not functional
/*router.post("/user/status", function(req, res) {
  // API that determines if a user is logged in

  if (!req.session.user) {
    return res.status(401).send(); // If user is not logged in, then send Unauthorized 401 error.
  }

  return res.status(200).send("Welcome to Super Secret API"); // Otherwise go to the super long API
});*/

router.post("/session", function(req, res) {
  req.session.user = req.body.user;
  req.session.pass = req.body.user;
});

/* ==========================================================================
   | So the below app.use(blahblah... will print the session info when-
   | ever localhost:5000 is curl'd (as in: curl localhost:5000 )
   ========================================================================== */

app.use(function printSession(req, res, next) {
  console.log("req.session: ", req.session);
  console.log("req.body: ", req.body);

  next();
});
app.get("/", function sendPageWithCounter(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.write("<p>views: " + req.session.views + "</p>\n");
  res.write("<p>expires in: " + req.sessionOptions.maxAge / 1000 + "s</p>");
  res.end();
});
//route api calls to proper router files
app.use("/api/event", eventRoutes.router);
app.use("/api/user", userRoutes.router);
app.listen(5000);
