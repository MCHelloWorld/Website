const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
// server/services/index.js
// compiles the various backend services into a single file
module.exports = app => {
  require("./passport")(app);
  require("./cookieSession")(app);
};
// NOTE: THIS SEEMED ELEGENT AT THE TIME. HOWEEVER, THIS MAY NEED TO BE ALTERED
//       LATER DUE THE FACT THAT SOME SERVICES CODE AND ROUTES CODE MAY NEED TO
//       BE LOADED INTERSPERSEDLY BETWEEN EACH OTHER. DOING EACH RESPECTIVELY
//       ALL IN ONE GO MIGHT NOT WORK IN THE FUTURE.
