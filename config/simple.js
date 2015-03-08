var fs = require("fs");
var path = require("path");
var html = fs.readFileSync(path.resolve(__dirname, "../app/index.html"), "utf-8");
var debug = require('debug')('mayor')

module.exports = function(path, scriptUrl, styleUrl, commonsUrl, callback) {
	callback(null, html.replace("SCRIPT_URL", scriptUrl));
};
