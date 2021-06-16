'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return Promise.all([queryInterface.bulkInsert('orders', [{
      userId: 1,
      order: JSON.stringify([]),
      deliveryDetails: JSON.stringify({
        firstName: 'Tom',
        lastName: 'Gedusor',
        city: 'Kigali',
        address: 'KK 7 Ave, no 4'
      }),
      deliveryMethod: JSON.stringify({
        name: 'Express',
        description: 'Delivery the same day',
        price: 5
      }),
      payment: JSON.stringify({
        total: 150
      }),
      createdAt: new Date(),
      updatedAt: new Date()
    }])]);
  },
  down: function down(queryInterface, Sequelize) {
    return Promise.all([queryInterface.bulkDelete('orders', null, {})]);
  }
};