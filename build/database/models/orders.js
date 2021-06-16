'use strict';

module.exports = function (sequelize, DataTypes) {
  var orders = sequelize.define('orders', {
    userId: DataTypes.INTEGER,
    order: {
      type: DataTypes.TEXT,
      get: function get() {
        return JSON.parse(this.getDataValue("order"));
      },
      set: function set(value) {
        return this.setDataValue("order", JSON.stringify(value));
      }
    },
    deliveryDetails: {
      type: DataTypes.TEXT,
      get: function get() {
        return JSON.parse(this.getDataValue("deliveryDetails"));
      },
      set: function set(value) {
        return this.setDataValue("deliveryDetails", JSON.stringify(value));
      }
    },
    deliveryMethod: {
      type: DataTypes.TEXT,
      get: function get() {
        return JSON.parse(this.getDataValue("deliveryMethod"));
      },
      set: function set(value) {
        return this.setDataValue("deliveryMethod", JSON.stringify(value));
      }
    },
    payment: {
      type: DataTypes.TEXT,
      get: function get() {
        return JSON.parse(this.getDataValue("payment"));
      },
      set: function set(value) {
        return this.setDataValue("payment", JSON.stringify(value));
      }
    }
  }, {});

  orders.associate = function (models) {// associations can be defined here
  };

  return orders;
};