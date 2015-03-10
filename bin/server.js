#!/usr/bin/env node

module.exports = function(options) {
  var dotenv = require('dotenv');
  dotenv.load();

  var debug = require('debug')('mayor:server');
  var app = require('../app');
  var renderApplication = require("../config/simple.js");
  var models = require("../models");

  app.set('port', process.env.PORT || 3000);
  app.set('ip', process.env.IP || "0.0.0.0");

  var stats = require("../build/stats.json");

  var publicPath = stats.publicPath;

  var STYLE_URL = options.separateStylesheet && (publicPath + "main.css?" + stats.hash);
  var SCRIPT_URL = publicPath + [].concat(stats.assetsByChunkName.main)[0];
  var COMMONS_URL = publicPath + [].concat(stats.assetsByChunkName.commons)[0];


  // application
	app.get("/*", function(req, res) {
		renderApplication(req.path, SCRIPT_URL, STYLE_URL, COMMONS_URL, function(err, html) {
			res.contentType = "text/html; charset=utf8";
			res.end(html);
		});
	});

  app.use(function(req, res, next) {
      var err = new Error('Not Found');
      err.status = 404;
      next(err);
  });

  // error handlers

  // // development error handler
  // // will print stacktrace
  // if (app.get('env') === 'development') {
  //     app.use(function(err, req, res, next) {
  //         res.status(err.status || 500);
  //         res.render('error', {
  //             message: err.message,
  //             error: err
  //         });
  //     });
  // }
  //
  // // production error handler
  // // no stacktraces leaked to user
  // app.use(function(err, req, res, next) {
  //     res.status(err.status || 500);
  //     res.render('error', {
  //         message: err.message,
  //         error: {}
  //     });
  // });


  models.sequelize.sync().then(function () {
    var server = app.listen(app.get('port'), app.get('ip'), function() {
      debug('Express server listening on port ' + server.address().port);
    });
  });

}
