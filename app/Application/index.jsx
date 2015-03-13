var React = require("react");
var Router = require('react-router'); // or var Router = ReactRouter; in browsers

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;


var App = React.createClass({
  getInitialState: function() {
    return {user: null, inv:0};
  },
  componentDidMount: function() {
    $.get("/user/current", function(result) {
      if(this.isMounted()) {
        this.setState({user: result});
      }
    }.bind(this));
    $.get("/user/inventory", function(result) {
      if(this.isMounted()) {
        console.log(result);
        this.setState({inv: result.inventory.length});
      }
    }.bind(this));
    var socket = io.connect();
    socket.on('inventory:update', function (data) {
      console.log(data);
      this.setState({inv:data.inventory.length})
    }.bind(this));    
    
  },
  renderAuthLinks: function() {
    if(this.state.user && Object.keys(this.state.user).length !== 0)
    {
      return (<li><a href="/auth/logout">Sign out...</a></li>);
    }
    return (<li><a href="/auth/twitter">Sign in...</a></li>);

  },
  renderSidebar: function() {
    if(this.state.user && Object.keys(this.state.user).length !== 0)
    {
      return (
        <div className="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar">
          <div className="list-group">
            <Link className="list-group-item" to="hunting">Hunting</Link>
            <Link className="list-group-item" to="fishing">Fishing</Link>
            <Link className="list-group-item" to="diving">Diving</Link>
            <Link className="list-group-item" to="gardening">Gardening</Link>
            <Link className="list-group-item" to="museum">Museum</Link>
            <Link className="list-group-item" to="store">Store</Link>
            <Link className="list-group-item" to="construction">Construction</Link>
          </div>
          <div className="list-group">
            <Link className="list-group-item" to="inventory">Pockets <span className="badge">{this.state.inv}</span></Link>
          </div>
        </div>
      );
    }
  },
  render: function () {
    var authLinks = this.renderAuthLinks();
    var sidebar = this.renderSidebar();
    return (
        <div>
            <nav className="navbar navbar-inverse navbar-fixed-top">
              <div className="container">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="/">Mayor</a>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                  <ul className="nav navbar-nav navbar-right">
                    {authLinks}
                    <li><a href="#">Settings</a></li>
                    <li><a href="#">Help</a></li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="container">
              <div className="row row-offcanvas row-offcanvas-right">
                <div className="col-xs-12 col-sm-9">
                  <p className="pull-right visible-xs">
                    <button type="button" className="btn btn-primary btn-xs" data-toggle="offcanvas">Toggle nav</button>
                  </p>
                  <RouteHandler/>
                </div>
                {sidebar}
              </div>
            </div>
        </div>
    );
  }
});

module.exports = App;
