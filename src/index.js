import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import todoApp from './reducers';
import App from './components/App';
import { saveState, loadState } from './localStorage';

const store = createStore(todoApp, loadState());
store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos
  });
}, 1000))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
