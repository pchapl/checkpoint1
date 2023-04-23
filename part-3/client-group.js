const PersonGroup = require('./person-group');

module.exports = class ClientGroup extends PersonGroup{
  get clients() {
    return this.persons;
  }
};
