// #############################################################################
const { request } = require('express')
const asyncHandler = require('express-async-handler')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
// Modelos de Sequelize
const Usuarios = require("../models/usuariosModel")

// Funciones importantes
const authConfig = require("../config/auth")

// controlador de ingreso de usuario
const loginUser = asyncHandler(async (req, res) => {
    const {usuario, password} = req.body //recibe todos los datos del front-end(cuerpo del request);
    // validaciones iniciales
    if (!usuario || !password){
        return res.status(400).json({
            message: 'Se deben ingresar todos los campos requeridos!!!'
        }) 
    }

    try {
        // buscar usuario en la DB
        const user = await Usuarios.findOne({ where: {usuario} })
        console.log(user)
        // comparar si el usuario existe
        if(!user){
            return res.status(404).json({
                msg: "Usuario no encontrado!!!"
            })
        }
        // verificar la password
        const isPasswordValid = bcrypt.compareSync(password, user.hashed_password)
        if(!isPasswordValid){ // ! = si no es/negacion
            return res.status(401).json({
                msg: "Contraseña incorrecta!!!!"
            })
        }
        // generar el token(datos encriptados)
        const token = jwt.sign(
            {
                usuarioId: user.id,
                usuario: user.usuario
            },
            authConfig.secret, 
            { expiresIn: authConfig.expires}
        )
        console.log("Token generado con exito!!", token)
        // tabla de datos de ingreso(hacer despues)
        // enviar el token como cookie
        res.cookie("AuthToken", token, {
            path: "/",
            httpOnly: true,
            maxAge: 6*60*60*1000, // 6 horas en milisegundos
            sameSite: "lax",
            secure: false // cambiar a true en produccion si utiliza https
        })
        // responder con exito
        res.status(200).json({
            message: 'Ha ingresado al sistema',
            usuario: {
                id: user.id,
                usuario,
                nombre_completo: user.nombre_completo,
                email: user.email,
                pass_venc: user.pass_venc,
                auth: user.auth,
                id_tipo_cuenta: user.id_tipo_cuenta
            },
            token
        }) 
    } catch (err) {
        console.error("Error en el login: ", err )
        return res.status(500).json({
                msg: "Ocurrio un error al procesar la solicitud!!!, intente nuevamente."
        }) 
    }
    
})

// contrador de logOut

const logoutUser = asyncHandler(async(req, res) => {
    try {
        res.cookie("AuthToken", "", {
            path: "/",
            httpOnly: true,
            expires: new Date(0),
            sameSite: "lax",
            secure: false // cambiar a true en produccion si utiliza https
        })
        console.log("Sesion cerrada con exito!!!")
        res.status(200).json({msg:"Sesion cerrada con exito!!!"})
    } catch (err) {
        res.status(500).json({msg:"Error al intentar cerrar sesion!!!"}, err)
    }
})

// Obtener estado de sesión del usuario

const loginStatus = asyncHandler( async ( req, res ) => {
    const authTokenString = req.headers.cookie;
    if (!authTokenString) {
        console.log('No hay sesion activa!!!!!!');
        return res.json(false);
    }

    // Busca el valor de AuthToken dentro de la string de cookies
    const cookies = authTokenString.split(";").map(cookie => cookie.trim());
    const authCookie = cookies.find(cookie => cookie.startsWith("AuthToken="));
    
    if (!authCookie) {
        console.log('Sin AuthToken en cookies!!!!');
        return res.json(false);
    }

    // Extrae el token
    const token = authCookie.replace("AuthToken=", "");

    try { 
        jwt.verify(token, authConfig.secret);
        console.log(" Token verificado de forma exitosa!!!" );
        return res.json(true);
    } catch (err) {
        console.error(" !!!!Token no pudo ser verificado ", err.message);
        return res.json(false);
    }
});

// Controlador de registro de usuarios
const registerUser = asyncHandler(async (req,res) => {
    const {usuario, nombre_completo, email, password} = req.body
    // validaciones basicas //
    if ( !usuario || !nombre_completo || !password ) {
        res.status(400)
        throw new Error("Por favor rellenar todos los campos requeridos.")
    }
    if ( password.length < 6 ) {
        res.status(400)
        throw new Error("La contraseña debe contener almenos 6 carácteres.")
    }
    // Encriptar contraseña antes de guardarla en la base de datos //
    const hashedPassword = bcrypt.hashSync(password, 10)
    // Obteniendo fecha de expiración para la Contraseña //
    const today = new Date()
    const expireDate = new Date(today.getFullYear(), today.getMonth() + 3, today.getDate())
    // crear nuevo usuario //
    const user = await Usuarios.create({
        usuario,
        nombre_completo,
        email,
        hashed_password: hashedPassword,
        pass_venc: expireDate
    })
    // enviar respuesta en formna de Json
    if (user) {
        const { id, usuario, nombre_completo, email, pass_venc } = user;
        res.status(201).json({
            user: {
                id,
                usuario,
                nombre_completo,
                email,
                pass_venc
            },
        });
    } else {
        res.status(400)
        throw new Error("Datos del usuario inválidos.")
    }
})

module.exports = {
    loginUser,
    registerUser,
    logoutUser,
    loginStatus
}

