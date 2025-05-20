// #############################################################################
// Cargando dependencias principales
const express = require('express')
const { registerCategoria, getCategorias, getCategoria, deleteCategoria, updateCategoria } = require('../controllers/categoriasController')
const router = express.Router()

//rutas de la seccion autenticacion
router.post('/registro', registerCategoria)
router.get('/todos', getCategorias)
router.get('/:cod', getCategoria)
router.delete('/:cod', deleteCategoria)
router.patch('/:cod', updateCategoria)

module.exports = router