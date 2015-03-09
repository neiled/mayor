var React = require("react");
var request = require('superagent');

var Museum = React.createClass({
  render: function() {
    return (
      <div>
        <div className="jumbotron">
          <h2>Museum</h2>
          <p>Look at all the wonderful things you've found!</p>
        </div>
      </div>
    );
  }
});

module.exports = Museum;
