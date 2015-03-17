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
  getInitialState: function() {
    return {user: null};
  },
  componentDidMount: function() {
    $.get("/user/current", function(result) {
      if(this.isMounted()) {
        this.setState({user: result.user});
      }
    }.bind(this));
  },
  render: function () {
    var mainnav = this.state.user && Object.keys(this.state.user).length !== 0 ? <MainNav user={this.state.user}/> : '';
    var navbar = this.state.user && Object.keys(this.state.user).length !== 0 ? <Navbar user={this.state.user}/> : '';
    return (
      <div id="container" className="effect mainnav-lg">
        {navbar}
        <div className="boxed">
          <div id="content-container">
            <RouteHandler user={this.state.user}/>
          </div>
          {mainnav}
        </div>
      </div>
    );
  }
});

module.exports = App;
