
var express = require("express");
var load = require('express-load');
var login = require('./routes/loginroutes');
var bodyParser = require('body-parser');
<<<<<<< HEAD
var user = require('./routes/user');
=======
var user = require('./routes/user.js');
var sql = require('./public/javascripts/utilities/sql.js');
>>>>>>> Dev-react-logic
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var router = express.Router();

//route to handle user registration
router.post('/register', login.register);
router.post('/login', login.login);
router.post('/user/edit', user.edit);
app.use('/api', router);
app.listen(5000);
