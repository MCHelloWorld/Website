const CryptoJS = require("crypto-js");

exports.initSession = function(req, email, next) {
  if (req.session.email !== null) {
    res.send(session:"valid");
  }

  var ciphertext = CryptoJS.AES.encrypt(email, CryptoKey);

  req.session.email = ciphertext;

  return true;
};


exports.getSession = function(req) {
  cryptId = req.session.email;
  var solved = CryptoJS.AES.decrypt(ciphertext.toString(), CryptoKey);
  if (solved.includes("@messiah.edu")) {
    return User.getUser(solved)
  } else {
    res.send({session:"bad"})
}

}



};
