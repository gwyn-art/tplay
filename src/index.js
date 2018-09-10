import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './saga';
import { BrowserRouter as Router } from 'react-router-dom';

let middleware;
let initialState = {
	invites: []
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose,
	sagaMiddleware = createSagaMiddleware();

if (process && process.env && process.env.NODE_ENV === 'production') {
	middleware = applyMiddleware(sagaMiddleware);
} else {
	middleware = applyMiddleware(sagaMiddleware);
}

const store = createStore(reducers, initialState, composeEnhancers(middleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
