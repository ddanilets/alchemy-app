import * as effectTypes from './effectTypes';
import * as targets from './targets';

function getTarget(caster, opponent, effect) {
  return effect.target === targets.SELF ? caster : opponent;
}

function addModifier(hero, modifier) {
  const modifiers = hero.modifiers;
  const mappedModifiers = hero.modifiers.map((el) => {
    return el.id;
  });
  if (!mappedModifiers.includes(modifier.id)) {
    modifiers.push(modifier);
  }
  return modifiers;
}

function removeModifier(hero, modifier) {
  return hero.modifiers.filter((el) => {
    return el.id !== modifier.id;
  });
}

export default function applyEffect(effect, caster, opponent) {
  let target = getTarget(caster, opponent, effect);
  if (target.isInvisible) {
    return;
  }
  if (target.shouldRedirect) {
    target.shouldRedirect = false;
    target = getTarget(opponent, caster, effect);
  }
  if (target.shouldMirror) {
    target.shouldMirror = false;
    applyEffect(effect, opponent, caster);
  }
  switch (effect.getType(target)) {
    case effectTypes.HEAL:
      target.currentHp += effect.power;
      break;
    case effectTypes.PURE_DMG:
      target.currentHp -= effect.power * caster.multiplier;
      break;
    case effectTypes.DOT_DMG:
    case effectTypes.PDOT_DMG:
    case effectTypes.LIFESTEAL:
    case effectTypes.HOT:
      target.modifiers = addModifier(target, { id: effect.type, power: effect.power });
      break;
    case effectTypes.ARMOR_UP:
      target.armor += effect.power;
      break;
    case effectTypes.BLOCK_INVENTORY:
      target.maxInventorySlots.value = effectTypes.DEFAULT_INGRIDIENTS_SLOTS - 1;
      target.maxInventorySlots.left = 2;
      break;
    case effectTypes.BLOCK_POTION:
      target.maxPotionSlots.value = effectTypes.DEFAULT_POTION_SLOTS - 1;
      target.maxPotionSlots.left = 2;
      break;
    case effectTypes.BLOCK_COULDRON:
      target.maxCouldronSlots.value = effectTypes.DEFAULT_COULDRON_SLOTS - 1;
      target.maxCouldronSlots.left = 2;
      break;
    case effectTypes.ANTI_DOT_HEAL:
    case effectTypes.ANTI_PDOT_HEAL:
      target.modifiers = removeModifier(target, { id: effect.type, power: effect.power });
      break;
    case effectTypes.CLEAR_COULDRON:
      target.maxCouldronSlots.value = effectTypes.DEFAULT_COULDRON_SLOTS;
      target.maxCouldronSlots.left = 0;
      break;
    case effectTypes.CLEAR_POTION:
      target.maxPotionSlots.value = effectTypes.DEFAULT_COULDRON_SLOTS;
      target.maxPotionSlots.left = 0;
      break;
    case effectTypes.REDIRECT:
      target.shouldRedirect = true;
      break;
    case effectTypes.INVISIBILITY:
      target.isInvisible = true;
      break;
    case effectTypes.MIRRORING:
      target.shouldMirror = true;
      break;
    case effectTypes.SLOT_REVEAL:
      target.slotReveal = true;
      break;
    case effectTypes.MISSING_TURN:
      target.shouldMiss = true;
      break;
    case effectTypes.HP_SACRIFICE:
      caster.currentHP -= effect.power;
      target.multiplier = target.multiplier + effect.multiplier;
      break;
    case effectTypes.EVASION:
      target.evasion += effect.power;
      break;
    case effectTypes.REDUCE_TIME:
      target.maxTime -= effect.power;
      break;
    default:
      break;
  }
}

