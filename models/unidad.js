"use strict";

module.exports = function(sequelize, DataTypes) {
    var Unidad = sequelize.define("Unidad", {
        singular: DataTypes.STRING,
        plural: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models){
                Unidad.hasMany(models.Producto, {foreign_key: 'unidad_producto'})
            }
        },
        timestamps: false,
        freezeTableName: true,
        tableName: 'unidades'
    });

    return Unidad;
};
