export default class Effect {
  constructor(name, duration) {
    this._name = name;
    this._duration = duration;
  }

  static fromData(data) {
    return new Effect(data.name, data.duration);
  }

  get name() {
    return this._name;
  }

  get duration() {
    return this._duration;
  }

  set start(start) {
    this._start = start;
  }
}
