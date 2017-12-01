import Hero from '../objects/Hero';
import Couldron from '../objects/Couldron';
import Bag from '../objects/Bag';
import Recipe from '../objects/Recipe';

import Game from './Game';

export function init(data) {
  const self = Hero.fromData(data.self);
  const enemy = Hero.fromData(data.enemy);
  const bag = Bag.fromData(data.bag);
  const couldron = Couldron.fromData(data.couldron);

  const recipes = data.recipes.map((el) => {
    return Recipe.fromData(el);
  });

  return new Game(self, enemy, bag, couldron, recipes);
}
