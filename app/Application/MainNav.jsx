var React = require("react");

var MainNav = React.createClass({
    render: function() {
        var style_nano = {right: '-16px'};        
        return (
        <nav id="mainnav-container">
				<div id="mainnav">


					<div id="mainnav-shortcut">
						<ul className="list-unstyled">
							<li title="" className="col-xs-4" data-original-title="" data-content="Shortcut 1">
								<a className="shortcut-grid" href="#">
									<i className="fa fa-car"></i>
								</a>
							</li>
							<li title="" className="col-xs-4" data-original-title="" data-content="Shortcut 2">
								<a className="shortcut-grid" href="#">
									<i className="fa fa-taxi"></i>
								</a>
							</li>
							<li title="" className="col-xs-4" data-original-title="" data-content="Shortcut 3">
								<a className="shortcut-grid" href="#">
									<i className="fa fa-bus"></i>
								</a>
							</li>
						</ul>
					</div>

					<div id="mainnav-menu-wrap">
						<div className="nano has-scrollbar">
							<div tabindex="0" className="nano-content" style={style_nano}>
								<ul className="list-group" id="mainnav-menu">
						
									<li className="list-header">Link List</li>
						
									<li className="active-link">
										<a href="#">
											<i className="fa fa-plane"></i>
											<span className="menu-title">Active state</span>
										</a>
									</li>
						
									<li>
										<a href="#">
											<i className="fa fa-dashboard"></i>
											<span className="menu-title">
												<strong>Bolder</strong>
											</span>
										</a>
									</li>
						

									<li>
										<a href="#">
											<i className="fa fa-tag"></i>
											<span className="menu-title">
												With label
												<span className="label label-success pull-right">New</span>
											</span>
										</a>
									</li>
						
									<li>
										<a href="#">
											<i className="fa fa-rocket"></i>
											<span className="menu-title">
												With badge
												<span className="pull-right badge badge-purple">7</span>
											</span>
										</a>
									</li>
						
									<li className="list-divider"></li>
						
									<li className="list-header">Submenus</li>
						
									<li className="active-sub active">
										<a href="#">
											<i className="fa fa-th"></i>
											<span className="menu-title">Active State</span>
											<i className="arrow"></i>
										</a>
						
										<ul className="collapse in">
											<li><a href="#">Link</a></li>
											<li className="active-link"><a href="#">Active link</a></li>
											<li><a href="#">Another link</a></li>
											<li><a href="#">Some else here</a></li>
											<li className="list-divider"></li>
											<li><a href="#">Separate link</a></li>
											
										</ul>
									</li>
						
									<li>
										<a href="#">
											<i className="fa fa-taxi"></i>
											<span className="menu-title">
												<strong>Bolder</strong>
											</span>
											<i className="arrow"></i>
										</a>
						
										<ul className="collapse">
											<li><a href="#">Link</a></li>
											<li><a href="#">Another link</a></li>
											<li><a href="#">Some else here</a></li>
											<li className="list-divider"></li>
											<li><a href="#">Separate link</a></li>
											
										</ul>
									</li>
						
									<li>
										<a href="#">
											<i className="fa fa-road"></i>
											<span className="menu-title">
												With label
												<span className="label label-danger pull-right">Hot</span>
											</span>
										</a>
						
										<ul className="collapse">
											<li><a href="#">Link</a></li>
											<li><a href="#">Another link</a></li>
											<li><a href="#">Some else here</a></li>
											<li className="list-divider"></li>
											<li><a href="#">Separate link</a></li>
											
										</ul>
									</li>
						
									<li>
										<a href="#">
											<i className="fa fa-plug"></i>
											<span className="menu-title">
												With badge
												<span className="pull-right badge badge-success">3</span>
											</span>
										</a>
						
										<ul className="collapse">
											<li><a href="#">Link</a></li>
											<li><a href="#">Another link</a></li>
											<li><a href="#">Some else here</a></li>
											<li className="list-divider"></li>
											<li><a href="#">Separate link</a></li>
											
										</ul>
									</li>
						
									<li className="list-divider"></li>
						
									<li className="list-header">Multi level</li>

									<li>
										<a href="#">
											<i className="fa fa-plus-square"></i>
											<span className="menu-title">Menu Level</span>
											<i className="fa arrow"></i>
										</a>

										<ul className="collapse">
											<li><a href="#">Second Level Item</a></li>
											<li><a href="#">Second Level Item</a></li>
											<li><a href="#">Second Level Item</a></li>
											<li className="list-divider"></li>
											<li>
												<a href="#">Third Level<i className="arrow"></i></a>

												<ul className="collapse">
													<li><a href="#">Third Level Item</a></li>
													<li><a href="#">Third Level Item</a></li>
													<li><a href="#">Third Level Item</a></li>
													<li><a href="#">Third Level Item</a></li>
												</ul>
											</li>
											<li>
												<a href="#">Third Level<i className="arrow"></i></a>

												<ul className="collapse">
													<li><a href="#">Third Level Item</a></li>
													<li><a href="#">Third Level Item</a></li>
													<li><a href="#">Third Level Item</a></li>
													<li className="list-divider"></li>
													<li><a href="#">Third Level Item</a></li>
													<li><a href="#">Third Level Item</a></li>
												</ul>
											</li>
										</ul>
									</li>

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