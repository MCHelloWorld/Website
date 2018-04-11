const express    = require("express");
const login = require('./routes/loginroutes');
const special = require('./routes/special');
const bodyParser = require('body-parser');
const user = require('./routes/user');
const session = require('express-session')

var app = express();
// HI THERE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(session({
  secret: "E3cHjHM349sGXRj4KFPsW3dd", //randomly generated
  resave: false,
  saveUninitialized: true
}));

var router = express.Router();

//route to handle user registration
router.post('/register', login.register);
router.post('/login', login.login);
router.post('/special', special.special); // for testing and debugging
router.post('/user/edit', user.edit);
router.post('/user/status', function(req,res) {
  if (!req.session.user) {
    /* If user is not logged in, then send Unauthorized 401 error */
    return res.status(401).send();
  }

  return res.status(200).send("Welcome to Super Secret API");
});
router.get('/hello', (req, res) => {
  return res.status(200).send("hello")
}); //for testing and debugging

app.use('/api', router);
app.listen(5000);
