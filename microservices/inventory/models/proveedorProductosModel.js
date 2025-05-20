const {DataTypes} = require("sequelize");
const sequelize = require("../config/db");

// ##### Definiendo el Modelo de la Tabla#############################
const ProveedoresProductos = sequelize.define('proveedores_productos', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
    },
    id_producto: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    cod_proveedor: {
        type: DataTypes.STRING(7),
        allowNull: false
    },
    valor_compra: {
        type: DataTypes.DECIMAL,
        allowNull: true
    },
    tiempo_entrega: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
});
// ===== Sincronización del modelo =====
ProveedoresProductos.sync({ alter:true })

module.exports = ProveedoresProductos;