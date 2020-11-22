import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import history from './services/history';

import './config/ReactotronConfig';
import Store from './store';

import App from './App';

const Application = () => (
  <Provider store={Store.store}>
    <PersistGate persistor={Store.persistor}>
      <Router history={history}>
        <App />
      </Router>
    </PersistGate>
  </Provider>
);

ReactDOM.render(<Application />, document.getElementById('root'));
