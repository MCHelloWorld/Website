module.exports = (app, keys = null) => {
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    console.log("req.user".info, req.user);
    res.send(req.user);
  });
};
