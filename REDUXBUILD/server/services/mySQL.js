// server/services/mySQL.js
// establish a mySQL connection

const mysql = require("mysql");

module.exports = (app, keys) => {
  //𝕿𝖍𝖎𝖘 connects to the mySQL database
  app.connection = mysql.createConnection(keys.mySQL);

  app.connection.connect(function(err) {
    if (err) throw err;
    else console.log("Database is connected. (mySQL.js)");
  });
};