module.exports = class ClientGroup {
  constructor(clients) {
    this.clients = clients;
  }

  getFios() {
    return this.clients
      .map((client) => client.getFio())
      .join(', ');
  }
};
