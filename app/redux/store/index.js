import { applyMiddleware, createStore } from 'redux';
import rootReducer from 'app/redux/reducers'; // eslint-disable-line import/no-extraneous-dependencies
import Immutable from 'immutable';
import createSagaMiddleware from 'redux-saga';

export default function makeStore() {
  const initialState = Immutable.fromJS({});

  const sagaMiddleware = createSagaMiddleware();
  const sagaMiddlewares = [];

  const store = (applyMiddleware(sagaMiddleware)(createStore))(
    rootReducer,
    initialState
  );

  sagaMiddlewares.forEach(saga => sagaMiddleware.run(saga));

  return store;
}
