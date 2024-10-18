// src/models/paymentModel.js
class Payment {
    constructor(id, clientId, amount, date) {
      this.id = id;
      this.clientId = clientId;
      this.amount = amount;
      this.date = date;
    }
  }
  
  module.exports = Payment;
  