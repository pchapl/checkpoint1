const PersonGroup = require('./person-group');

module.exports = class SalesmanGroup extends PersonGroup {
  get salesmen() {
    return this.persons;
  }
};
