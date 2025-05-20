// #############################################################################
const asyncHandler = require('express-async-handler')
// Modelos de Sequelize
const { Productos,
        Categorias, 
        Marcas, 
        UnidadesMedidas, 
        Proveedores,
        ProveedoresProductos,
        ProveedoresMarcas} = require("../models/associations")

// controlador de ingreso de productos
const registerProducto = asyncHandler(async (req, res) => {
    let {id_producto, 
            nombre,
            cod_categoria,
            insumo,
            stock,
            stock_min,
            valor_venta,
            descripcion,
            cod_um,
            cod_marcas,
            cod_proveedor} = req.body
    // validaciones basicas //
    if ( !id_producto || !nombre || !cod_categoria || !stock || !stock_min 
        || !valor_venta || !descripcion || !cod_um || !cod_marcas || !cod_proveedor) {
        res.status(400)
        throw new Error("Por favor rellenar todos los campos requeridos.")
    }
    // validar existencia del codigo de catagoria //
    const catValid = await Categorias.findOne({where: {cod: cod_categoria}})
    if(!catValid) {
        res.status(404);
        throw new Error("No se ha encontrado la categoria!!!")
    }
    // validar existencia del codigo de unidad medida //
    const umValid = await UnidadesMedidas.findOne({where: {cod: cod_um}})
    if(!umValid) {
        res.status(404);
        throw new Error("No se ha encontrado la unidad de medida!!!")
    }
    // validar existencia del codigo de marcas//
    const marcaValid = await Marcas.findOne({where: {cod: cod_marcas}})
    if(!marcaValid) {
        res.status(404);
        throw new Error("No se ha encontrado la marca!!!")
    }
    // validar existencia del codigo de proveedor //
    const provValid = await Proveedores.findOne({where: {cod: cod_proveedor}})
    if(!provValid) {
        res.status(404);
        throw new Error("No se ha encontrado el proveedor!!!")
    }
    // crear un nuevo producto //
    // console.log(`id_producto: ${id_producto}`);
    // console.log(`nombre: ${nombre}`);
    // console.log(`cod_categoria: ${cod_categoria}`);
    // console.log(`insumo: ${insumo}`);
    // console.log(`stock: ${stock}`);
    // console.log(`stock_min: ${stock_min}`);
    // console.log(`valor_venta: ${valor_venta}`);
    // console.log(`descripcion: ${descripcion}`);
    // console.log(`cod_um: ${cod_um}`);
    // console.log(`cod_marcas: ${cod_marcas}`);
    try {
        const productos = await Productos.create({
            id_producto,
            nombre,
            cod_categoria,
            insumo,
            stock,
            stock_min,
            valor_venta,
            descripcion,
            cod_um,
            cod_marcas
        })
        // creacion de proveedores-productos
        const proveedoresProductos = await ProveedoresProductos.create({
            id_producto: productos.id_producto,
            cod_proveedor: provValid.cod
        })
        console.log("La asociocion de proveedor-producto se ha creado con exito!!!")
        // creacion de proveedores-marcas
        const proveedoresMarcas = await ProveedoresMarcas.create({
            cod_marca: marcaValid.cod,
            cod_proveedor: provValid.cod
        })
        console.log("La asociocion de proveedor-marca se ha creado con exito!!!")
        // enviar respuesta en formna de Json
        res.status(201).json({
            success: true,
            data: {
                productos,
                proveedoresProductos,
                proveedoresMarcas
            }
        });
    } catch (err) {
        console.error("Error al registrar producto:", err);
        res.status(500).json({ message: err.message });
    }
    
})

const getProductos = asyncHandler(async (req, res) => {
    console.log("Busancdo todas los productos.....")
    // 1. ===== Consultar a la base de datos =====
    const productos = await Productos.findAll({
        include: [
            {
                model: Categorias,
                as: 'categoria', // hace referencia a la asociacion
                attributes: ['cod', 'nombre_cat']
            },
            {
                model: UnidadesMedidas,
                as: 'unidad_medida',
                attributes: ['cod', 'nombre_um']
            },
            {
                model: Marcas,
                as: 'marca',
                attributes: ['cod', 'nombre_marca']
            }
            ],
            order: [
                ['id_producto', 'ASC'] // Ordenar por fecha descendente
            ],
            // raw: true, // Opcional: si necesitas objetos planos
            // nest: true // Opcional: si necesitas anidamiento
    })
    if(!productos){
        res.status(500);
        throw new Error("Ha ocurrido un error inesperado!!!");
    }
    res.status(201).json({
            success: true,
            data: {
                productos
            }
        });
}) 

