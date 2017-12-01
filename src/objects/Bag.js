import Ingridient from './Ingridient';

export default class Bag {
  constructor(ingridients) {
    this._ingridients = ingridients;
  }

  static fromData(data) {
    return new Bag(data.ingridients.map((el) => {
      return Ingridient.fromData(el);
    }));
  }

  _getIngridient() {
    return this._ingridients[Math.floor(Math.random() * this._ingridients.length)];
  }

  getIngridients(number) {
    const workIngridients = [];
    for (let i = 0; i < number; i++) {
      workIngridients.push(this._ingridients);
    }
    return workIngridients;
  }
}
