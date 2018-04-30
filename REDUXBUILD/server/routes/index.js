// server/routes/index.js
// compiles the various backend routes into a single file

module.exports = app => {
  require("./apiStatus")(app);
  require("./authGoogle")(app);
};
