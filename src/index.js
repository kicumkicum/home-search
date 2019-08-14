import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app/app';

import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import {reducer, Operation} from './redux/';
import ymaps from './api/ymaps';


const store = createStore(
	reducer,
	compose(
		applyMiddleware(thunk.withExtraArgument(ymaps)),
		window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (value) => value
	)
);

ReactDOM.render(
	<Provider
		store={store}
	>
		<App />
	</Provider>,
	document.getElementById('root')
);
