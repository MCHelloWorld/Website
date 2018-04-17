/* ==========================================================================
   | connection.js
   | This file is used to establish a connection to our MySQL database.
   | Currently hosted on Google's database servers, will be ported over to
   | Messiah's servers later in the development
   ========================================================================== *

In the future, we should probably get rid of this and maybe put it in a tests
folder. Or have tests and utilities folders and this would be a utility.


\* ========================================================================== */

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "35.231.84.39",
  user: "developer",
  password: "f4weqi9ptgfy3890vfm3bu8rohi3#@$R",
  database: "helloworld"
});

connection.connect(function(err) {
  //if (err) throw err;
  if (!err) {
    console.log("Database is connected. (connection.js)");
  } else {
    console.log("Error connecting database. (connection.js)");
  }
});

module.exports = connection;
