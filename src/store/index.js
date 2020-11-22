import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import persistReducers from './persistReducers';

import sagas from './sagas';
import reducers from './ducks';

const middlewares = [];

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const dummy = (_) => _;

const store = createStore(
  persistReducers(reducers),
  compose(
    applyMiddleware(...middlewares),
    process.env.NODE_ENV === 'development'
      ? console.tron.createEnhancer()
      : dummy
  )
);
const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export default { store, persistor };
