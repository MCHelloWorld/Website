var mysql = require('mysql');
var bcrypt = require('bcrypt');
var connection = require('./connection');

exports.edit = function(req, res){
  var today = new Date();
  //bcrypt.hash(req.body.password, 5, function(err, bcryptedPassword) {
  var payload={
    "first_name":req.body.first_name,
    "last_name":req.body.last_name,
    "bio":req.body.bio,
    "modified":today,
    "email":req.body.email
  }

  var str = 'UPDATE user SET ?';
  if (req.body.hasOwnProperty('password')) {
    var salt = bcrypt.genSaltSync(5);
    var hashed = bcrypt.hashSync(req.body.password, salt);
    payload.hash = hashed;
  }

  connection.query('SELECT * FROM user WHERE email = ?', [payload.email], function(error, results, fields) {
    console.log(results.length);
    if(results.length > 0){
      connection.query(str, payload, function (error, results, fields) {
        if(error) {
          console.log(error);
        } else {
          res.send({
            "code":100,
            "success":"Success!",
            "returned":payload
          })
        }
      })
    }
  })
}

exports.upload = function(req, res) {
  var today = new Date();
  var payload = {
    "file":req.body.file,
    "url":req.body.imagePreviewUrl,
    "email":req.body.email
  }

  connection.query('INSERT INTO user SET profile_picture = ?, url = ? WHERE email = ?',
                    [payload.file, payload.url, payload.email], function(error, results, fields) {
    console.log(results.length);
    if(error) {
      console.log(error);
    } else {
      res.send({
        "code":300,
        "success":"Success!"
      })
    }
  })
}
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
//
exports.login(req,res){
  //var email = req.body.email;
  //var password = req.body.password;


  /**userId = session.getSession(req);
  if(userId > -1){
    res.send({
      "session":"valid";
    })
  }else{**/
    connection.query('Select * from User where email = js1874@messiah.edu AND hash = $2a$05$kqr0vTB5Q.MdyTzTwWozwuQ7rfnFHYagItf1ne/Z6sjd.uzjYjnuO',{email, password}, function (error, results, fields) {
    compare = true;//bcrypt.compare(results[0].hash, password);
    if compare
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
        "success":"user registered sucessfully",
        "session":"valid",
        "first_name":results[0].first_name,
        "last_name":results[0].last_name,
        "email":results[0].email,
        "username":results[0].username,
        "profile_pic":results[0].url,
        "is_admin":results[0].is_admin

          });
    }
    });
  });
  //}

}
exports.get(id){
  connection.query('Select * from User where id=?',{id}, function (error, results, fields) {
  compare = true;//bcrypt.compare(results[0].hash, password);
  if compare
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
      "success":"user registered sucessfully",
      "session":"valid",
      "first_name":results[0].first_name,
      "last_name":results[0].last_name,
      "email":results[0].email,
      "username":results[0].username,
      "profile_pic":results[0].url,
      "is_admin":results[0].is_admin

        });
  }
  });
});
}
