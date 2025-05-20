// #############################################################################
// Cargando dependencias principales
const express = require('express')
const {registerUm, getUms, getUm, deleteUm, updateUm} = require('../controllers/umController')
const router = express.Router()

//rutas de la seccion autenticacion
router.post('/registro', registerUm)
router.get('/todos', getUms)
router.get('/:cod', getUm)
router.delete('/:cod', deleteUm)
router.patch('/:cod', updateUm)

module.exports = router