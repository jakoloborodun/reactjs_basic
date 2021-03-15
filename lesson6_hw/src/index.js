import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { history, persistor } from './store';
import { App } from './components/App';

import './index.css';

ReactDOM.render(
    <ReduxProvider store={ store }>
      <ConnectedRouter history={ history }>
        <PersistGate persistor={ persistor } loading={ null }>
          <App/>
        </PersistGate>
      </ConnectedRouter>
    </ReduxProvider>,
    document.querySelector('#root')
);
