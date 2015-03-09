var React = require("react");
var request = require('superagent');

var Gardening = React.createClass({
  render: function() {
    return (
      <div>
        <div className="jumbotron">
          <h2>Gardening</h2>
          <p>Time to get those hands dirty.</p>
        </div>
      </div>
    );
  }
});

module.exports = Gardening;
