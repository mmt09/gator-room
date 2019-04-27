import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import Routes from './routes';
// eslint-disable-next-line import/no-unresolved
import 'assets/scss/material-kit-react.scss?v=1.4.0';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

// This an entry point to our React app
ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.querySelector('#root')
);
