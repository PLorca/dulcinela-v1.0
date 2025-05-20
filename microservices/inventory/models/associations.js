// Modelos de Sequelize
const Categorias = require('./categoriasModel');
const Marcas = require('./marcasModel');
const UnidadesMedidas = require('./umModel');
const Productos = require('./productosModel');
const ProveedoresProductos = require('./proveedorProductosModel')
const ProveedoresMarcas = require('./proveedorMarcasModel')
const Proveedores = require('./proveedoresModel')
// ===== Relaciones =====

// Un proveedor pertenece a muchas marcas
ProveedoresMarcas.belongsTo(Marcas, {
    foreignKey: 'cod_marca',
    targetKey: 'cod',
    as: 'proveedorMarcas'
})

ProveedoresMarcas.belongsTo(Proveedores, {
    foreignKey: 'cod_proveedor',
    targetKey: 'cod',
    as: 'marcaProveedores'
})

// Un proveedor pertenece a muchos productos
ProveedoresProductos.belongsTo(Productos, {
    foreignKey: 'id_producto',
    targetKey: 'id_producto',
    as: 'producto'
})

// ProveedoresProductos pertenece a Proveedores
ProveedoresProductos.belongsTo(Proveedores, {
    foreignKey: 'cod_proveedor',
    targetKey: 'cod',
    as: 'proveedor'
});

// Un producto pertenece a una categoría
Productos.belongsTo(Categorias, {
    foreignKey: 'cod_categoria',
    targetKey: 'cod',
    as: 'categoria'
});

// Un producto pertenece a una marca
Productos.belongsTo(Marcas, {
    foreignKey: 'cod_marcas',
    targetKey: 'cod',
    as: 'marca'
});

// Un producto pertenece a una unidad de medida
Productos.belongsTo(UnidadesMedidas, {
    foreignKey: 'cod_um',
    targetKey: 'cod',
    as: 'unidad_medida'
});

// === Relaciones inversas ===

// Relaciones inversas (opcional pero recomendadas)

// Producto tiene muchos proveedores a través de ProveedoresProductos
Productos.hasMany(ProveedoresProductos, {
    foreignKey: 'id_producto',
    sourceKey: 'id_producto',
    as: 'proveedores'
});

// Proveedor tiene muchos productos a través de ProveedoresProductos
Proveedores.hasMany(ProveedoresProductos, {
    foreignKey: 'cod_proveedor',
    sourceKey: 'cod',
    as: 'productos'
});

// Una categoría tiene muchos productos
Categorias.hasMany(Productos, {
    foreignKey: 'cod_categoria',
    sourceKey: 'cod',
    as: 'productos'
});

// Una marca tiene muchos productos
Marcas.hasMany(Productos, {
    foreignKey: 'cod_marcas',
    sourceKey: 'cod',
    as: 'productos'
});

// Una unidad de medida tiene muchos productos
UnidadesMedidas.hasMany(Productos, {
    foreignKey: 'cod_um',
    sourceKey: 'cod',
    as: 'productos'
});

// Marcas tiene muchos proveedores a través de ProveedoresMarcas
Marcas.hasMany(ProveedoresMarcas, {
    foreignKey: 'cod_marca',
    sourceKey: 'cod',
    as: 'proveedorMarcas'
})

// Proveedores tiene muchos proveedores a través de ProveedoresMarcas
Proveedores.hasMany(ProveedoresMarcas, {
    foreignKey: 'cod_proveedor',
    sourceKey: 'cod',
    as: 'marcaProveedores'
})



// Productos.hasOne(Categorias, {
//     foreignKey: 'cod',
//     sourceKey: 'cod_categoria',
//     as: 'categorias'
// });

// Categorias.belongsTo(Productos, {
//     foreignKey: 'cod',
//     targetKey: 'cod_categoria',
//     as: 'productos'
// });

// Productos.hasOne(Marcas, {
//     foreignKey: 'cod',
//     sourceKey: 'cod_marcas',
//     as: 'marcas'
// });

// Marcas.belongsTo(Productos, {
//     foreignKey: 'cod',
//     targetKey: 'cod_marcas',
//     as: 'productos'
// });

// Productos.hasOne(UnidadesMedidas, {
//     foreignKey: 'cod',
//     sourceKey: 'cod_um',
//     as: 'unidades_medidas'
// });

// UnidadesMedidas.belongsTo(Productos, {
//     foreignKey: 'cod',
//     targetKey: 'cod_um',
//     as: 'productos'
// });

module.exports = {
    Productos,
    Categorias,
    UnidadesMedidas,
    Marcas,
    Proveedores,
    ProveedoresProductos,
    ProveedoresMarcas
};


