// server/routes/index.js
// compiles the various backend routes into a single file

module.exports = (app, keys) => {
  require("./apiStatus")(app, null);
  require("./authGoogle")(app, null);
  require("./authLocal")(app, keys);

  app.get("/api/billy/", (req, res) => {
    console.log("apiStatus.js", "/api/current_user", req.user);
    res.send(req.url);
  });
};
