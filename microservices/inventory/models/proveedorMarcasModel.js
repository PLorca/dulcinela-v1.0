const {DataTypes} = require("sequelize");
const sequelize = require("../config/db");

const ProveedoresMarcas = sequelize.define('proveedores_marcas', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
    },
    cod_marca: {
        type: DataTypes.STRING(6),
        allowNull: false
    },
    cod_proveedor: {
        type: DataTypes.STRING(7),
        allowNull: false
    }
});
// ===== Sincronización del modelo =====
ProveedoresMarcas.sync({ alter:true })

module.exports = ProveedoresMarcas;