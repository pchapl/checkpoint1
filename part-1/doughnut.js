module.exports = class Doughnut {
  constructor({ name = 'Пышка' }, stuffings = []) {
    this.name = name;
    this.baseWeight = 60;
    this.stuffings = stuffings;
  }

  get weight() {
    return this.stuffings.reduce((sum, stuffing) => sum + stuffing.weight, this.baseWeight);
  }
};
