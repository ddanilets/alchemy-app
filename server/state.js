import uuid from 'node-uuid';
import * as constants from './constants';
import * as helpers from './helpers';

class State {
  constructor() {
    this._sessions = {};
    this._pendingSessions = [];
  }

  createSession(player) {
    const sessionId = uuid.v4();
    this._sessions[sessionId] = {
      id: sessionId,
      player1: player,
      state: constants.PENDING,
    };
    this._pendingSessions.push(sessionId);
    return sessionId;
  }

  addPlayer(player) {
    const id = this._pendingSessions.pop();
    this._sessions[id].player2 = player;
    this._sessions[id].state = constants.READY;
    return id;
  }

  getSessions() {
    return this._sessions;
  }

  getSessionById(id) {
    return this._sessions[id];
  }

  isPending() {
    return this._pendingSessions.length > 0;
  }

  init(player) {
    if (this.isPending()) {
      const id = this.addPlayer(player);
      return { state: constants.READY, id };
    }
    const id = this.createSession(player);
    return { state: constants.PENDING, id };
  }

  parsePayload(players, id) {
    const workSession = this._sessions[id];
    helpers.activateHeroPower(players[0], workSession);
    helpers.activateHeroPower(players[1], workSession);
    players[0].potions.forEach((potion) => {
      helpers.usePotion(players[0], players[1], potion, workSession);
    });
    players[1].potions.forEach((potion) => {
      helpers.usePotion(players[1], players[0], potion, workSession);
    });
    return this.createPayload(players, id);
  }

  createPayload(players, id) {
    const workSession = this._sessions[id];
    workSession.usedPotions = {
      player1: {
        id: players[0].id,
        potions: players[0].potions,
      },
      player2: {
        id: players[1].id,
        potions: players[1].potions,
      },
    };
  }

  finishTurn(player, id) {
    const workSession = this._sessions[id];
    if (workSession.state === constants.PENDING) {
      const players = [player, workSession.playerTurn];
      workSession.state = constants.READY;
      this.parsePayload(players, id);
      return { state: constants.READY };
    }
    workSession.state = constants.PENDING;
    workSession.playerTurn = player;
    return { state: constants.PENDING };
  }
}

const state = new State();

export default state;
