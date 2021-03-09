import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';
import { loadState, saveState } from './localStorage';

const initialState = loadState();

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools()
);

store.subscribe(() => {
  saveState(store.getState());
});

export { store };
