// #############################################################################
// Cargando dependencias necesarias
const express = require("express")
const bodyParser = require("body-parser")
const sequelize = require("./config/db")
// archivos de ruta
const umRoutes = require('./routes/umRoutes')
const marcasRoutes = require('./routes/marcasRoutes')
const categoriasRoutes = require('./routes/categoriasRoutes')
const productosRoutes = require('./routes/productosRoutes')
const proveedorRoutes = require('./routes/prooveedoresRoutes')
const prooverdorProductosRoutes = require('./routes/proveedorProductosRoutes')
// const proveedorProductosRoutes = require('./routes/proveedorProductosRoutes')
// Cargando variables de entorno
require('dotenv').config();

// Iniciando Express
const app = express();

// * ----------------------------------------------------------------------------
// #############################################################################
// * Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())

// * ----------------------------------------------------------------------------
// #############################################################################
// * Configuración del nombre y puerto del servidor
const serverName = "Inventory";
const PORT = process.env.PORT || 5002

// * ----------------------------------------------------------------------------
// #############################################################################
// * Rutas de la aplicación
app.use("/api/um", umRoutes)
app.use("/api/marcas", marcasRoutes)
app.use("/api/categorias", categoriasRoutes)
app.use("/api/productos", productosRoutes)
app.use("/api/proovedor",proveedorRoutes)
app.use("/api/provProducto", prooverdorProductosRoutes)
app.get("/", (req, res) => {
    res.send(`Página Principal - <b>${serverName}</b>`);
})

// * ---------------------------------------------------------------------------
// #############################################################################
// * Iniciando el servidor
async function main() {
    // Iniciando el server
    app.listen(PORT, () => {
        console.log(`*** Servidor: ${serverName} ***\n- Ha sido iniciado en el puerto: ${PORT}\n`);
    });
    // Conexión a la base de datos de autenticacion
    try{
        await sequelize.authenticate();
        console.log("\n** La conexión a la DB se ha establecido correctamente. **\n");
    }catch (error) {
        console.error("\nConexión a la base de datos Fallida:", error);
    }
}

main();