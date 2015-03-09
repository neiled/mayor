var React = require("react");
var request = require('superagent');

var Construction = React.createClass({
  render: function() {
    return (
      <div>
        <div className="jumbotron">
          <h2>Construction</h2>
          <p>Here you can build some new places in the village.</p>
        </div>
      </div>
    );
  }
});

module.exports = Construction;
