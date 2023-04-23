const Person = require('./person');

module.exports = class Salesman extends Person {
  constructor(firstName, lastName, middleName, phone, hireDate = new Date()) {
    super(firstName, lastName, middleName, phone);
    this.hireDate = hireDate;
  }
};
