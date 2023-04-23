module.exports = class Person {
  constructor(firstName, lastName, middleName, phone) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName;
    this.phone = phone;
  }

  getFio() {
    return `${this.firstName} ${this.middleName} ${this.lastName}`;
  }
};
