module.exports = (app, keys) => {
  require("./serialization")(app, null);
  require("./googleStrategy")(app, keys);
  require("./localStrategy")(app, keys);
};
