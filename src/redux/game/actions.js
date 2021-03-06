import request from 'superagent';
import uuid from 'node-uuid';
import { push } from 'react-router-redux';
import * as constants from './constants';

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://alchemy-battles.herokuapp.com' :
  'http://localhost:8000';


export function changeLanguage(langauge) {
  return { type: constants.CHANGE_LANGUAGE, payload: langauge };
}

export function dropIngridient(ingridient) {
  return { type: constants.DROP_INGRIDIENT, payload: ingridient };
}

export function cookPotion() {
  return { type: constants.COOK_POTION, payload: null };
}

export function init() {
  return (dispatch, getState) => {
    if (!getState().game.canInitGame) {
      return;
    }
    dispatch({ type: constants.DISABLE_GAME_INIT });
    const state = getState().game;
    const playerId = uuid.v4();

    new Promise((resolve, reject) => {
      request('POST', `${baseUrl}/api/init`)
        .set('Content-Type', 'application/json')
        .send({
          player: {
            id: playerId,
            imageName: state.selectedFraction.imageName,
            fraction: state.selectedFraction.id,
            currentHp: state.selectedFraction.health,
            armor: state.selectedFraction.armor || 0,
          },
        }).end((err, res) => {
          resolve(res.body);
        });
    }).then((data) => {
      dispatch({ type: constants.GAME_INIT, payload: data });
      dispatch({ type: constants.ENABLE_GAME_INIT });
      dispatch(push('/play'));
    });
  };
}

export function playPotion(potion) {
  return { type: constants.PLAY_POTION, payload: potion };
}

export function endTurn() {
  return (dispatch, getState) => {
    const state = getState().game;
    dispatch({ type: constants.DISABLE_END_TURN, });
    new Promise((resolve, reject) => {
      request('POST', `${baseUrl}/api/end-turn`)
        .set('Content-Type', 'application/json')
        .send({
          player: {
            id: state.self.id,
            potions: state.playedPotions,
            ingridients: state.self.ingridients,
          },
          id: state.id,
        }).end((err, res) => {
        resolve(res.body);
      });
    }).then((data) => {
      if (data.self.currentHp < 1) {
        dispatch(push('/defeat'));
      } else if (data.enemy.currentHp < 1) {
        dispatch(push('/victory'));
      }
      dispatch({ type: constants.END_TURN, payload: data });
    }).catch((e) => {
      console.log(e);
      dispatch({ type: constants.ENABLE_END_TURN });
    });
  };
}

export function createGame(payload) {
  return (dispatch) => {
    dispatch({ type: constants.CREATE_GAME, payload });
    dispatch(init());
  };
}