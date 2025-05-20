// #############################################################################
// Cargando dependencias principales
const express = require('express')
const { loginUser, 
        registerUser, 
        logoutUser, 
        loginStatus } = require('../controllers/authController')
const router = express.Router()

//rutas de la seccion autenticacion
router.post('/login', loginUser)
router.post('/nuevo', registerUser)
router.get('/logout', logoutUser)
router.get('/estado/status', loginStatus)

module.exports = router