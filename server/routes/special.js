var count = 0;
var countRequests = 0;

exports.special = function(req, res) {
  var mySpecialGuy = req.body.mySpecialGuy
    ? "My Special Guy exists and he is here:" + req.body.mySpecialGuy
    : "I got nothing";
  console.log(mySpecialGuy);
  count = count + 1;
  console.log(count);

  res.send();
};

exports.countRequests = (req, res) => {};
