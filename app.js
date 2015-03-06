var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/_assets", express.static(path.join(__dirname, "..", "build", "public"), {
  maxAge: "200d" // We can cache them as they include hashes
}));
app.use("/", express.static(path.join(__dirname, 'client')));
// app.use('/', routes);
// catch 404 and forward to error handler


module.exports = app;
