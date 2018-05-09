// server/services/index.js
// compiles the various backend services into a single file

module.exports = (app, keys) => {
  require("./colors")(null, null);

  require("./bodyParser")(app, null);

  require("./cookieSession")(app, keys);

  require("./mongoose")(null, keys);

  require("./mySQL")(app, keys);

  require("./passport")(app, keys);
};
