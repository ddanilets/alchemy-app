import potions, { applyEffects } from './potions';

export function usePotion(caster, opponent, potion, session) {
  let casterId = null;
  let opponentId = null;
  if (session.player1.id === caster.id) {
    casterId = session.player1;
    opponentId = session.player2;
  } else {
    casterId = session.player2;
    opponentId = session.player1;
  }
  applyEffects(potions.getPotion(potion.id), casterId, opponentId);
}

export function activateHeroPower(hero, session) {

}

