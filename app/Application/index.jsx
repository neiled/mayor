var React = require("react");
var Router = require('react-router'); // or var Router = ReactRouter; in browsers

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

require('../css/mayor.css');
require('../css/nifty.min.css');


var Navbar = require('./Navbar');
var MainNav = require('./MainNav');


var App = React.createClass({

  render: function () {


    return (
      <div id="container" className="effect mainnav-lg">
        <Navbar />
        <div className="boxed">
          <div id="content-container">
            <RouteHandler/>
          </div>
          <MainNav />
        </div>
      </div>
    );
  }
});

module.exports = App;
