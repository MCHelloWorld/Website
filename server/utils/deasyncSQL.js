/* ==========================================================================
   | connection.js
   | This file is used to establish a connection to our MySQL database.
   | Currently hosted on Google's database servers, will be ported over to
   | Messiah's servers later in the development
   ========================================================================== *
\* ========================================================================== */

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "153.42.31.18",
  user: "helloadmin",
  password: "h3llo3ar7h",
  database: "helloworld",
  port: 3306
});

connection.connect(function(err) {
  //if (err) throw err;
  if (!err) {
    console.log("Database is connected. (connection.js)");
  } else {
    console.log("Error connecting database. (connection.js)");
  }
});
//non-asynchronous connection returning the array result of a query and an
//error message if not
function query(input, array) {
  return new Promise(function(resolve, reject) {
    connection.query(input, array, function(error, results, fields) {
      if (error) {
        console.debug(error);
        reject(error);
      } else {
        console.log("results have been hit ");
        resolve(results);
      }
    });
  });
}

module.exports = query;
