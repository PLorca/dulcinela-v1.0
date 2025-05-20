const {DataTypes} = require("sequelize");
const sequelize = require("../config/db");

// ##### Definiendo el Modelo de la Tabla#############################
const Categorias = sequelize.define('categorias' , {
    cod: {
        type: DataTypes.STRING(7),
        primaryKey: true,
        allowNull: false
    },
    nombre_cat: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
});
// ===== Sincronización del modelo =====
Categorias.sync({ alter:true })

module.exports = Categorias;