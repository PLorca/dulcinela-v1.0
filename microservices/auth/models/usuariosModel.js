const {DataTypes} = require("sequelize");
const sequelize = require("../config/db");

// ##### Definiendo el Modelo de la Tabla#############################
const Usuarios = sequelize.define('usuarios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    usuario: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    nombre_completo: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    hashed_password: {
        type: DataTypes.STRING(200),
        allowNull:false
    },
    pass_venc: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    auth:{
       type: DataTypes.STRING(50),
        allowNull: true 
    },
    id_tipo_cuenta: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
});
// ===== Sincronización del modelo =====
Usuarios.sync()

module.exports = Usuarios;