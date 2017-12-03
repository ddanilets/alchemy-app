import request from 'superagent';
import uuid from 'node-uuid';
import * as constants from './constants';

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
    const state = getState().game;
    const playerId = uuid.v4();

    new Promise((resolve, reject) => {
      request('POST', 'http://localhost:8000/api/init')
        .set('Content-Type', 'application/json')
        .send({
          player: {
            id: playerId,
            imageName: state.selectedFraction.imageName,
            fraction: state.selectedFraction.id,
            currentHp: state.selectedFraction.health,
          },
        }).end((err, res) => {
          resolve(res.body);
        });
    }).then((data) => {
      dispatch({ type: constants.GAME_INIT, payload: data });
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
      request('POST', 'http://localhost:8000/api/end-turn')
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
      dispatch({ type: constants.END_TURN, payload: data });
    }).catch((e) => {
      console.log(e);
      dispatch({ type: constants.ENABLE_END_TURN });
    });
  };
}