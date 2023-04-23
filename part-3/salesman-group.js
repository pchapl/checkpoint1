const ClientGroup = require('./client-group');

module.exports = class SalesmanGroup extends ClientGroup {
  constructor(salesmen) {
    super(salesmen);
    this.salesmen = salesmen;
  }
};
