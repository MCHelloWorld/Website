var mysql      = require('mysql');
var connection = require('./connection');

exports.register = function(req,res){
  // console.log("req",req.body);
  var today = new Date();
  var users = {
    "first_name": req.body.first_name,
    "last_name" : req.body.last_name,
    "email"     : req.body.email,
    "password"  : req.body.password,
    "created"   : today,
    "modified"  : today
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

function saveSession(username, password) {
  req.session.user = username;
  req.session.pass = password;
}

exports.login = function(req,res){
  var email    = req.body.email;
  var password = req.body.password;
  console.log("req.body.username : " + req.body.username)
  console.log("req.body.password : " + req.body.password)

  connection.query('SELECT * FROM test_table WHERE email = ?',[email], function (error, results, fields) {
    if (error) {
      // console.log("error ocurred",error);
      res.send( { "code":400, "failed":"error ocurred" } )
    } else {
      // console.log('The solution is: ', results);
      if (results.length > 0) {
        if (results[0].password === password) {
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
