"use strict";

module.exports = function(sequelize, DataTypes) {
    var Producto = sequelize.define("Producto", {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        price: DataTypes.DECIMAL,
        unit: DataTypes.STRING
    });

    return Producto;
};
