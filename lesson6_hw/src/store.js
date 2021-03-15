import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import reducers from './reducers';
import middlewares from './middlewares';

const initialState = {
  chat: {
    chats: [
      { name: 'chat 1', id: 1, isUnread: false },
      { name: 'chat 2', id: 2, isUnread: false },
    ],
    messages: {
      1: [
        {
          text: 'Hello from redux',
          author: 'bot',
          creation: new Date().toLocaleString(),
        },
      ],
    },
  }
};

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['chat', 'profile'],
};

export const history = createBrowserHistory();
const persistedReducer = persistReducer(persistConfig, reducers(history));

const store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(routerMiddleware(history), ...middlewares)
    )
);

export const persistor = persistStore(store);

export default store;
