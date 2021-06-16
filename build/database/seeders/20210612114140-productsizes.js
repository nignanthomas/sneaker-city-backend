'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return Promise.all([queryInterface.bulkInsert('productsizes', [{
      productId: 1,
      sizeId: 2,
      quantity: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      productId: 2,
      sizeId: 1,
      quantity: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      productId: 3,
      sizeId: 3,
      quantity: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    }])]);
  },
  down: function down(queryInterface, Sequelize) {
    return Promise.all([queryInterface.bulkDelete('productsizes', null, {})]);
  }
};