var React = require("react");
var Router = require("react-router");
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

// polyfill
if(!Object.assign)
	Object.assign = React.__spread;

module.exports = (
  <Route name="app" path="/" handler={require("./Application/index")}>
    <Route name="fishing" handler={require("./Fishing")}  activeClassName="active-link"/>
    <Route name="hunting" handler={require("./Hunting")}  activeClassName="active-link"/>
    <Route name="diving" handler={require("./Diving")}  activeClassName="active-link"/>
    <Route name="gardening" handler={require("./Gardening")}  activeClassName="active-link"/>
    <Route name="museum" handler={require("./Museum")}  activeClassName="active-link"/>
    <Route name="store" handler={require("./Store")}  activeClassName="active-link"/>
    <Route name="construction" handler={require("./Construction")}  activeClassName="active-link"/>
    <Route name="inventory" handler={require("./Inventory")}  activeClassName="active-link"/>
    <Route name="coins" handler={require("./Coins")}  activeClassName="active-link"/>
		<DefaultRoute handler={require("./Welcome")}/>

  </Route>
);
