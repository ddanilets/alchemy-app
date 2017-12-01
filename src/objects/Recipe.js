import Ingridient from './Ingridient';
import Potion from './Potion';

export default class Recipe {
  constructor(ingridients, name, potion) {
    this._ingridients = ingridients;
    this._potion = potion;
    this._name = name;
  }

  static fromData(data) {
    return new Recipe(data.ingridients.map((el) => {
      return Ingridient.fromData(el);
    }), data.name, Potion.fromData(data.potion));
  }
  get ingridients() {
    return this._ingridients;
  }

  get potion() {
    return this._potion;
  }

  get name() {
    return this._name;
  }
}
