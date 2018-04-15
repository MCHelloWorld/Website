const CryptoJS = require("crypto-js");

exports.initSession = function(req, id) {
  if (req.session.id !== null) {
    res.send("valid");
  }
  var Lhash = -1;
  var ciphertext = CryptoJS.AES.encrypt(id, CryptoKey);
  req.session.id = ciphertext;


  return true;
};


exports.getSession = function(req) {
  cryptId = req.session.id;
  var solvedId = CryptoJS.AES.decrypt(ciphertext.toString(), CryptoKey);
  if (solvedId > -1) {
    return solvedId;
  } else {
    return false;
}

}

exports.toySession = function(id){
  if user
}

};
