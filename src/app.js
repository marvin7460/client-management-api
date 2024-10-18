const express = require('express');
const clientRoutes = require('./routes/clientRoutes');
require('dotenv').config();

const app = express();

app.use(express.json()); // Para parsear el JSON del cuerpo de la solicitud

app.use('/api/clients', clientRoutes);

module.exports = app;
