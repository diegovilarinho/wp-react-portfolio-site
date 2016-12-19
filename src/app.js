import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './pages/App';
import Home from './pages/Home';
import Cursos from './pages/Cursos';
import Sobre from './pages/Sobre';

import Curso from './components/cursos/Curso';

render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="cursos" component={Cursos}>
				<Route path=":nome" component={Curso} />
			</Route>
			<Route path="sobre" component={Sobre} />
		</Route>
	</Router>
	), document.getElementById("app")
);