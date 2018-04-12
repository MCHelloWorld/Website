
var cookieSession = require('cookie-session')
var express = require("express");
var load = require('express-load');
var login = require('./routes/loginroutes');
var bodyParser = require('body-parser');
var user = require('public/javascripts/User')
//

function checkUser(req,res, Next){
if(req.session == null){
  console.log('access denied');
  res.send("bad session");
}else{

  Next();
}
}

//
//var passport = require('passport')
//  , LocalStrategy = require('passport-local').Strategy;

//var user = require('./routes/user');

//var user = require('./routes/user.js');
var sql = require('./public/javascripts/utilities/sql.js');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    next();
});
app.use(cookieSession({
  name: 'Hello',
  secret:"secret",

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));
var router = express.Router();

/**router.use('/', function(req,res){
  console.log("hit");
});**/
//route to handle user registration
router.post('/register', login.register);
router.post('/login', login.login);

router.use('/test', function(req,res){
  console.log("hit!");
  var info = req.body.info;
  res.send({back:JSON.stringify({
    "code":100,
    "success":"Success!",
  })});

});
//router.post('/user/edit', user.edit);
//router.get('/user/put', function(req,res,next){
//  res.send("hey there");
//  console.log(req);
  //res.redirect("/routes/user/put.js");
//});
app.use('/api', function(req,res, Next){console.log('api hit');checkUser(req,res, Next);})
app.use('/api', router);
app.get('/test', function(req,res){
  console.log("hit!");
  var info = req.body.info;
  res.send({back:JSON.stringify({
    "code":100,
    "success":"Success!",
  })});

});
//checks for a proper session from the user. re



app.listen(5000);
