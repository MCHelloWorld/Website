var mysql      = require('mysql');
var bcrypt = require('bcrypt');
var connection = require('./connection');

exports.register = function(req,res){
  // console.log("req",req.body);
  var today = new Date();
  bcrypt.hash(req.body.password, 5, function(err, bcryptedPassword){
    var users={
      "first_name":req.body.first_name,
      "last_name":req.body.last_name,
      "email":req.body.email,
      "username":req.body.email.substring(0,6),
      "hash":bcryptedPassword,
      "created":today,
      "modified":today
    }
    connection.query('INSERT INTO user SET ?',users, function (error, results, fields) {
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
  });
}

exports.login = function(req,res){
  var email= req.body.email;
  var password = req.body.password;
  connection.query('SELECT * FROM user WHERE email = ?',[email], function (error, results, fields) {
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
      bcrypt.compare(password, results[0].hash, function(err, doesMatch) {
        if (doesMatch) {
          res.send({
            "code":200,
            "success":"Login Successful",
            "username":results[0].username,
            "first":results[0].first_name,
            "last":results[0].last_name,
            "email":results[0].email,
            "bio":results[0].bio,
            "pic":results[0].picture_url,
            "admin":results[0].is_admin
          });
          console.log(results[0].picture_url);
        } else {
          res.send({
            "code":204,
            "success":"Email and password does not match."
          });
        }
      });
    } else {
      res.send({
        "code":204,
        "success":"Email does not exist"
      });
    }
  }
  });
}

function saveSession(username, password) {
  req.session.user = username;
  req.session.pass = password;
}
