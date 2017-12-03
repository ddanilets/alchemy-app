import { Router as expressRouter } from 'express';
import bodyParser from 'body-parser';
import state from './state';
import * as constants from './constants';
const router = expressRouter();
router.use(bodyParser.json());

router.post('/init', (req, res) => {
  const currentState = state.init(req.body.player);
  const interval = setInterval(() => {
    if (currentState.state === constants.READY
      || state.getSessionById(currentState.id).state === constants.READY) {
      const data = state.getSessionById(currentState.id);
      if (req.body.player.id === data.player1.id) {
        res.send({
          self: data.player1,
          enemy: {
            id: data.player2.id,
            currentHp: data.player2.currentHp,
            armor: data.player2.armor,
            maxHp: data.player2.maxHp,
            imageName: data.player2.imageName,
          },
          id: data.id,
        });
      } else {
        res.send({
          self: data.player2,
          enemy: {
            id: data.player1.id,
            currentHp: data.player1.currentHp,
            maxHp: data.player1.maxHp,
            armor: data.player1.armor,
            imageName: data.player1.imageName,
          },
          id: data.id,
        });
      }
      clearInterval(interval);
    }
  }, 1000);
});

router.post('/end-turn', (req, res) => {
  const currentState = state.finishTurn(req.body.player, req.body.id);
  const interval = setInterval(() => {
    if (currentState.state === constants.READY
      || state.getSessionById(req.body.id).state === constants.READY) {
      const data = state.getSessionById(req.body.id);
      if (req.body.player.id === data.player1.id) {
        res.send({
          self: data.player1,
          enemy: {
            id: data.player2.id,
            currentHp: data.player2.currentHp,
            maxHp: data.player2.maxHp,
            armor: data.player2.armor,
            modifiers: data.player2.modifiers,
            imageName: data.player2.imageName,
          },
          usedPotions: data.usedPotions,
        });
      } else {
        res.send({
          self: data.player2,
          enemy: {
            id: data.player1.id,
            currentHp: data.player1.currentHp,
            maxHp: data.player1.maxHp,
            armor: data.player1.armor,
            modifiers: data.player1.modifiers,
            imageName: data.player1.imageName,
          },
          usedPotions: data.usedPotions,
        });
      }
      clearInterval(interval);
    }
  }, 1000);
});

export default router;
