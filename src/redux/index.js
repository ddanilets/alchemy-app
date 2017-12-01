import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { rraReducer } from 'redux-remote-actions/lib/client';
import gameReducer from './game/reducer';

export default combineReducers({
  routing: routerReducer,
  game: gameReducer,
  remoteActions: rraReducer,
});
