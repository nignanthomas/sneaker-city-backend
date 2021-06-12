'use strict';
module.exports = (sequelize, DataTypes) => {
  const sizes = sequelize.define('sizes', {
    number: DataTypes.INTEGER,
    country: DataTypes.STRING
  }, {});
  sizes.associate = function(models) {
    // associations can be defined here
  };
  return sizes;
};