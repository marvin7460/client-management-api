const express = require('express');
const clientController = require('../controllers/clientController');

const router = express.Router();

router.get('/', clientController.getClients);
router.post('/', clientController.addClient);
router.delete('/:clientId', clientController.deleteClient);
router.post('/:clientId/payments', clientController.makePayment);
router.get('/:clientId/payments', clientController.getPaymentsByClientId);
router.delete('/payments/:paymentId', clientController.deletePayment);

module.exports = router;
