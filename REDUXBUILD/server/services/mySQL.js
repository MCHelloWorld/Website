// server/services/mySQL.js
// establish a mySQL connection

const mysql = require("mysql2");

module.exports = (app, keys) => {
  //𝕿𝖍𝖎𝖘 connects to the mySQL database
  app.connection = mysql.createConnection(keys.mySQL);

  app.connection.connect(function(err) {
    if (err) {
      console.log("Database is connected. (mySQL.js)".underline.error);
    } else {
      console.log("Database is connected. (mySQL.js)".underline.green);
    }
  });
};
