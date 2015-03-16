var React = require("react");
var Router = require('react-router'); // or var Router = ReactRouter; in browsers

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var MainNav = React.createClass({
  getInitialState: function() {
    return {user: null, total:0, coins:0};
  },
  componentDidMount: function() {
    $.get("/user/current", function(result) {
      if(this.isMounted()) {
        this.setState({user: result});
        var socket = io.connect();
        socket.on('inventory:update:'+result.user.id, function (data) {
          this.setState({total:data.total, coins: data.coins})
        }.bind(this));
      }
    }.bind(this));
    $.get("/user/inventory", function(result) {
      if(this.isMounted()) {
        this.setState({total: result.total});
        this.setState({coins: result.coins});
      }
    }.bind(this));

  },    
    render: function() {
        var style_nano = {right: '-16px'};        
        return (
        <nav id="mainnav-container">
				<div id="mainnav">
					<div id="mainnav-shortcut">
						<ul className="list-unstyled">
							<li title="" className="col-xs-4" data-original-title="" data-content="Fishing">
								<Link className="shortcut-grid" to="fishing" activeClassName="active-link"><i className="fa fa-ship"></i></Link>
							</li>
							<li title="" className="col-xs-4" data-original-title="" data-content="Store">
								<Link className="shortcut-grid" to="store" activeClassName="active-link"><i className="fa fa-shopping-cart"></i></Link>
							</li>
							<li title="" className="col-xs-4" data-original-title="" data-content="Pockets">
								<Link className="shortcut-grid" to="inventory" activeClassName="active-link"><i className="fa fa-cube"></i></Link>
							</li>
						</ul>
					</div>

					<div id="mainnav-menu-wrap">
						<div className="nano has-scrollbar">
							<div tabindex="0" className="nano-content" style={style_nano}>
								<ul className="list-group" id="mainnav-menu">
						
									<li className="list-header">What to do?</li>
									
                                    <li><Link to="hunting" activeClassName="active-link"><span className="menu-title">Hunting</span></Link></li>
                                    <li><Link to="fishing" activeClassName="active-link"><span className="menu-title">Fishing</span></Link></li>
                                    <li><Link to="diving" activeClassName="active-link"><span className="menu-title">Diving</span></Link></li>
                                    <li><Link to="gardening" activeClassName="active-link"><span className="menu-title">Gardening</span></Link></li>
                                    <li><Link to="museum" activeClassName="active-link"><span className="menu-title">Museum</span></Link></li>
                                    <li><Link to="store" activeClassName="active-link"><span className="menu-title">Store</span></Link></li>
                                    <li><Link to="construction" activeClassName="active-link"><span className="menu-title">Construction</span></Link></li>
                                    <li className="list-divider" activeClassName="active-link"></li>
                                    <li><Link to="inventory" activeClassName="active-link"><span className="menu-title">Pockets <span className="pull-right badge badge-purple">{this.state.total}</span></span></Link></li>
                                    <li><Link to="coins" activeClassName="active-link"><span className="menu-title">Coins <span className="pull-right badge badge-purple">{this.state.coins}</span></span></Link></li>

								</ul>

								<div className="mainnav-widget">

									<div className="show-small">
										<a href="#" data-toggle="menu-widget" data-target="#demo-wg-server">
											<i className="fa fa-desktop"></i>
										</a>
									</div>

									<div className="hide-small mainnav-widget-content" id="demo-wg-server">
										<ul className="list-group">
											<li className="list-header pad-no pad-ver">Widget on Navigation Menu</li>
											<li className="mar-btm">
												<span className="label label-primary pull-right">15%</span>
												<p>CPU Usage</p>
											</li>
											<li className="mar-btm">
												<span className="label label-purple pull-right">75%</span>
												<p>Bandwidth</p>
											</li>
											<li className="pad-ver"><a className="btn btn-success btn-bock" href="#">View Details</a></li>
										</ul>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
			</nav>            
            );
    }
});

module.exports = MainNav;