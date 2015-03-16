var React = require("react");
var request = require('superagent');

var Welcome = React.createClass({
  render: function() {
    return (
      <div>
        <div id="page-title">
          <h1 className="page-header text-overflow">Welcome</h1>
        </div>
        <p>Welcome to your new town.</p>
        <p>
        <a href="/auth/twitter">Sign in with Twitter...</a>
        <a href="/auth/github">Sign in with GitHub...</a>
        </p>
      </div>
    );
  }
});

module.exports = Welcome;
