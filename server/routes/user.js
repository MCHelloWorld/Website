var mysql = require('mysql');
var connection = require('./connection');

exports.edit = function(req, res){
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
