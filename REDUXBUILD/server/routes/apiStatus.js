module.exports = app => {
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    console.log("apiStatus.js", "/api/current_user", req.user);
    res.send(req.user);
  });
};
