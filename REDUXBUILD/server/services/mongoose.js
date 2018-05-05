const mongoose = require("mongoose"); //𝕿𝖍𝖎𝖘 is needed for the database

module.exports = (app = null, keys) => {
  //𝕿𝖍𝖎𝖘 connects to the mongodb database
  require("../models/User");
  mongoose.connect(keys.mongoURI);
};
