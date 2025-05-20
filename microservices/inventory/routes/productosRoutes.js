// #############################################################################
// Cargando dependencias principales
const express = require('express')
const { registerProducto, getProductos, getProducto, deleteProducto, updateProducto } = require('../controllers/productosConttroller')
const router = express.Router()

//rutas de la seccion autenticacion
router.post('/registro', registerProducto)
router.get('/todos', getProductos)
router.get('/:id_producto', getProducto)
router.delete('/:id_producto', deleteProducto)
router.patch('/:id_producto', updateProducto)

module.exports = router