var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '35.231.84.39',
  user     : 'developer',
  password : 'f4weqi9ptgfy3890vfm3bu8rohi3#@$R',
  database : 'helloworld'
});
connection.connect(function(err){
if(!err) {
    console.log("Database is connected.");
} else {
    console.log("Error connecting database.");
}
});
module.exports = connection;
