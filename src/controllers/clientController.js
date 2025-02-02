const ClientService = require('../services/clientService');
const clientService = new ClientService();

exports.getClients = async (req, res) => {
  const clients = await clientService.getClients();
  res.json(clients);
};

exports.addClient = async (req, res) => {
  const newClientData = req.body;
  try {
    const newClientId = await clientService.addClient(newClientData);
    res.status(201).json({ id: newClientId });
  } catch (error) {
    console.error("Error al agregar cliente:", error.message);
    res.status(400).json({ error: error.message });
  }
};

exports.deleteClient = async (req, res) => {
  const { clientId } = req.params;
  await clientService.deleteClient(Number(clientId));
  res.status(204).send();
};

exports.makePayment = async (req, res) => {
  const { clientId } = req.params;
  const { amount, date } = req.body;
  try {
    const paymentId = await clientService.makePayment(Number(clientId), amount, date);
    res.status(201).json({ id: paymentId });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPaymentsByClientId = async (req, res) => {
  const { clientId } = req.params;
  const payments = await clientService.getPaymentsByClientId(Number(clientId));
  res.json(payments);
};

exports.deletePayment = async (req, res) => {
  const { paymentId } = req.params;
  await clientService.deletePayment(Number(paymentId));
  res.status(204).send();
};


let events = []; // Usar un array en memoria para almacenar eventos, o usa tu base de datos

export const getEvents = (req, res) => {
  res.json(events);
};

export const addEvent = (req, res) => {
  const { clientId, clientName, type, amount, date } = req.body;
  const newEvent = {
    id: events.length + 1, // Generar ID único
    clientId,
    clientName,
    type,
    amount,
    date,
  };
  events.push(newEvent);
  res.status(201).json(newEvent);
};

export const deleteEvent = (req, res) => {
  const { eventId } = req.params;
  events = events.filter(event => event.id !== parseInt(eventId, 10));
  res.status(204).send();
};