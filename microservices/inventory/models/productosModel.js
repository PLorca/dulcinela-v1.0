const {DataTypes} = require("sequelize");
const sequelize = require("../config/db");

// ##### Definiendo el Modelo de la Tabla#############################
const Productos = sequelize.define('productos' , {
    id_producto: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    cod_categoria: {
        type: DataTypes.STRING(7),
        allowNull: false
    },
    insumo: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stock_min: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    valor_venta:{
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    descripcion:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    cod_um:{
        type: DataTypes.STRING(6),
        allowNull: false
    },
    cod_marcas:{
        type: DataTypes.STRING(6),
        allowNull: false
    }
});
// ===== Sincronización del modelo =====
Productos.sync({ alter:true })

module.exports = Productos;