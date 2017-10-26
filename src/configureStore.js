import { createStore, compose, applyMiddleware } from 'redux';

import todoApp from './reducers';

const configureStore = () => {
    const addLoggingToDispatch = (store) => {
      const rawDispatch = store.dispatch;
      return (action) => {
        console.log('state before action', store.getState());
        console.log('action', action);
        rawDispatch(action);
        console.log('state after action', store.getState());
      }
    }
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(todoApp, composeEnhancers());
    if(process.env.NODE_ENV !== 'production') {
      store.dispatch = addLoggingToDispatch(store);
    }

    return store
}


export default configureStore;