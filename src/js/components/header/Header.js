import React from 'react';

import Logo from './Logo';
import MenuIconOpen from './menu/MenuIconOpen';
import MenuContainer from './menu/MenuContainer';
import Hero from './Hero';

export default class header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
		<header id="masthead" className="site-header">
			<div className="ish-container-fluid">
				<div className="ish-container-inner">
					<div className="ish-row">
						<div className="ish-header">
							<Logo />
							<MenuIconOpen />
						</div>
					</div>
					<MenuContainer />
				</div>
			</div>
		</header>
    );
  }
}
