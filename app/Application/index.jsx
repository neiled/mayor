var React = require("react");
var Router = require('react-router'); // or var Router = ReactRouter; in browsers

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

require('../css/mayor.css');
require('../css/nifty.min.css');
//require("../js/resize-end.js")
//require('../js/nifty.js');



var Navbar = require('./Navbar');
var MainNav = require('./MainNav');


var App = React.createClass({
  // getInitialState: function() {
  //   return {user: null, total:0, coins:0};
  // },
  // componentDidMount: function() {
  //   $.get("/user/current", function(result) {
  //     if(this.isMounted()) {
  //       this.setState({user: result});
  //       var socket = io.connect();
  //       socket.on('inventory:update:'+result.user.id, function (data) {
  //         this.setState({total:data.total, coins: data.coins})
  //       }.bind(this));
  //     }
  //   }.bind(this));
  //   $.get("/user/inventory", function(result) {
  //     if(this.isMounted()) {
  //       this.setState({total: result.total});
  //       this.setState({coins: result.coins});
  //     }
  //   }.bind(this));

  // },
  // renderSidebar: function() {
  //   if(this.state.user && Object.keys(this.state.user).length !== 0)
  //   {
  //     return (
  //       <div className="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar">
  //         <div className="list-group">
  //           <Link className="list-group-item" to="hunting">Hunting</Link>
  //           <Link className="list-group-item" to="fishing">Fishing</Link>
  //           <Link className="list-group-item" to="diving">Diving</Link>
  //           <Link className="list-group-item" to="gardening">Gardening</Link>
  //           <Link className="list-group-item" to="museum">Museum</Link>
  //           <Link className="list-group-item" to="store">Store</Link>
  //           <Link className="list-group-item" to="construction">Construction</Link>
  //         </div>
  //         <div className="list-group">
  //           <Link className="list-group-item" to="inventory">Pockets <span className="badge">{this.state.total}</span></Link>
  //           <Link className="list-group-item" to="coins">Coins <span className="badge">{this.state.coins}</span></Link>
  //         </div>
  //       </div>
  //     );
  //   }
  // },
  render: function () {
    // var authLinks = this.renderAuthLinks();
    // var sidebar = this.renderSidebar();

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
