/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Provider } from 'react-redux';
import { Route, Router, browserHistory } from 'react-router';
import makeStore from 'app/redux/store'; // eslint-disable-line import/no-extraneous-dependencies

// import RootHandler

const makeApp = () => {
  const store = makeStore();

  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" comoponent={RootHandler} />
      </Router>
    </Provider>
  );
};

const app = makeApp();

export default app;
