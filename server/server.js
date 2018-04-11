const express    = require("express");
const login = require('./routes/loginroutes');
const special = require('./routes/special');
const bodyParser = require('body-parser');
const user = require('./routes/user');
const session = require('express-session')
const FileStore = require('session-file-store')(session);
const CryptoJS = require("crypto-js");

var app = express();

/* ==========================================================================
   | James was playing with cryptographic hash functions here. It can be
   | deleted
   ========================================================================== */
// Encrypt
var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123');

// Decrypt
var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), 'secret key 123');
var plaintext = bytes.toString(CryptoJS.enc.Utf8);

console.log("plaintext:"+plaintext);
console.log("ciphertext:"+ciphertext);
/* ========================================================================== */



// What is body parser for?
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(require('morgan')('dev'));

app.use(session({
  name: 'server-session-cookie-id',
  secret: "E3cHjHM349sGXRj4KFPsW3dd", //randomly generated
  resave: false,
  saveUninitialized: true,
  store: new FileStore()
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
/* ==========================================================================
   | So the below app.use(blahblah... will print the session info when-
   | ever localhost:5000 is curl'd (as in: curl localhost:5000 )
   ========================================================================== */
app.get('/', (req, res) => {
  console.log('req.session', req.session);
});
app.use('/api', router);
app.listen(5000);
