import React from 'react';

export default class MenuLogo extends React.Component {
  render() {
    return (
		<div className="ish-widget-element">
			<a href="index.html"><img src="../../media/logo.svg" className="ish-logo-widget" alt="Logo Diego Vilarinho" /></a>
			<div className="ish-tagline-widget ish-txt-color1">Unique Portfolio</div>
		</div>
    );
  }
}
