import * as effectTypes from './effectTypes';
import * as targets from './targets';

function getTarget(caster, opponent, effect) {
  return effect.target === targets.SELF ? caster : opponent;
}

export default function applyEffect(effect, caster, opponent) {
  const target = getTarget(caster, opponent, effect);
  switch (effect.type) {
    case effectTypes.HEAL:
      target.currentHp += effect.power;
      break;
    case effectTypes.PURE_DMG:
      target.currentHp -= effect.power;
      break;
    default:
      break;
  }
}
