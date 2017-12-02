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