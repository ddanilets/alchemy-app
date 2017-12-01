export default class Game {
  constructor(self, enemy, bag, couldron, recipes) {
    this._self = self;
    this._enemy = enemy;
    this._bag = bag;
    this._couldron = couldron;
    this._recipes = recipes;
  }

  get self() {
    return this._self;
  }

  get enemy() {
    return this._enemy;
  }

  get bag() {
    return this._bag;
  }

  get couldron() {
    return this._couldron;
  }

  get recipes() {
    return this._recipes;
  }
}