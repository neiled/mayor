var React = require("react");

var Navbar = React.createClass({
  toggle: function(event) {
    $.niftyNav('colExpToggle');
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
    								<i className="fa fa-envelope fa-lg"></i>
    								<span className="badge badge-header badge-warning">9</span>
    							</a>

    							<div className="dropdown-menu dropdown-menu-md with-arrow">
    								<div className="pad-all bord-btm">
    									<p className="text-lg text-muted text-thin mar-no">You have 3 messages.</p>
    								</div>
    								<div className="nano scrollable">
    									<div className="nano-content">
    										<ul className="head-list">

    											<li>
    												<a href="#" className="media">
    													<div className="media-left">
    														<img src="img/av2.png" alt="Profile Picture" className="img-circle img-sm"/>
    													</div>
    													<div className="media-body">
    														<div className="text-nowrap">Andy sent you a message</div>
    														<small className="text-muted">15 minutes ago</small>
    													</div>
    												</a>
    											</li>

    											<li>
    												<a href="#" className="media">
    													<div className="media-left">
    														<img src="img/av4.png" alt="Profile Picture" className="img-circle img-sm"/>
    													</div>
    													<div className="media-body">
    														<div className="text-nowrap">Lucy sent you a message</div>
    														<small className="text-muted">30 minutes ago</small>
    													</div>
    												</a>
    											</li>
    										</ul>
    									</div>
    								</div>

    								<div className="pad-all bord-top">
    									<a href="#" className="btn-link text-dark box-block">
    										<i className="fa fa-angle-right fa-lg pull-right"></i>Show All Messages
    									</a>
    								</div>
    							</div>
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
    						<li className="mega-dropdown">
    							<a href="#" className="mega-dropdown-toggle">
    								<i className="fa fa-th-large fa-lg"></i>
    							</a>
    							<div className="dropdown-menu mega-dropdown-menu">
    								<div className="clearfix">
    									<div className="col-sm-12 col-md-3">

    										<div className="text-center bg-purple pad-all">
    											<h3 className="text-thin mar-no">Weekend shopping</h3>
    											<div className="pad-ver box-inline">
    												<span className="icon-wrap icon-wrap-lg icon-circle bg-trans-light">
    													<i className="fa fa-shopping-cart fa-4x"></i>
    												</span>
    											</div>
    											<p className="pad-btm">
    												Members get <span className="text-lg text-bold">50%</span> more points. Lorem ipsum dolor sit amet!
    											</p>
    											<a href="#" className="btn btn-purple">Learn More...</a>
    										</div>

    									</div>
    									<div className="col-sm-4 col-md-3">

    										<ul className="list-unstyled">
    											<li className="dropdown-header">Pages</li>
    											<li><a href="#">Profile</a></li>
    											<li><a href="#">Search Result</a></li>
    											<li><a href="#">FAQ</a></li>
    											<li><a href="#">Sreen Lock</a></li>
    											<li><a href="#" className="disabled">Disabled</a></li>
    											<li className="divider"></li>
    											<li className="dropdown-header">Icons</li>
    											<li><a href="#"><span className="pull-right badge badge-purple">479</span> Font Awesome</a></li>
    											<li><a href="#">Skycons</a></li>
    										</ul>

    									</div>
    									<div className="col-sm-4 col-md-3">

    										<ul className="list-unstyled">
    											<li className="dropdown-header">Mailbox</li>
    											<li><a href="#"><span className="pull-right label label-danger">Hot</span>Indox</a></li>
    											<li><a href="#">Read Message</a></li>
    											<li><a href="#">Compose</a></li>
    											<li className="divider"></li>
    											<li className="dropdown-header">Featured</li>
    											<li><a href="#">Smart navigation</a></li>
    											<li><a href="#"><span className="pull-right badge badge-success">6</span>Exclusive plugins</a></li>
    											<li><a href="#">Lot of themes</a></li>
    											<li><a href="#">Transition effects</a></li>
    										</ul>

    									</div>
    									<div className="col-sm-4 col-md-3">

    										<ul className="list-unstyled">
    											<li className="dropdown-header">Components</li>
    											<li><a href="#">Tables</a></li>
    											<li><a href="#">Charts</a></li>
    											<li><a href="#">Forms</a></li>
    											<li className="divider"></li>
    											<li>
    												<form role="form" className="form">
    													<div className="form-group">
    														<label className="dropdown-header" for="demo-megamenu-input">Newsletter</label>
    														<input id="demo-megamenu-input" type="email" placeholder="Enter email" className="form-control"/>
    													</div>
    													<button className="btn btn-primary btn-block" type="submit">Submit</button>
    												</form>
    											</li>
    										</ul>
    									</div>
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
    								<div className="username hidden-xs">John Doe</div>
    							</a>


    							<div className="dropdown-menu dropdown-menu-md dropdown-menu-right with-arrow panel-default">

    								<div className="pad-all bord-btm">
    									<p className="text-lg text-muted text-thin mar-btm">750Gb of 1,000Gb Used</p>
    								</div>


    								<ul className="head-list">
    									<li>
    										<a href="#">
    											<i className="fa fa-user fa-fw fa-lg"></i> Profile
    										</a>
    									</li>
    									<li>
    										<a href="#">
    											<span className="badge badge-danger pull-right">9</span>
    											<i className="fa fa-envelope fa-fw fa-lg"></i> Messages
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
