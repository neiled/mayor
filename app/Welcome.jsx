var React = require("react");
var request = require('superagent');

var Welcome = React.createClass({
  render: function() {
    return (
      <div>
        <div id="page-title">
          <h1 className="page-header text-overflow">Welcome</h1>
        </div>
        <h2>Welcome to your new town.</h2>
        <div className="row">
          <div className="col-lg-7">
            <div className="panel">
              <div className="panel-heading">
								<h3 className="panel-title">Log In</h3>
							</div>            
              <a href="/auth/twitter"><button className="btn btn-primary btn-labeled icon-lg fa fa-twitter">Twitter</button></a>
              <a href="/auth/github"><button className="btn btn-primary btn-labeled icon-lg fa fa-github">GitHub</button></a>
            </div>          
          </div>
        </div>

      </div>
    );
  }
});

module.exports = Welcome;
