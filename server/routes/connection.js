/* ==========================================================================
   | connection.js
   | This file is used to test get requests on localhost 5000
   | To run, cd into the containing folder and run the command: node client.js
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
