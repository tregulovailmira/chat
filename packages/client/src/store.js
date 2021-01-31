import { applyMiddleware, createStore } from 'redux';
import { createMiddleware } from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddkeware = createMiddleware();

const rootMiddleware = applyMiddleware(sagaMiddkeware);

const store = createStore(rootReducer, rootMiddleware);

sagaMiddkeware.run(rootSaga);

module.exports = store;
