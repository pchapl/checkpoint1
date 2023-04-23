module.exports = class PersonGroup {
  constructor(persons) {
    this.persons = persons;
  }

  getFios() {
    return this.persons
      .map((person) => person.getFio())
      .join(', ');
  }
};
