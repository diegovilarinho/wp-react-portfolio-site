import React from 'react';
import { Link } from 'react-router';

export default class MenuNavigation extends React.Component {
  render() {
    return (
		<nav id="site-navigation" className="main-navigation ish-widget-element">
			<ul>
				<li>
					<Link to="/" activeClassName="ish-active-item"><span>Home</span></Link>
				</li>
				<li>
					<Link to="/sobre" activeClassName="ish-active-item"><span>Estudos de Caso</span></Link>
				</li>
				<li>
					<Link to="/blog" activeClassName="ish-active-item"><span>Blog</span></Link>
				</li>
				<li>
					<Link to="http://cliente.diegovilarinho.com.br/" target="_blank"><span>Área do Cliente</span></Link>
				</li>
			</ul>
		</nav>
    );
  }
}
