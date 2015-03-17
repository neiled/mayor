var React = require("react");

var Navbar = React.createClass({
  toggle: function(event) {
    $.niftyNav('colExpToggle');
  },
  componentDidMount: function() {
    // STYLEABLE SCROLLBARS
		// =================================================================
		// Require nanoScroller
		// http://jamesflorentino.github.io/nanoScrollerJS/
		// =================================================================
		var nano = $('.nano');
		if(nano.length) nano.nanoScroller({
			preventPageScrolling: true
		});

		// Update nancoscroller
		$('#navbar-container .navbar-top-links').on('shown.bs.dropdown', '.dropdown', function () {
			$(this).find('.nano').nanoScroller({preventPageScrolling: true});
		});
  },
  render: function() {
    var url_img_av1 = require("../img/av1.png");
    var url_img_logo = require("../img/logo.png");
    return (
    <header id="navbar">
    			<div id="navbar-container" className="boxed">

    				<div className="navbar-header">
    					<a href="/" className="navbar-brand">
    						<img src={url_img_logo} alt="Model Mayor" className="brand-icon"/>
    						<div className="brand-title">
    							<span className="brand-text">Model Mayor</span>
    						</div>
    					</a>
    				</div>


    				<div className="navbar-content clearfix">
    					<ul className="nav navbar-top-links pull-left">

    						<li className="tgl-menu-btn">
    							<a className="mainnav-toggle" href="#" onClick={this.toggle}>
    								<i className="fa fa-navicon fa-lg"></i>
    							</a>
    						</li>


                <li className="dropdown">
    							<a href="#" data-toggle="dropdown" className="dropdown-toggle">
    								<i className="fa fa-bell fa-lg"></i>
    								<span className="badge badge-header badge-danger">5</span>
    							</a>

    							<div className="dropdown-menu dropdown-menu-md with-arrow">
    								<div className="pad-all bord-btm">
    									<p className="text-lg text-muted text-thin mar-no">You have 3 messages.</p>
    								</div>
    								<div className="nano scrollable">
    									<div className="nano-content">
    										<ul className="head-list">

    											<li>
    												<a href="#">
    													<div className="clearfix">
    														<p className="pull-left">Progressbar</p>
    														<p className="pull-right">70%</p>
    													</div>
    												</a>
    											</li>

    											<li>
    												<a href="#" className="media">
    													<div className="media-left">
    														<span className="icon-wrap icon-circle bg-primary">
    															<i className="fa fa-comment fa-lg"></i>
    														</span>
    													</div>
    													<div className="media-body">
    														<div className="text-nowrap">Circle Icon</div>
    														<small className="text-muted">15 minutes ago</small>
    													</div>
    												</a>
    											</li>

    											<li>
    												<a href="#" className="media">
    											<span className="badge badge-success pull-right">90%</span>
    													<div className="media-left">
    														<span className="icon-wrap icon-circle bg-danger">
    															<i className="fa fa-hdd-o fa-lg"></i>
    														</span>
    													</div>
    													<div className="media-body">
    														<div className="text-nowrap">Circle icon with badge</div>
    														<small className="text-muted">50 minutes ago</small>
    													</div>
    												</a>
    											</li>

    											<li>
    												<a href="#" className="media">
    													<div className="media-left">
    														<span className="icon-wrap bg-info">
    															<i className="fa fa-file-word-o fa-lg"></i>
    														</span>
    													</div>
    													<div className="media-body">
    														<div className="text-nowrap">Square Icon</div>
    														<small className="text-muted">Last Update 8 hours ago</small>
    													</div>
    												</a>
    											</li>

    											<li>
    												<a href="#" className="media">
    											<span className="label label-danger pull-right">New</span>
    													<div className="media-left">
    														<span className="icon-wrap bg-purple">
    															<i className="fa fa-comment fa-lg"></i>
    														</span>
    													</div>
    													<div className="media-body">
    														<div className="text-nowrap">Square icon with label</div>
    														<small className="text-muted">Last Update 8 hours ago</small>
    													</div>
    												</a>
    											</li>
    										</ul>
    									</div>
    								</div>

    								<div className="pad-all bord-top">
    									<a href="#" className="btn-link text-dark box-block">
    										<i className="fa fa-angle-right fa-lg pull-right"></i>Show All Notifications
    									</a>
    								</div>
    							</div>
    						</li>
    					</ul>
    					<ul className="nav navbar-top-links pull-right">
    						<li id="dropdown-user" className="dropdown">
    							<a href="#" data-toggle="dropdown" className="dropdown-toggle text-right">
    								<span className="pull-right">
    									<img className="img-circle img-user media-object" src={url_img_av1} alt="Profile Picture"/>
    								</span>
    								<div className="username hidden-xs">Account</div>
    							</a>


    							<div className="dropdown-menu dropdown-menu-md dropdown-menu-right with-arrow panel-default">

    								<ul className="head-list">
    									<li>
    										<a href="#">
    											<i className="fa fa-user fa-fw fa-lg"></i> Profile
    										</a>
    									</li>
    									<li>
    										<a href="#">
    											<span className="label label-success pull-right">New</span>
    											<i className="fa fa-gear fa-fw fa-lg"></i> Settings
    										</a>
    									</li>
    								</ul>

    								<div className="pad-all text-right">
    									<a href="/auth/logout" className="btn btn-primary">
    										<i className="fa fa-sign-out fa-fw"></i> Logout
    									</a>
    								</div>
    							</div>
    						</li>

    					</ul>
    				</div>

    			</div>
    		</header>
    )
  }
});

module.exports = Navbar;
