'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return Promise.all([queryInterface.bulkInsert('categories', [{
      name: 'Men',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Women',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Mixed',
      createdAt: new Date(),
      updatedAt: new Date()
    }])]);
  },
  down: function down(queryInterface, Sequelize) {
    return Promise.all([queryInterface.bulkDelete('categories', null, {})]);
  }
};