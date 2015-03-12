var React = require("react");
var Router = require("react-router");
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

// polyfill
if(!Object.assign)
	Object.assign = React.__spread;

module.exports = (
  <Route name="app" path="/" handler={require("./Application/index")}>
    <Route name="fishing" handler={require("./Fishing")}/>
    <Route name="hunting" handler={require("./Hunting")}/>
    <Route name="diving" handler={require("./Diving")}/>
    <Route name="gardening" handler={require("./Gardening")}/>
    <Route name="museum" handler={require("./Museum")}/>
    <Route name="store" handler={require("./Store")}/>
    <Route name="construction" handler={require("./Construction")}/>
    <Route name="inventory" handler={require("./Inventory")}/>
		<DefaultRoute handler={require("./Welcome")}/>

  </Route>
);
