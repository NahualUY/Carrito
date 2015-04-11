"use strict";

module.exports = function(sequelize, DataTypes) {
    var Producto = sequelize.define("Producto", {
        nombre: DataTypes.STRING,
        descripcion: DataTypes.STRING,
        precio: DataTypes.DECIMAL,
        imagen: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models){
                Producto.belongsTo(models.Unidad)
            }
        },
        timestamps: false,
        freezeTableName: true,
        tableName: 'productos'
    });

    return Producto;
};
