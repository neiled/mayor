var React = require("react");
var request = require('superagent');

var Diving = React.createClass({
  render: function() {
    return (
      <div>
        <div className="jumbotron">
          <h2>Diving</h2>
          <p>Here you can dive the village waters.</p>
        </div>
      </div>
    );
  }
});

module.exports = Diving;
