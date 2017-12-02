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
      res.send(state.getSessionById(currentState.id));
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
            currentHp: data.player2.currentHp,
            maxHp: data.player2.maxHp,
          },
          usedPotions: data.usedPotions,
        });
      } else {
        res.send({
          self: data.player2,
          enemy: {
            currentHp: data.player1.currentHp,
            maxHp: data.player1.maxHp,
          },
          usedPotions: data.usedPotions,
        });
      }
      clearInterval(interval);
    }
  }, 1000);
});

setInterval(() => {
  console.log(state);
}, 5000);

export default router;
