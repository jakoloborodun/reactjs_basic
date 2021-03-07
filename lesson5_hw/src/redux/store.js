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
    composeWithDevTools()
);

export { store };
