'use strict';

module.exports = function (sequelize, DataTypes) {
  var sizes = sequelize.define('sizes', {
    number: DataTypes.INTEGER,
    country: DataTypes.STRING
  }, {});

  sizes.associate = function (models) {// associations can be defined here
  };

  return sizes;
};