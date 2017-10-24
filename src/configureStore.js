import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import todoApp from './reducers';

import { saveState, loadState } from './localStorage';

const configureStore = () => {
    const store = createStore(todoApp, loadState());
    store.subscribe(throttle(() => {
      saveState({
        todos: store.getState().todos
      });
    }, 1000));

    return store
}


export default configureStore;