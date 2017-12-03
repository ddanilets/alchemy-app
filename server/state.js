import uuid from 'node-uuid';
import * as constants from './constants';
import * as helpers from './helpers';
import ingridients from './ingridients';
import * as effectTypes from './effectTypes';
import { applyHeroEffect } from './effects';
class State {
  constructor() {
    this._sessions = {};
    this._pendingSessions = [];
  }

  createSession(player) {
    const sessionId = uuid.v4();
    const data = this.populateIngridients(player, effectTypes.DEFAULT_INGRIDIENTS_SLOTS);
    this._sessions[sessionId] = {
      id: sessionId,
      player1: {
        ...player,
        isInvisible: false,
        shouldRedirect: false,
        shouldMirror: false,
        slotReveal: false,
        shouldMiss: false,
        evasion: 0,
        maxTime: 60,
        maxHp: player.currentHp,
        multiplier: 1,
        armor: 0,
        maxInventorySlots: {
          value: effectTypes.DEFAULT_INGRIDIENTS_SLOTS,
          left: 0,
        },
        maxPotionSlots: {
          value: effectTypes.DEFAULT_POTION_SLOTS,
          left: 0,
        },
        maxCouldronSlots: {
          value: effectTypes.DEFAULT_COULDRON_SLOTS,
          left: 0,
        },
        modifiers: [],
        ingridients: data.ingridients,
        droppedIngridients: data.droppedIngridients,
      },
      state: constants.PENDING,
    };
    this._pendingSessions.push(sessionId);
    return sessionId;
  }

  populateIngridients(player, quantity, cachedIngridients) {
    let preparedIngridients = Object.values(ingridients).filter((el) => {
      return (el.fraction === player.fraction || el.fraction === 999);
    });
    const droppedIngridients = player.droppedIngridients || {};
    preparedIngridients = preparedIngridients.filter((el) => {
      if (el.level < 2 || !droppedIngridients[el.id]) {
        return true;
      }
      if (el.level === 2 && droppedIngridients[el.id] < 3) {
        return true;
      }
      return el.level === 3 && droppedIngridients[el.id] < 1;
    });
    if (cachedIngridients) {
      preparedIngridients = preparedIngridients.filter((el) => {
        return !cachedIngridients.map((item) => {
          return item.id;
        }).includes(el.id);
      });
      const deficite = quantity - cachedIngridients.length;
      for (let i = 0; i < deficite; i++) {
        const index = Math.floor(Math.random() * preparedIngridients.length);
        const element = Object.assign({}, preparedIngridients[index]);
        preparedIngridients = preparedIngridients.filter((el) => {
          return el.id !== element.id;
        });
        cachedIngridients.push(element);
        if (element.level > 1) {
          if (typeof droppedIngridients[element.id] !== 'undefined') {
            droppedIngridients[element.id] += 1;
          } else {
            droppedIngridients[element.id] = 1;
          }
        }
      }
      return { ingridients: cachedIngridients, droppedIngridients };
    }
    const finalIngridients = new Array(quantity).fill(null).map(() => {
      const index = Math.floor(Math.random() * preparedIngridients.length);
      const element = Object.assign({}, preparedIngridients[index]);
      preparedIngridients = preparedIngridients.filter((el) => {
        return el.id !== element.id;
      });
      return element;
    });
    finalIngridients.forEach((el) => {
      if (el.level > 1) {
        if (typeof droppedIngridients[el.id] !== 'undefined') {
          droppedIngridients[el.id] += 1;
        } else {
          droppedIngridients[el.id] = 1;
        }
      }
    });
    return { ingridients: finalIngridients, droppedIngridients };
  }

  addPlayer(player) {
    const id = this._pendingSessions.pop();
    const data = this.populateIngridients(player, effectTypes.DEFAULT_INGRIDIENTS_SLOTS);
    this._sessions[id].player2 = {
      ...player,
      isInvisible: false,
      shouldRedirect: false,
      shouldMirror: false,
      slotReveal: false,
      shouldMiss: false,
      evasion: 0,
      maxTime: 60,
      multiplier: 1,
      maxHp: player.currentHp,
      armor: 0,
      maxInventorySlots: {
        value: effectTypes.DEFAULT_INGRIDIENTS_SLOTS,
        left: 0,
      },
      maxPotionSlots: {
        value: effectTypes.DEFAULT_POTION_SLOTS,
        left: 0,
      },
      maxCouldronSlots: {
        value: effectTypes.DEFAULT_COULDRON_SLOTS,
        left: 0,
      },
      modifiers: [],
      ingridients: data.ingridients,
      droppedIngridients: data.droppedIngridients,
    };
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
    const potionsArray = [];
    players[0].potions.forEach((potion) => {
      potionsArray.push(helpers.usePotion.bind(this, players[0], players[1], potion, workSession));
    });
    players[1].potions.forEach((potion) => {
      potionsArray.push(helpers.usePotion.bind(this, players[1], players[0], potion, workSession));
    });
    for (let i = potionsArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [potionsArray[i], potionsArray[j]] = [potionsArray[j], potionsArray[i]];
    }
    potionsArray.forEach((el) => {
      el();
    });

    applyHeroEffect(workSession.player1, workSession.player2);
    applyHeroEffect(workSession.player2, workSession.player1);

    workSession.player1.isInvisible = false;
    workSession.player2.isInvisible = false;
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
    const player1CachedIngridients =
      players[0].id === workSession.player1.id ? players[0].ingridients : players[1].ingridients;
    const player2CachedIngridients =
      players[0].id === workSession.player2.id ? players[0].ingridients : players[1].ingridients;
    const player1Ingridients = this.populateIngridients(workSession.player1,
      workSession.player1.maxInventorySlots.value, player1CachedIngridients);
    const player2Ingridients = this.populateIngridients(workSession.player2,
      workSession.player2.maxInventorySlots.value, player2CachedIngridients);
    workSession.player1.ingridients = player1Ingridients.ingridients;
    workSession.player1.droppedIngridients = player1Ingridients.droppedIngridients;
    workSession.player2.ingridients = player2Ingridients.ingridients;
    workSession.player2.droppedIngridients = player2Ingridients.droppedIngridients;
    State.flushModifiers(workSession.player1);
    State.flushModifiers(workSession.player2);
  }

  static flushModifiers(player) {
    if (player.maxInventorySlots.left > 0) {
      --player.maxInventorySlots.left;
    }
    if (player.maxPotionSlots.left > 0) {
      --player.maxInventorySlots.left;
    }
    if (player.maxCouldronSlots.left > 0) {
      --player.maxCouldronSlots.left;
    }
    player.isInvisible = false;
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
