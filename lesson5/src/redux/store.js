import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

const initialState = {
    // chat: {
    //     messages: {
    //         0: [{ text: 'Hello from redux', author: 'robot' }],
    //     },
    // },
};

const store = createStore(
    reducers,
    initialState,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    composeWithDevTools()
);

export { store };
