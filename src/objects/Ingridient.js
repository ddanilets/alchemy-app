import Effect from './Effect';
import Fraction from './Fraction';

export default class Ingridient {
  constructor(fraction, effect, power, name, image) {
    this._fraction = fraction;
    this._effect = effect;
    this._power = power;
    this._name = name;
    this._image = image;
  }

  static fromData(data) {
    return new Ingridient(Fraction.fromData(data.fraction), Effect.fromData(data.effect),
      data.power, data.name, data.image);
  }

  get fraction() {
    return this._fraction;
  }

  get effect() {
    return this._effect;
  }

  get power() {
    return this._power;
  }

  get name() {
    return this._name;
  }

  get image() {
    return this._image;
  }
}
