
require("dotenv").config(); // Cargar variables del .env

// * Datos necesarios para registro y lectura de datos (password) de la DB
module.exports = {
    secret: process.env.AUTH_SECRET,
    expires: process.env.AUTH_EXPIRES,
    rounds: parseInt(process.env.AUTH_ROUNDS, 10)
}