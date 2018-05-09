/* ==========================================================================
   | connection.js
   | This file is used to establish a connection to our MySQL database.
   | Currently hosted on Google's database servers, will be ported over to
   | Messiah's servers later in the development
   ========================================================================== *
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
//non-asynchronous connection
function query(input, array) {
  return new Promise(function(resolve, reject) {
    connection.query(input, array, function(error, results, fields) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("results have been hit ");
        resolve(results);
      }
    });
  });
}

module.exports = query;
