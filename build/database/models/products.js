'use strict';

module.exports = function (sequelize, DataTypes) {
  var products = sequelize.define('products', {
    brand: DataTypes.STRING,
    model: DataTypes.STRING,
    description: DataTypes.STRING,
    picture: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    releaseDate: DataTypes.DATEONLY,
    stock: DataTypes.INTEGER
  }, {});

  products.associate = function (models) {
    products.belongsTo(models.categories, {
      as: 'category',
      foreignKey: 'categoryId',
      targetKey: 'id'
    });
    products.hasMany(models.productsizes, {
      targetKey: 'productId',
      sourceKey: 'id',
      as: 'sizes'
    });
  };

  return products;
};