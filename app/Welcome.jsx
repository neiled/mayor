var React = require("react");
var request = require('superagent');

var Welcome = React.createClass({
  render: function() {
    return (
      <div>
        <div className="jumbotron">
          <h2>Welcome</h2>
          <p>Welcome to your new town.</p>
        </div>
        <p>
        </p>
      </div>
    );
  }
});

module.exports = Welcome;
