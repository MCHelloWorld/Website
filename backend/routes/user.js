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

export.edit = function(rew, res){
  var today = new Date();
  var users={
    "first_name":req.body.first_name,
    "last_name":req.body.last_name,
    "email":req.body.email,
    "password":req.body.password,
    "created":today,
    "modified":today
  }
  connection.query('INSERT INTO test_table SET ?',users, function (error, results, fields) {
  if (error) {
    console.log("error ocurred",error);
    res.send({
      "code":500,
      "failed":"an error occurred"
    })
  }else{
    console.log('The solution is: ', results);
    res.send({
      "code":200,
      "success":"user registered sucessfully"
        });
  }
  });
}