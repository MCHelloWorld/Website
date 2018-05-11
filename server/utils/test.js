const MySQL = require("Mysql");

var connection = MySQL.createConnection({
  host: "153.42.31.18",
  user: "helloadmin",
  password: "h3llo3ar7h",
  database: "helloworld",
  port: 3306
});
var id = 80;
connection.query("Select * from user where user_id", [id], function(
  error,
  results,
  fields
) {
  console.log(results, error);
});
