// #############################################################################
const asyncHandler = require('express-async-handler')
// Modelos de Sequelize
const Marcas = require('../models/marcasModel')
//funciones importadas
const {generateMarcasCod} = require("../utils/generateCod")

// controlador de ingreso de marcas
const registerMarca = asyncHandler(async (req, res) => {
    const {nombre_marca} = req.body
    // validaciones basicas //
    if ( !nombre_marca ) {
        res.status(400)
        throw new Error("Por favor rellenar todos los campos requeridos.")
    }
    //generar codigo de marca
    let firstCod = 'M-0001'
    let nextCod
    const existeCod = await Marcas.findOne({ 
        where: { cod: firstCod }
    })
    if (!existeCod) {
        nextCod = firstCod
    } else {
        const currentCod = await Marcas.max('cod');
        nextCod = await generateMarcasCod(currentCod); // Generate codigo
    }
    // crear nueva Unidad de Medida //
    const marca = await Marcas.create({
        cod: nextCod,
        nombre_marca
    })
    // enviar respuesta en formna de Json
    if (marca) {
        const { cod, nombre_marca } = marca;
        res.status(201).json({
            Marcas: {
                cod,
                nombre_marca
            },
        });
    } else {
        res.status(400)
        throw new Error("Datos inválidos.")
    }
})

const getMarcas = asyncHandler(async (req, res) => {
    console.log("Busancdo todas las marcas.....")
    // 1. ===== Consultar a la base de datos =====
    const marcas = await Marcas.findAll({
        order: [["cod", "ASC"]]
    });
    // Validar los datos de la BD
    if(!marcas) {
        res.status(500);
        throw new Error("Ha ocurrido un error inesperado!!!");
    }
    // enviar respuesta exitosa
    res.status(200).json(marcas);
})

const getMarca = asyncHandler(async (req, res) => {
    // Buscar una UM
    const marcaCod = req.params.cod
    console.log(`Buscando la marca..${marcaCod}`)
    // 1. ===== Consultar a la base de datos =====
    const marca = await Marcas.findOne({
        where: {cod: marcaCod}
    })
    // Validar los datos de la BD
    if(!marca) {
        res.status(404);
        throw new Error("No se ha encontrado la marca!!!")
    }
    // enviar respuesta exitosa
    res.status(200).json(marca);
})

const deleteMarca = asyncHandler(async (req, res) => {
    const marcaCod = req.params.cod
    console.log(`Borrando la marca..${marcaCod}`)
    // 1. ===== Consultar a la base de datos =====
    const marca = await Marcas.findOne({
        where: {cod: marcaCod}
    })
    // Validar los datos de la BD
    if(!marca) {
        res.status(404);
        throw new Error("No se ha encontrado la marca!!!");
    }
    // Borrar la unidad de medida
    await marca.destroy();
    // enviar respuesta exitosa
    res.status(200).json({
        msg: `Se ha eliminado con exito la marca ${marcaCod}`
    });
})

const updateMarca = asyncHandler(async (req, res) => {
    const marcaCod = req.params.cod
    console.log(`Modificando la marca..${marcaCod}`)
    // 1. ===== Consultar a la base de datos =====
    const marca = await Marcas.findOne({
        where: {cod: marcaCod}
    })
    // Validar los datos de la BD
    if(marca) {
        const {nombre_marca} = marca
        marca.nombre_marca = req.body.nombre_marca || nombre_marca
        // guardar la unidad de medida actualizada
        const updatedMarca = await marca.save();
        res.status(200).json({
            codigo: updatedMarca.cod,
            nombre: updatedMarca.nombre_marca,
            fecha_actualizada: updatedMarca.updatedAt 
        }) 
    }else{
        res.status(404);
        throw new Error("No se ha encontrado la marca!!!");
    }
})

module.exports = {
    registerMarca,
    getMarcas,
    getMarca,
    deleteMarca,
    updateMarca
}