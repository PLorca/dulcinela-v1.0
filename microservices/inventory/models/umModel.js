const {DataTypes} = require("sequelize");
const sequelize = require("../config/db");

// ##### Definiendo el Modelo de la Tabla#############################
const UnidadesMedidas = sequelize.define('unidades_medidas' , {
    cod: {
        type: DataTypes.STRING(6),
        primaryKey: true,
        allowNull: false
    },
    nombre_um: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
});
// ===== Sincronización del modelo =====
UnidadesMedidas.sync({ alter:true })

module.exports = UnidadesMedidas;