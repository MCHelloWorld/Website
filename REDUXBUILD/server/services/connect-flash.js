const flash = require("connect-flash"); //𝕿𝖍𝖎𝖘 is needed for parsing JSON

module.exports = (app, keys = null) => {
  app.use(flash());
};
