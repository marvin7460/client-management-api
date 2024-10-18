const { createClient } = require('@libsql/client');
//doten
require('dotenv').config();

const client = createClient({
  url: process.env.DB_URL,
  authToken: process.env.DB_TOKEN,
});
client.execute("SELECT * FROM clients")
  .then(() => console.log("Conectado a la base de datos"))
  .catch(error => console.error("Error de conexión:", error));

module.exports = { client };
