var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : '35.231.84.39',
  user     : 'developer',
  password : 'f4weqi9ptgfy3890vfm3bu8rohi3#@$R',
  database : 'helloworld'
});

connection.connect(function(err) {
    //if (err) throw err;
    if(!err) {
        console.log("Database is connected. (connection.js)");
    } else {
        console.log("Error connecting database. (connection.js)");
    }
});

module.exports = connection;
