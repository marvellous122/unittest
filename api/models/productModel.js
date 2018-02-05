"use strict";

module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define("Product", {
    sku: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    name: DataTypes.STRING,
    cost: DataTypes.FLOAT,
    freight: DataTypes.FLOAT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  });

  Product.sync({force: false}).then(() => {
    console.log('Table created!!');
  }).catch(err => {
    console.error('Table Errors: ', err);
  });

  // Product.associate = function(models) {
  //
  // }
  
  return Product;
};
