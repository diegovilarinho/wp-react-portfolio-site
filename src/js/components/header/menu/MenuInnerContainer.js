import React from 'react';

import MenuLogo from './MenuLogo';
import MenuNavigation from './MenuNavigation';

export default class MenuInnerContainer extends React.Component {
  render() {
    return (
      <div className="ish-nav-container-bg">
      	<div className="ish-nav-container">
      		<MenuLogo />
      		<MenuNavigation />
      	</div>
      </div>
    );
  }
}
