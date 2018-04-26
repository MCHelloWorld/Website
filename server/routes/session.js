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
var CryptoKey = "o012i390umsamkg89phr3qp";

exports.initSession = function(req, res, email, next) {
  /*if (req.session.email !== null) {
    res.send({session: "valid"});
  }*/

  var ciphertext = CryptoJS.AES.encrypt(email, CryptoKey);

  res.session = ciphertext;
  if (req.session.isChanged) {
    console.log("the session has been changed!!");
  }
  console.log(res.session + " initSession");
  next();
};
//returns the decrypted contents of the session //
exports.getSession = function(req, res, next) {
  if (req.session == null) {
    return false;
    console.log("No session found!");
  }
  var ciphertext = req.session;
  console.log("the raw session is: " + ciphertext);
  const solved = CryptoJS.AES.decrypt(ciphertext, CryptoKey);
  var plaintext = solved.toString(CryptoJS.enc.Utf8);
  console.log("plaintext session: " + plaintext);
  if (plaintext.includes("@messiah.edu")) {
    return plaintext;
    console.log("plaintext session: " + plaintext);
  } else {
    return false;
  }
};
exports.authSession = function(req, res, next) {
  var session = getSession(req, res, next);
  if (session == false) {
    res.send({ code: 401 });
  } else {
    return session;
  }
};
