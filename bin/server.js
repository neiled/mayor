#!/usr/bin/env node

module.exports = function(options) {

  var debug = require('debug')('mayor');
  var app = require('../app');
  var models = require("../models");

  app.set('port', process.env.PORT || 3000);
  app.set('ip', process.env.IP || "0.0.0.0");

  var stats = require("../build/stats.json");

  var publicPath = stats.publicPath;

  var STYLE_URL = options.separateStylesheet && (publicPath + "main.css?" + stats.hash);
  var SCRIPT_URL = publicPath + [].concat(stats.assetsByChunkName.main)[0];
  var COMMONS_URL = publicPath + [].concat(stats.assetsByChunkName.commons)[0];

  models.sequelize.sync().then(function () {
    var server = app.listen(app.get('port'), app.get('ip'), function() {
      debug('Express server listening on port ' + server.address().port);
    });
  });

}
