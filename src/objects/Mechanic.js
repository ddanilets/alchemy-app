export default class Mechanic {
  constructor(name) {
    this._name = name;
  }

  static fromData(data) {
    return new Mechanic(data.name);
  }

  get name() {
    return this._name;
  }
}