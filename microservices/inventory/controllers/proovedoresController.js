// #############################################################################
const asyncHandler = require('express-async-handler')
// Modelos de Sequelize
const Proovedores = require("../models/proveedoresModel")

//funciones importadas
const {generateProovedorCod} = require("../utils/generateCod")

// controlador de ingreso de proovedores
const registerProovedor = asyncHandler(async (req,res) => {
    const {nombre} = req.body
    if(!nombre) {
        res.status(400)
        throw new Error("Por favor rellenar todos los campos requeridos!!!")
    }
    const {telefono} = req.body
    if(!telefono){
        res.status(400)
        throw new Error("por favor rellenar todos los campos requeridos!!!");
        
    }
    const {email} = req.body
    const {notas} = req.body
    if(!notas){
        res.status(400)
        throw new Error("por favor rellenar todos los campos requeridos!!!");
    }
    //generar codigo del proovedor
    let firstCod = 'PR-0001'
    let nextCod
    const existeCod = await Proovedores.findOne({
        where: { cod: firstCod}
    })
    if(!existeCod){
        nextCod = firstCod
    } else {
        const currentCod = await Proovedores.max('cod');
        nextCod = await generateProovedorCod(currentCod); // Generate codigo
    }
     // crear nuevo proveedor //
     const prov = await Proovedores.create({
        cod: nextCod,
        nombre,
        telefono,
        email,
        notas
     })
    // enviar respuesta en formna de Json
    if(prov) {
        const {cod, nombre, telefono, email, notas} = prov;
        res.status(200).json({
            proveedores: {
                cod,
                nombre,
                telefono,
                email,
                notas
            }
        });
    } else {
        res.status(400)
        throw new Error("Datos inválidos, intente nuevamente.")
    }
})

// controlador de buscador de proovedores
const getProveedores = asyncHandler(async (req, res) => {
    console.log("Buscando todos los proveedores.....")
    // 1. ===== Consultar a la base de datos =====
    const provs = await Proovedores.findAll({
        order: [["cod", "ASC"]]
    });
    // Validar los datos de la BD
    if(!provs) {
        res.status(500);
        throw new Error("Ha ocurrido un error inesperado!!!");
    }
    // enviar respuesta exitosa
    res.status(200).json(provs);
})

// controlador de buscador de proovedor
const getProovedor = asyncHandler(async(req, res) => {
    // Buscar un proovedor
    const provCod = req.params.cod
    console.log(`Buscando al proovedor..${provCod}`)
    // 1. ===== Consultar a la base de datos =====
    const prov = await Proovedores.findOne({
        where: {cod: provCod}
    })
    // Validar los datos de la BD
    if(!prov) {
        res.status(404);
        throw new Error("No se ha encontrado el proovedor!!!");
    }
    res.status(200).json(prov);
})

// controlador de eliminacion de proovedor
const deleteProovedor = asyncHandler(async(req, res) => {
    const provCod = req.params.cod
    console.log(`Borrando el proovedor..${provCod}`)
    // 1. ===== Consultar a la base de datos =====
    const prov = await Proovedores.findOne({
        where: {cod: provCod}
    })
    // Validar los datos de la BD
    if(!prov) {
        res.status(404);
        throw new Error("No se ha encontrado el proovedor!!!");   
    }
    // Borrar la unidad de medida
    await prov.destroy();
    // enviar respuesta exitosa
    res.status(200).json({
        msg: `Se ha eliminado con exito el proovedor ${provCod}`
    });
})

// controlador de modificacion de proovedor
const updateProovedor = asyncHandler(async (req, res) => {
    const provCod = req.params.cod
    console.log(`Modificando el proovedor..${provCod}`)
    // 1. ===== Consultar a la base de datos =====
    const prov = await Proovedores.findOne({
        where: {cod: provCod}
    })
    // Validar los datos de la BD
    if(prov) {
        const {nombre, telefono, email, notas} = prov
        prov.nombre = req.body.nombre || nombre
        prov.telefono = req.body.telefono || telefono
        prov.email = req.body.email || email
        prov.notas = req.body.notas || notas
        // guardar el proveedor actualizado
        const updatedProovedor = await prov.save();
        res.status(200).json({
            cod: updatedProovedor.cod,
            nombre: updatedProovedor.nombre,
            email: updatedProovedor.email,
            telefono: updatedProovedor.telefono,
            fecha_actualizada: updatedProovedor.updatedAt
        })
    } else {
        res.status(404);
        throw new Error("No se ha encontrado el proveedor!!!");
    }
})

module.exports = {
    registerProovedor,
    getProveedores,
    getProovedor,
    deleteProovedor,
    updateProovedor
}