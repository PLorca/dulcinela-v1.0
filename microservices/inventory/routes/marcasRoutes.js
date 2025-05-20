// #############################################################################
// Cargando dependencias principales
const express = require('express')
const { registerMarca, getMarcas, getMarca, deleteMarca, updateMarca } = require('../controllers/marcasController')
const router = express.Router()

//rutas de la seccion autenticacion
router.post('/registro', registerMarca)
router.get('/todos', getMarcas)
router.get('/:cod', getMarca)
router.delete('/:cod', deleteMarca)
router.patch('/:cod', updateMarca)

module.exports = router