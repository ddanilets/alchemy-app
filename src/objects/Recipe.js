import Ingridient from './Ingridient';

export default class Recipe {
  constructor(ingridients, name) {
    this._ingridients = ingridients;
    this._name = name;
  }

  static fromData(data) {
    return new Recipe(data.ingridients.map((el) => {
      return Ingridient.fromData(el);
    }), data.name);
  }
  get ingridients() {
    return this._ingridients;
  }

  get name() {
    return this._name;
  }
}
