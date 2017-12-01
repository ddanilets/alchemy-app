export default class Hand {
  constructor() {
    this._ingridients = [];
    this._potions = [];
  }

  addIngridient(ingridient) {
    this._ingridients.push(ingridient);
  }

  getIngridient(id) {
    this._ingridients[id] = null;
  }

  addPotion(potion) {
    this._potions.push(potion);
  }

  getPotion(id) {
    this._potions[id] = null;
  }

  clear() {
    this._potions = this._potions.filter(potion => { return potion; });
    this._ingridients = this._ingridients.filter(potion => { return potion; });
  }
}
