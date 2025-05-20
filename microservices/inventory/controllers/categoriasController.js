// #############################################################################
const asyncHandler = require('express-async-handler')
// Modelos de Sequelize
const Categorias = require("../models/categoriasModel")

//funciones importadas
const {generateCategoriasCod} = require("../utils/generateCod")

// controlador de ingreso de Categorias
const registerCategoria = asyncHandler(async (req, res) => {
    const {nombre_cat} = req.body
    // validaciones basicas //
    if ( !nombre_cat ) {
        res.status(400)
        throw new Error("Por favor rellenar todos los campos requeridos.")
    }
    //generar codigo de unidad de medida
    let firstCod = 'CAT-001'
    let nextCod
    const existeCod = await Categorias.findOne({ 
        where: { cod: firstCod }
    })
    if (!existeCod) {
        nextCod = firstCod
    } else {
        const currentCod = await Categorias.max('cod');
        nextCod = await generateCategoriasCod(currentCod); // Generate codigo
    }
    // crear nueva Unidad de Medida //
    const cat = await Categorias.create({
        cod: nextCod,
        nombre_cat
    })
    // enviar respuesta en formna de Json
    if (cat) {
        const { cod, nombre_cat } = cat;
        res.status(201).json({
            Categoria: {
                cod,
                nombre_cat
            },
        });
    } else {
        res.status(400)
        throw new Error("Datos inválidos.")
    }
})

const getCategorias = asyncHandler(async (req, res) => {
    console.log("Buscando todas las categorias.....")
    // 1. ===== Consultar a la base de datos =====
    const cats = await Categorias.findAll({
        order: [["cod", "ASC"]]
    });
    // Validar los datos de la BD
    if(!cats) {
        res.status(500);
        throw new Error("Ha ocurrido un error inesperado!!!");
    }
    // enviar respuesta exitosa
    res.status(200).json(cats);
}) 

const getCategoria = asyncHandler(async (req, res) => {
    // Buscar una UM
    const catCod = req.params.cod
    console.log(`Buscando la categoria..${catCod}`)
    // 1. ===== Consultar a la base de datos =====
    const cat = await Categorias.findOne({
        where: {cod: catCod}
    })
    // Validar los datos de la BD
    if(!cat) {
        res.status(404);
        throw new Error("No se ha encontrado la categoria!!!");
    }
    // enviar respuesta exitosa
    res.status(200).json(cat);
})

const deleteCategoria = asyncHandler(async (req, res) => {
    const catCod = req.params.cod
    console.log(`Borrando la categoria..${catCod}`)
    // 1. ===== Consultar a la base de datos =====
    const cat = await Categorias.findOne({
        where: {cod: catCod}
    })
    // Validar los datos de la BD
    if(!cat) {
        res.status(404);
        throw new Error("No se ha encontrado la categoria!!!");
    }
    // Borrar la unidad de medida
    await cat.destroy();
    // enviar respuesta exitosa
    res.status(200).json({
        msg: `Se ha eliminado con exito la categoria ${catCod}`
    });
})

const updateCategoria = asyncHandler(async (req, res) => {
    const catCod = req.params.cod
    console.log(`Modificando la categoria..${catCod}`)
    // 1. ===== Consultar a la base de datos =====
    const cat = await Categorias.findOne({
        where: {cod: catCod}
    })
    // Validar los datos de la BD
    if(cat) {
        const {nombre_cat} = cat
        cat.nombre_cat = req.body.nombre_cat || nombre_cat
        // guardar la unidad de medida actualizada
        const updatedCat = await cat.save();
        res.status(200).json({
            codigo: updatedCat.cod,
            nombre: updatedCat.nombre_cat,
            fecha_actualizada: updatedCat.updatedAt 
        }) 
    }else{
        res.status(404);
        throw new Error("No se ha encontrado la categoria!!!");
    }
})

module.exports = {
    registerCategoria,
    getCategorias,
    getCategoria,
    deleteCategoria,
    updateCategoria
}