const {DataTypes} = require("sequelize");
const sequelize = require("../config/db");

// ##### Definiendo el Modelo de la Tabla#############################
const Marcas = sequelize.define('marcas' , {
    cod: {
        type: DataTypes.STRING(6),
        primaryKey: true,
        allowNull: false
    },
    nombre_marca: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
});
// ===== Sincronización del modelo =====
Marcas.sync({ alter:true })

module.exports = Marcas;