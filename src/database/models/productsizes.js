'use strict';
module.exports = (sequelize, DataTypes) => {
  const productsizes = sequelize.define('productsizes', {
    productId: DataTypes.INTEGER,
    sizeId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {});
  productsizes.associate = function(models) {
    productsizes.belongsTo(models.sizes, {
      as: 'size',
      foreignKey: 'sizeId',
      targetKey: 'id',
    });
  };
  return productsizes;
};
