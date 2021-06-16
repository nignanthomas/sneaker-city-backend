'use strict';

module.exports = function (sequelize, DataTypes) {
  var users = sequelize.define('users', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    city: DataTypes.STRING,
    picture: DataTypes.STRING,
    phone: DataTypes.STRING,
    role: DataTypes.INTEGER
  }, {});

  users.associate = function (models) {
    users.hasMany(models.orders, {
      targetKey: 'userId',
      sourceKey: 'id',
      as: 'orders'
    });
  };

  return users;
};