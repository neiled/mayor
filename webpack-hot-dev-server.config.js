module.exports = require("./make-webpack-config")({
	devServer: true,
	hotComponents: true,
	devtool: "eval",
	separateStylesheet: true,
	debug: true,
});
