import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { rraReducer } from 'redux-remote-actions/lib/client';
import applicationReducer from './application/reducer';

export default combineReducers({
  routing: routerReducer,
  application: applicationReducer,
  remoteActions: rraReducer,
});
