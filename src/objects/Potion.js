export default class Potion {
  constructor(mechanic = null, power, recipe, name, color, effect = null) {
    this._mechanic = mechanic;
    this._power = power;
    this._recipe = recipe;
    this._name = name;
    this._color = color;
    this._effect = effect;
  }

  get mechanic() {
    return this._mechanic;
  }

  get power() {
    return this._power;
  }

  get recipe() {
    return this._recipe;
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
