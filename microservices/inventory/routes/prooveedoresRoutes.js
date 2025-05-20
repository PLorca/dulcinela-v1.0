// #############################################################################
// Cargando dependencias principales
const express = require('express')
const { registerProovedor, getProveedores, getProovedor, deleteProovedor, updateProovedor } = require('../controllers/proovedoresController')
const router = express.Router()

//rutas de la seccion autenticacion
router.post('/registro', registerProovedor)
router.get('/todos', getProveedores)
router.get('/:cod', getProovedor)
router.delete('/:cod', deleteProovedor)
router.patch('/:cod', updateProovedor)

module.exports = router