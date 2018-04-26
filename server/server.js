const express = require("express");
const login = require("./routes/loginroutes");
const special = require("./routes/special");
const bodyParser = require("body-parser");
const user = require("./routes/user.js");
const User = require("./classes/User.js");
const cookieSession = require("cookie-session");
const CryptoJS = require("crypto-js");
const userRoutes = require("./routes/userRoutes.js");
//this allows for cross-origin scripting
const cors = require("cors");
const sessionUtils = require("./routes/session.js");

var rp = require("request-promise");

app = express();
//app.private =  require("./private_config.js");
//establish an express routing app and assign it's url interpretation properties.
app.use(bodyParser.urlencoded({ extended: true })); // QUESTION: What is body parser for? ~James ANSWER: I dunno, but the tutorial said we needed it. ~ Josh
app.use(bodyParser.json());

/*app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,Request-Headers,Request-Method"
  );
  res.header("Access-Control-Expose-Headers","ETag,Link,X-RateLimit-Limit,X-RateLimit-Remaining, X-RateLimit-Reset, X-0Auth-Scopes, X-Accepted-0Auth-Scopes,X-Poll-Interval");
  next();
});*/

// Initializes session object with parameters

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
/*app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', "*");
  next();
});*/

// Creates express router which handles API requests
var router = express.Router();
var corsOptions = {
  origin: true
};

//route to handle user registration

router.post("/special", special.special); // for testing and debugging
router.post("/user/edit", user.edit); // editing profile information
// router.post("/user/images", user.images); //Importing profile pictures
router.post("/user/status", function(req, res) {
  // determines if a user is logged in
  if (!req.session.user) {
    return res.status(401).send();
    /* If user is not logged in, then send Unauthorized 401 error */
  }

  return res.status(200).send("Welcome to Super Secret API");
  /* Otherwise go to the super long API */
});

router.post("/session", function(req, res) {
  req.session.user = req.body.user;
  req.session.pass = req.body.user;
});

/* ==========================================================================
   | So the below app.use(blahblah... will print the session info when-
   | ever localhost:5000 is curl'd (as in: curl localhost:5000 )
   ========================================================================== */

/**app.get("/", function initViewsCount(req, res, next) {
  console.log(req.sessionOptions.maxAge);
  if (typeof req.session.views === "undefined") {
    req.session.views = 0;
    return res.end("Welcome to the file session demo. Refresh page!");
  }
  return next();
});*
app.get("/", function incrementViewsCount(req, res, next) {
  console.assert(
    typeof req.session.views === "number",
    "missing views count in the session",
    req.session
  );
  req.session.views++;
  return next();
});
**/
//prints current session to the console
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

app.use("/api/user", userRoutes.router);
app.listen(5000);
