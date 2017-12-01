export default class Couldron {
  constructor(image) {
    this._effects = [];
    this._image = image;
  }

  static fromData(data) {
    return new Couldron(data.image);
  }

  get image() {
    return this._image;
  }

  get effects() {
    return this._effects;
  }

  addEffect(effect) {
    this._effects.push(effect);
  }

  removeOutdatedEffects(turn) {
    this._effects.filter(effect => {
      return effect.start + effect.duration > turn;
    });
  }
}
