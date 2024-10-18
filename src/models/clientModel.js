const { client } = require('../db');

class ClientModel {
  async getClients() {
    const res = await client.execute('SELECT * FROM clients');
    return res.rows;
  }

  async addClient(clientData) {
    const { name, curp, loan_amount, status, phone } = clientData;
    const res = await client.execute(
      'INSERT INTO clients (name, curp, loan_amount, status, phone) VALUES (?, ?, ?, ?, ?) RETURNING id',
      [name, curp, loan_amount, status, phone]
    );
    return res.rows[0].id;  // Devuelve el ID generado
  }

  async deleteClient(clientId) {
    await client.execute('DELETE FROM clients WHERE id = $1', [clientId]);
  }

  async makePayment(clientId, amount, date) {
    const res = await client.execute(
      'INSERT INTO payments (client_id, amount, date) VALUES ($1, $2, $3) RETURNING id',
      [clientId, amount, date]
    );
    return res.rows[0].id;
  }

  async getPaymentsByClientId(clientId) {
    const res = await client.execute('SELECT * FROM payments WHERE client_id = $1', [clientId]);
    return res.rows;
  }

  async deletePayment(paymentId) {
    await client.execute('DELETE FROM payments WHERE id = $1', [paymentId]);
  }
}

module.exports = ClientModel;
