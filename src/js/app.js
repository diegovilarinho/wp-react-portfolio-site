import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import ReduxPromise from 'redux-promise';

import reducers from './reducers';

import App from './pages/App';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Sobre from './pages/Sobre';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers); //Cria o Application State

// Cria um enhanced history para sincronizar eventos de navegação com a store
const history = syncHistoryWithStore(browserHistory, store);

render((
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Home} />
				<Route path="blog" component={Blog} />
				<Route path="sobre" component={Sobre} />
			</Route>
		</Router>
	</Provider>
	), document.getElementById("app")
);