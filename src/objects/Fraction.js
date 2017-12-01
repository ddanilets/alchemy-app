import Mechanic from './Mechanic';

export default class Fraction {
  constructor(mechanic, name, description, image, hpCoefficient) {
    this._mechanic = mechanic;
    this._name = name;
    this._description = description;
    this._image = image;
    this._hpCoefficient = hpCoefficient;
  }

  static fromData(data) {
    return new Fraction(Mechanic.fromData(data.mechanic),
      data.name, data.description, data.image, data.hpCoefficient);
  }

  get mechanic() {
    return this._mechanic;
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get image() {
    return this._image;
  }

  get hpCoefficient() {
    return this._hpCoefficient;
  }
}
