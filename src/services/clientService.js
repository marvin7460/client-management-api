const ClientModel = require('../models/clientModel');
const clientModel = new ClientModel();

class ClientService {
  async getClients() {
    return clientModel.getClients();
  }

  async addClient(clientData) {
    return clientModel.addClient(clientData);
  }

  async deleteClient(clientId) {
    return clientModel.deleteClient(clientId);
  }

  async makePayment(clientId, amount, date) {
    return clientModel.makePayment(clientId, amount, date);
  }

  async getPaymentsByClientId(clientId) {
    return clientModel.getPaymentsByClientId(clientId);
  }

  async deletePayment(paymentId) {
    return clientModel.deletePayment(paymentId);
  }
}

module.exports = ClientService;
