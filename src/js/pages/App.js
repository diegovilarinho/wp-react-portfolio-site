import React from 'react';
import ReactDOM from 'react-dom';
import { Link, IndexLink } from 'react-router';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			contentInitialTopDistance: 0
		};
	}s

	render() {
		return (
			<div className="page-template-blog ish-content-overlay-large ish-blurred ish-color16">
				<div className="ish-blurred-overlay"></div>
	    		<div className="site">
	  				<Link to="#homeContent" className="skip-link screen-reader-text"></Link>

	  				<Header />

	  				<div id="content" className="site-content ish-content-parallax" data-initial-top={this.state.contentInitialTopDistance}>
						<div id="primary" className="content-area">
							<main id="main" className="site-main">
								<div className="ish-container-fluid">
									<div className="ish-container-inner">
										{this.props.children}
									</div>
								</div>
							</main>
						</div>
					</div>

					<Footer />

	    		</div>
			</div>
		);
	}
};