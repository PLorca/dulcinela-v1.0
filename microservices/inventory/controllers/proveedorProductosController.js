// #############################################################################
const asyncHandler = require('express-async-handler')
// Modelos de Sequelize
const {Productos, ProveedoresProductos, Proveedores} = require('../models/associations');

// controlador de ingreso de productos proveedores

// controlador de obtencion de todos los productos proveedores
const getProveedorProductos = asyncHandler(async (req, res) => {
   console.log("Busancdo todos los proveedores-productos.....")
    // 1. ===== Consultar a la base de datos =====
    const proveedorProductos = await ProveedoresProductos.findAll({
        include: [
            {
                model: Proveedores,
                as: 'proveedor',
                attributes: ['cod', 'nombre']
            }
        ]
    })
}) 
// controlador de obtencion de un de productos proveedores

// controlador de eliminacion de un de productos proveedores

// controlador de modificacion de un de productos proveedores

module.exports = {
}

