// server/index.js
// sets up the express server to handle the backend controller work
// ========================================================================== ~\
// REQUIRE DEPENDENCIES
// ========================================================================== /
const keys = require("./config/keys"); //𝕿𝖍𝖎𝖘 is needed for sensitive data
const express = require("express"); //𝕿𝖍𝖎𝖘 is needed to make the express server which will handle our middleware
const mongoose = require("mongoose"); //𝕿𝖍𝖎𝖘 is needed for the database
const cookieSession = require("cookie-session"); //𝕿𝖍𝖎𝖘 is needed for the sending cookies to the client
const passport = require("passport"); //𝕿𝖍𝖎𝖘 is needed for authentication
const CONFIG = require("./config");

// ========================================================================== ~\
// DATABASE, APP, SERVICES & ROUTES, AND LISTEN ON PORT
// ========================================================================== /
//𝕿𝖍𝖎𝖘 connects to the database
require("./models/User");
mongoose.connect(keys.mongoURI);

//𝕿𝖍𝖎𝖘 creates the express app
const app = express();

//𝕿𝖍𝖎𝖘 runs the code in services
require("./services")(app);
//𝕿𝖍𝖎𝖘 runs the code in routes
require("./routes")(app);

//𝕿𝖍𝖎𝖘 sets the PORT if available (else 5000), & listens the app on the PORT
const PORT = process.env.PORT || 5001;
app.listen(PORT);
//*/
//require("./localexample/server.js");
