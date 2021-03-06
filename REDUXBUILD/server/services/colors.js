var colors = require("colors");

colors.setTheme({
  silly: "rainbow",
  unicorn: ["rainbow", "underline"],
  input: "grey",
  verbose: "cyan",
  prompt: "grey",
  info: "cyan",
  data: "grey",
  help: "cyan",
  warn: "yellow",
  debug: "blue",
  error: ["red", "underline"]
});

/******************
 * HOW THIS WORKS *
 ******************/

// console.log("this is an debug".debug); // outputs red text
// console.log("this is a warning".warn); // outputs yellow text

module.exports = (app = null, keys = null) => {};
