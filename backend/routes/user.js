var mysql = require('mysql');
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

exports.edit = function(rew, res){
  var today = new Date();
  var payload={
    "first_name":req.body.first_name,
    "last_name":req.body.last_name,
    "bio":req.body.bio,
    "password":req.body.password,
    "modified":today,
    "email":req.body.email
  }
  var str = 'UPDATE test_table SET first_name = ?, last_name = ?, password = ?, modified = ? WHERE email = ?';
  connection.query('SELECT * FROM test_table WHERE email = ?', [payload.email], function(error, results, fields) {
    console.log(results.length);
    if(results.length > 0){
      if(results[0].password===payload.password) {
        res.send({
          "code":104,
          "success":"Passwords match"
        });
      } else {
        connection.query(str, [payload.first_name, payload.last_name, payload.password, payload.modified, payload.email], function (error, results, fields) {
          if(error) {
            console.log(error);
          } else {
            res.send({
              "code":100,
              "success":"Success!"
            })
          }
        })
      }
    }
  })
}
