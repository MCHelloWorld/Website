// server/routes/index.js
// compiles the various backend routes into a single file

module.exports = (app, keys) => {
  require("./apiStatus")(app, null);
  require("./authGoogle")(app, null);
  require("./authLocal")(app, keys);
};
