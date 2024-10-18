const express = require('express');
const clientController = require('../controllers/clientController');

const router = express.Router();

// Rutas de clientes
router.get('/', clientController.getClients);
router.post('/', clientController.addClient);
router.delete('/:clientId', clientController.deleteClient);
router.put('/:clientId', clientController.updateClient);

// Rutas de pagos
router.post('/:clientId/payments', clientController.makePayment);
router.get('/:clientId/payments', clientController.getPaymentsByClientId);
router.delete('/payments/:paymentId', clientController.deletePayment);

// Rutas de eventos
router.get('/events', clientController.getEvents); // Obtener todos los eventos
router.post('/events', clientController.addEvent); // Agregar un nuevo evento
router.delete('/events/:eventId', clientController.deleteEvent); // Eliminar un evento

module.exports = router;
