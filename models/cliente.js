"use strict";

module.exports = function(sequelize, DataTypes) {
    var Cliente = sequelize.define("Cliente", {
        nombre: DataTypes.STRING,
        apellido: DataTypes.STRING,
        fecha_de_nacimiento: DataTypes.DATE,
        direccion_calle: DataTypes.STRING,
        direccion_numero: DataTypes.STRING,
        direccion_ciudad: DataTypes.STRING,
        direccion_pais: DataTypes.STRING,
        email: {type: DataTypes.STRING, unique: true},
        password: DataTypes.STRING,
        telefono: DataTypes.STRING
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'clientes'
    });

    return Cliente;
};
