'use strict';

module.exports = function (sequelize, DataTypes) {
  var categories = sequelize.define('categories', {
    name: DataTypes.STRING
  }, {});

  categories.associate = function (models) {// associations can be defined here
  };

  return categories;
};