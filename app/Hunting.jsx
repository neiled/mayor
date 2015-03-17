var React = require("react");
var request = require('superagent');

var Hunting = React.createClass({
  render: function() {
    return (
      <div>
        <div id="page-title">
          <h1 className="page-header text-overflow">Hunting</h1>
        </div>
        <div id="page-content">
          <div className="row">
            <div className="col-lg-7">
              <div className="panel">
                <div className="panel-heading">
    							<h3 className="panel-title">Time to catch some insects...</h3>
    						</div>
    						<div className="panel-body">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Hunting;