const getProducto = asyncHandler(async (req, res) => {
    // Buscar un producto
    const productoId = req.params.id_producto
    console.log(`Buscando el producto..${productoId}`)
    // 1. ===== Consultar a la base de datos =====
    const productos = await Productos.findOne({
        where: {id_producto: productoId},
        include: [
            {
                model: Categorias,
                as: 'categoria', // hace referencia a la asociacion
                attributes: [ 'nombre_cat']
            },
            {
                model: UnidadesMedidas,
                as: 'unidad_medida',
                attributes: ['nombre_um']
            },
            {
                model: Marcas,
                as: 'marca',
                attributes: ['nombre_marca']
            }
            ],
            order: [
                ['id_producto', 'ASC'] // Ordenar por fecha descendente
            ]
    })
    // Validar los datos de la BD
    if(!productos) {
        res.status(404);
        throw new Error(`No se ha encontrado el producto: ${productoId}`)
    }
    // enviar respuesta exitosa
    res.status(200).json(productos);
})

const deleteProducto = asyncHandler(async (req, res) => {
    // Buscar un producto
    const productoId = req.params.id_producto
    console.log(`Borrando el producto..${productoId}`)
    // 1. ===== Consultar a la base de datos =====
    const productos = await Productos.findOne({
        where: {id_producto: productoId}
    })
    // Validar los datos de la BD
    if(!productos) {
        res.status(404);
        throw new Error(`No se ha encontrado el producto: ${productoId}`)
    }
    // Borrar el producto
    await productos.destroy();
    // enviar respuesta exitosa
    res.status(200).json({
        msg: `Se ha eliminado con exito el producto ${productoId}`
    });
})

const updateProducto = asyncHandler(async (req, res) => {
    // Buscar un producto
    const productoId = req.params.id_producto
    console.log(`Modificando el producto..${productoId}`)
    // 1. ===== Consultar a la base de datos =====
    const producto = await Productos.findOne({
        where: {id_producto: productoId}
    })
    // Validar los datos de la BD
    if(producto){
        const {nombre, cod_categoria, insumo, stock, 
            stock_min, valor_venta, descripcion, cod_um, 
            cod_marcas} = producto
        producto.nombre = req.body.nombre || nombre
        // validar existencia del codigo de catagoria //
        if(req.body.cod_categoria){
            const catValid = await Categorias.findOne({where: {cod: req.body.cod_categoria}})
            if(!catValid) {
                res.status(404);
                throw new Error("No se ha encontrado la categoria!!!")
            }
            producto.cod_categoria = req.body.cod_categoria || cod_categoria
        }
        producto.insumo = req.body.insumo || insumo
        producto.stock = req.body.stock || stock
        producto.stock_min = req.body.stock_min || stock_min
        producto.valor_venta = req.body.valor_venta || valor_venta
        producto.descripcion = req.body.descripcion || descripcion
        // validar existencia del codigo um //
        if(req.body.cod_um){
            const umValid = await UnidadesMedidas.findOne({where: {cod: req.body.cod_um}})
            if(!umValid) {
                res.status(404);
                throw new Error("No se ha encontrado la unidad de medida!!!")
            }
            producto.cod_um = req.body.cod_um || cod_um 
        }
        // validar existencia del codigo de marca //
        if(req.body.cod_marcas){
            const marcaValid = await Marcas.findOne({where: {cod: req.body.cod_marcas}})
            if(!marcaValid) {
                res.status(404);
                throw new Error("No se ha encontrado la marca!!")
            }
            producto.cod_marcas = req.body.cod_marcas || cod_marcas
        }
        // guardar la unidad de medida actualizada
        const updatedProducto = await producto.save();
        // validar existencia del codigo de proveedor //
        const provValid = await Proveedores.findOne({
            where: {cod: req.body.cod_proveedor}
        })
        if(!provValid) {
            res.status(404);
            throw new Error("No se ha encontrado el proveedor!!!")
        }
        let proveedorProducto = await ProveedoresProductos.findOne({
            where: {
                id_producto: updatedProducto.id_producto,
                cod_proveedor: provValid.cod
            }
        })
        if(!proveedorProducto) {
            proveedorProducto = await ProveedoresProductos.create({
                id_producto: updatedProducto.id_producto,
                cod_proveedor: provValid.cod
            })
        }    
        res.status(200).json({
            id_producto: updatedProducto.id_producto,
            nombre: updatedProducto.nombre,
            cod_categoria: updatedProducto.cod_categoria,
            insumo: updatedProducto.insumo,
            stock: updatedProducto.stock,
            stock_min: updatedProducto.stock_min,
            valor_venta: updatedProducto.valor_venta,
            descripcion: updatedProducto.descripcion,
            cod_um: updatedProducto.cod_um,
            cod_marcas: updatedProducto.cod_marcas,
            fecha_actualizada: updatedProducto.updatedAt,
            proveedor_producto: proveedorProducto
        }) 
    }else{
        res.status(404);
        throw new Error(`no se ha encontrado el producto: ${productoId}`);
    }
})

module.exports = {
    registerProducto,
    getProductos,
    getProducto,
    deleteProducto,
    updateProducto
}