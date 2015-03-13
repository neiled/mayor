module.exports = function(app) {
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;
var GitHubStrategy = require('passport-github').Strategy;
var session = require('express-session')
var fishing = require('./routes/fishing');
var user = require('./routes/user');
var models = require("./models");

// var app = express();


// Use the TwitterStrategy within Passport.
//   Strategies in passport require a `verify` function, which accept
//   credentials (in this case, a token, tokenSecret, and Twitter profile), and
//   invoke a callback with a user object.
passport.use(new TwitterStrategy({
    consumerKey: process.env.TWITTER_KEY,
    consumerSecret: process.env.TWITTER_SECRET,
    callbackURL: process.env.TWITTER_CALLBACK  
  },
  function(token, tokenSecret, profile, done) {
    models.User.findOrCreate({where: { twitterId: profile.id }}).spread(function (user) {
      return done(null, user);
    });
  }
));

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_CALLBACK //"http://127.0.0.1:3000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    models.User.findOrCreate({where: { twitterId: profile.id }}).spread(function (err, user) {
      return done(err, user);
    });
  }
));

passport.serializeUser(function(user, done) {
    done(null, user.id); // this is what gets attached to the session
});

passport.deserializeUser(function(id, done) {
    models.User.find(id).then(function(user) {
        done(null, user);
    });
});

// view engine setup
//app.set('views', path.join(__dirname, 'views'));

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: 'keyboard catZZZ' }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

app.use("/_assets", express.static(path.join(__dirname, "build", "public"), {
  maxAge: "200d" // We can cache them as they include hashes
}));
app.use("/", express.static(path.join(__dirname, 'client')));
app.use('/fishing', fishing);
app.use('/user', user);

// GET /auth/twitter
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Twitter authentication will involve redirecting
//   the user to twitter.com.  After authorization, the Twitter will redirect
//   the user back to this application at /auth/twitter/callback
app.get('/auth/twitter',  passport.authenticate('twitter'));

// GET /auth/twitter/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get('/auth/twitter/callback',
  passport.authenticate('twitter', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/');
  });


app.get('/auth/github',  passport.authenticate('github'));

app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/');
  });

app.get('/auth/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

return app;
}