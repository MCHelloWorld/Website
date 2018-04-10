var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '35.231.84.39',
  user     : 'developer',
  password : 'f4weqi9ptgfy3890vfm3bu8rohi3#@$R',
  database : 'helloworld'
});
connection.connect(function(err){
  if(!err) {
      console.log("Database is connected. (loginroutes)");
  } else {
      console.log("Error connecting database. (loginroutes)");
  }
});
// maybe make a separate file that estabilishs a database connection.


exports.register = function(req,res){
  // console.log("req",req.body);
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
      "code":400,
      "failed":"error ocurred"
    })
  } else {
    console.log('The solution is: ', results);
    res.send({
      "code":200,
      "success":"user registered sucessfully"
        });
  }
  });
}

exports.login = function(req,res){
  var email= req.body.email;
  var password = req.body.password;
  var mySpecialGuy = req.body.mySpecialGuy ?
      'My Special Guy exists and he is here:' + req.body.mySpecialGuy :  'I got nothing';
  console.log(mySpecialGuy);
  connection.query('SELECT * FROM test_table WHERE email = ?',[email], function (error, results, fields) {
  if (error) {
    // console.log("error ocurred",error);
    res.send({
      "code":400,
      "failed":"error ocurred"
    })
  } else {
    console.log(results.length);
    // console.log('The solution is: ', results);
    if(results.length > 0){
      if(results[0].password === password){
        res.send({
          "code":200,
          "success":"login successfull"
        });
      } else {
        res.send({
          "code":204,
          "success":"Email and password does not match"
            });
      }
    } else {
      res.send({
        "code":204,
        "success":"Email does not exist"
      });
    }
  }
  });
}
