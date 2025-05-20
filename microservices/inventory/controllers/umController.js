// #############################################################################
const asyncHandler = require('express-async-handler')
// Modelos de Sequelize
const UnidadesMedidas = require("../models/umModel")

//funciones importadas
const {generateUmCod} = require("../utils/generateCod")
// controlador de ingreso de Unides de Medida
const registerUm = asyncHandler(async (req, res) => {
    const {nombre_um} = req.body
    // validaciones basicas //
    if ( !nombre_um ) {
        res.status(400)
        throw new Error("Por favor rellenar todos los campos requeridos.")
    }
    //generar codigo de unidad de medida
    let firstCod = 'UM-001'
    let nextCod
    const existeCod = await UnidadesMedidas.findOne({ 
        where: { cod: firstCod }
    })
    if (!existeCod) {
        nextCod = firstCod
    } else {
        const currentCod = await UnidadesMedidas.max('cod');
        nextCod = await generateUmCod(currentCod); // Generate codigo
    }
    // crear nueva Unidad de Medida //
    const um = await UnidadesMedidas.create({
        cod: nextCod,
        nombre_um
    })
    // enviar respuesta en formna de Json
    if (um) {
        const { cod, nombre_um } = um;
        res.status(201).json({
            Unidad_Medida: {
                cod,
                nombre_um
            },
        });
    } else {
        res.status(400)
        throw new Error("Datos inválidos.")
    }
})

const getUms = asyncHandler(async (req, res) => {
    console.log("Busancdo todas las unidades de medida.....")
    // 1. ===== Consultar a la base de datos =====
    const ums = await UnidadesMedidas.findAll({
        order: [["cod", "ASC"]]
    });
    // Validar los datos de la BD
    if(!ums) {
        res.status(500);
        throw new Error("Ha ocurrido un error inesperado!!!");
    }
    // enviar respuesta exitosa
    res.status(200).json(ums);
}) 

const getUm = asyncHandler(async (req, res) => {
    // Buscar una UM
    const umCod = req.params.cod
    console.log(`Buscando la unidad de medida..${umCod}`)
    // 1. ===== Consultar a la base de datos =====
    const um = await UnidadesMedidas.findOne({
        where: {cod: umCod}
    })
    // Validar los datos de la BD
    if(!um) {
        res.status(404);
        throw new Error("No se ha encontrado la unidad de medida!!!");
    }
    // enviar respuesta exitosa
    res.status(200).json(um);
})

const deleteUm = asyncHandler(async (req, res) => {
    const umCod = req.params.cod
    console.log(`Borrando la unidad de medida..${umCod}`)
    // 1. ===== Consultar a la base de datos =====
    const um = await UnidadesMedidas.findOne({
        where: {cod: umCod}
    })
    // Validar los datos de la BD
    if(!um) {
        res.status(404);
        throw new Error("No se ha encontrado la unidad de medida!!!");
    }
    // Borrar la unidad de medida
    await um.destroy();
    // enviar respuesta exitosa
    res.status(200).json({
        msg: `Se ha eliminado con exito la unidad de medida ${umCod}`
    });
})

const updateUm = asyncHandler(async (req, res) => {
    const umCod = req.params.cod
    console.log(`Modificando la unidad de medida..${umCod}`)
    // 1. ===== Consultar a la base de datos =====
    const um = await UnidadesMedidas.findOne({
        where: {cod: umCod}
    })
    // Validar los datos de la BD
    if(um) {
        const {nombre_um} = um
        um.nombre_um = req.body.nombre_um || nombre_um
        // guardar la unidad de medida actualizada
        const updatedUm = await um.save();
        res.status(200).json({
            codigo: updatedUm.cod,
            nombre: updatedUm.nombre_um,
            fecha_actualizada: updatedUm.updatedAt 
        }) 
    }else{
        res.status(404);
        throw new Error("No se ha encontrado la unidad de medida!!!");
    }
})

module.exports = {
    registerUm,
    getUms,
    getUm,
    deleteUm,
    updateUm
}