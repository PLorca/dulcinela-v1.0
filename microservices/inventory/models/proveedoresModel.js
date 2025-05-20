const {DataTypes} = require("sequelize");
const sequelize = require("../config/db");

// ##### Definiendo el Modelo de la Tabla#############################
const Proovedores = sequelize.define('proveedores', {
    cod:{
        type: DataTypes.STRING(7),
        primaryKey: true,
        allowNull: false
    },
    nombre:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    telefono:{
        type: DataTypes.STRING(15),
        allowNull: false
    },
    email:{
       type: DataTypes.STRING(50) 
    },
    notas:{
        type: DataTypes.TEXT,
        allowNull: false
    }
});
// ===== Sincronización del modelo =====
Proovedores.sync({ alter:true })

module.exports = Proovedores;