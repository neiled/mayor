var fs = require("fs");
var path = require("path");
var html = fs.readFileSync(path.resolve(__dirname, "../client/index.html"), "utf-8");

module.exports = function(path, scriptUrl, styleUrl, commonsUrl, callback) {
	callback(null, html.replace("SCRIPT_URL", scriptUrl));
};
