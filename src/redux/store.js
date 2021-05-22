import { createStore } from 'redux';
import rootReducer from './reducers';
import { loadState, saveState } from './storage';

const persistedState = loadState();
const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;