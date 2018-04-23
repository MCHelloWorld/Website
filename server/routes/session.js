/* ==========================================================================
   | session.js
   | This file contains functions for session management
   ========================================================================== *

standard returns indicating the state of the current user's session shall be as follows.

the session state will be indicated by a field named "session" in every returning object

//maybe call it invalid and not bad

"user"-there is no session or it is in some way invalid. Usually this is a good time to redirect to the login screen
"admin"-the session is valid. proceed as if the user is logged in



\* ========================================================================== */

const CryptoJS = require("crypto-js");
var CryptoKey = "o012i390umsamkg89phr3qp"

exports.initSession = function(req,res,email, next) {
  /*if (req.session.email !== null) {
    res.send({session: "valid"});
  }*/

  var ciphertext = CryptoJS.AES.encrypt(email, CryptoKey);

  req.session = ciphertext;
  console.log(req.session + " initSession");
  next();
};
