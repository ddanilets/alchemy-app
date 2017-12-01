import Mechanic from './Mechanic';
import Effect from './Effect';

export default class Potion {
  constructor(mechanic = null, power, name, color, effect = null) {
    this._mechanic = mechanic;
    this._power = power;
    this._name = name;
    this._color = color;
    this._effect = effect;
  }

  static fromData(data) {
    return new Potion(Mechanic.fromData(data.mechanic),
      data.power, data.name, data.color, Effect.fromData(data.effect));
  }

  get mechanic() {
    return this._mechanic;
  }

  get power() {
    return this._power;
  }

  get name() {
    return this._name;
  }

  get color() {
    return this._color;
  }

  get effect() {
    return this._effect;
  }
}
