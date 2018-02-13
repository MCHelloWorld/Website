let mysql = require('mysql');

let con = mysql.createConnection({
  host: "35.231.84.39",
  user: "developer",
  password: "f4weqi9ptgfy3890vfm3bu8rohi3#@$R"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
