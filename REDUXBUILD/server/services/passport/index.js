module.exports = (app, keys) => {
  require("./serialization")(null, null);
  require("./googleStrategy")(null, keys);
  require("./localStrategy")(app, keys);
};
