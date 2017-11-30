/* global window */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import { rraMiddleware } from 'redux-remote-actions/lib/client';
import reducer from './index';
import DevTools from './DevTools';

export default function configureStore(baseHistory, initialState = {}) {
  const reduxRouterMiddleware = routerMiddleware(baseHistory);
  const middleware = applyMiddleware(reduxRouterMiddleware, thunk, rraMiddleware /* logger */);
  const store = createStore(reducer, initialState, compose(
    middleware,
    DevTools.instrument()
  ));
  const history = syncHistoryWithStore(baseHistory, store);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('./index', () => {
      return store.replaceReducer(require('./index').default);
    });
  }

  return { store, history };
}
