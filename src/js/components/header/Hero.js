import React from 'react';

export default class Hero extends React.Component {
  render() {
    return (
		<div className="site-branding">
			<h1 className="site-title">
				When <span>Love</span><br /> &amp; <span>Passion</span> meet
			</h1>
			<h2 className="site-subtitle">
				beautiful <span>things</span> start to <span>work</span>!
			</h2>
			<p className="site-description">
				<span>You don't believe?</span>
			</p>
		</div>
    );
  }
}
