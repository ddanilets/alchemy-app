import Fraction from './Fraction';

export default class Hero {
  constructor(name, image, baseHp, fraction) {
    this._name = name;
    this._image = image;
    this._baseHp = baseHp;
    this._fraction = fraction;
  }

  static fromData(data) {
    return new Hero(data.name, data.image, data.baseHp, Fraction.fromData(data.fraction));
  }

  get name() {
    return this._name;
  }

  get image() {
    return this._image;
  }

  get baseHp() {
    return this._baseHp;
  }

  get fraction() {
    return this._fraction;
  }
}