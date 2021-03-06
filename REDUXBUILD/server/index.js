// server/index.js
// sets up the express server to handle the backend controller work

const express = require("express");
const app = express();

const keys = require("./config/keys"),
  services = require("./services"),
  routes = require("./routes"),
  controllers = require("./controllers");

services(app, keys);
routes(app, keys);
controllers(app, keys);

app.listen(process.env.PORT || 5000 + 1);
