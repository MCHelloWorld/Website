/* ==========================================================================
   | client.js
   | This file is used to test get requests on localhost 5000
   | To run, cd into the containing folder and run the command: node client.js
   ========================================================================== *

In the future, we should probably get rid of this and maybe put it in a tests
folder. Or have tests and utilities folders and this would be a utility.


\* ========================================================================== */

var FileCookieStore = require("tough-cookie-filestore");
var requestPromise = require("request-promise");
var rp = requestPromise.defaults({
  jar: requestPromise.jar(new FileCookieStore("cookies.json"))
});
function requestPage() {
  return rp("http://localhost:5000/");
}
requestPage()
  .then(console.dir)
  .then(requestPage)
  .then(console.dir)
  .then(requestPage)
  .then(console.dir)
  .catch(console.error);
