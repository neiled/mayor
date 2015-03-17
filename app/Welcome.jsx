var React = require("react");
var request = require('superagent');

var Login = React.createClass({
  render: function() {
    return (
        <div id="page-content">
          <div className="row">
            <div className="col-lg-7">
              <div className="panel">
                <div className="panel-heading">
    							<h3 className="panel-title">Log In</h3>
    						</div>
    						<div className="panel-body">
                  <a href="/auth/twitter" className="btn btn-primary btn-labeled icon-lg fa fa-twitter">Twitter</a>
                  <span> </span>
                  <a href="/auth/github" className="btn btn-primary btn-labeled icon-lg fa fa-github">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
});

var Welcome = React.createClass({
  render: function() {
    var login = this.props.user && Object.keys(this.props.user).length !== 0 ? '' : <Login/>;
    return (
      <div>
        <div id="page-title">
          <h1 className="page-header text-overflow">Welcome to your new town</h1>
        </div>
        {login}
      </div>
    );
  }
});

module.exports = Welcome;
