import React from 'react';

import MenuIconClose from './MenuIconClose';
import MenuInnerContainer from './MenuInnerContainer';

export default class MenuContainer extends React.Component {
  render() {
    return (
      <div className="ish-navigation">
      	<div className="ish-nav-bg ish-theme-rotate"></div>
		<MenuIconClose />
		<MenuInnerContainer />
      </div>
    );
  }
}
