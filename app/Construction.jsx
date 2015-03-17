var React = require("react");
var request = require('superagent');

var Construction = React.createClass({
  render: function() {
    return (
      <div>
        <div id="page-title">
          <h1 className="page-header text-overflow">Construction</h1>
        </div>
        <div id="page-content">
          <div className="row">
            <div className="col-lg-7">
              <div className="panel">
                <div className="panel-heading">
    							<h3 className="panel-title">Let's build something new...</h3>
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

module.exports = Construction;
