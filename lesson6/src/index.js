import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import store, { history, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';

import { App } from './components/App';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <PersistGate persistor={persistor} loading={null}>
                <App />
            </PersistGate>
        </ConnectedRouter>
    </Provider>,
    document.querySelector('#root')
);
