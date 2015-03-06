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
  </Route>
);