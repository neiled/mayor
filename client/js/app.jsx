var Router = ReactRouter;

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render: function () {
    return (
        <div>
            <nav className="navbar navbar-inverse navbar-fixed-top">
              <div className="container-fluid">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="#">Mayor</a>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                  <ul className="nav navbar-nav navbar-right">
                    <li><a href="#">Sign out...</a></li>
                    <li><a href="#">Settings</a></li>
                    <li><a href="#">Help</a></li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-3 col-md-2 sidebar">
                  <ul className="nav nav-sidebar">
                    <li><a href="#">Hunting</a></li>
                    <li><Link to="fishing">Fishing</Link></li>
                    <li><a href="#">Diving</a></li>
                    <li><a href="#">Gardening</a></li>
                  </ul>
                  <ul className="nav nav-sidebar">
                    <li><a href="">Museum</a></li>
                    <li><a href="">Store</a></li>
                    <li><a href="">Construction</a></li>
                  </ul>
                </div>
                <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                  <h1 className="page-header">Mayor</h1>
                    <RouteHandler/>
                </div>
              </div>
            </div>
        </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="fishing" handler={Fishing}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});