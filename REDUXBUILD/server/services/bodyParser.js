const bodyParser = require("body-parser"); //𝕿𝖍𝖎𝖘 is needed for parsing JSON

module.exports = (app, keys = null) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
};
