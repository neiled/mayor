var React = require("react");
var request = require('superagent');

var Hunting = React.createClass({
  render: function() {
    return (
      <div>
        <div className="jumbotron">
          <h2>Hunting</h2>
          <p>Here you can hunt the village grounds.</p>
        </div>
      </div>
    );
  }
});

module.exports = Hunting;
