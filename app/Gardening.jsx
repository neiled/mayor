var React = require("react");
var request = require('superagent');

var Gardening = React.createClass({
  render: function() {
    return (
      <div>
        <div id="page-title">
          <h1 className="page-header text-overflow">Gardening</h1>
        </div>
        <div id="page-content">
          <div className="row">
            <div className="col-lg-7">
              <div className="panel">
                <div className="panel-heading">
    							<h3 className="panel-title">Work those green thumbs...</h3>
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

module.exports = Gardening;
