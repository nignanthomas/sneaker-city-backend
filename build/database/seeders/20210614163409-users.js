'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return Promise.all([queryInterface.bulkInsert('users', [{
      firstName: 'Tom',
      lastName: 'Gedusor',
      email: 'scadmin@email.com',
      password: '$2b$10$K5.xg57221.uZrxoAcZ52eCxtN.BYQ3oQYzfuzP5useJoUvQMFUWy',
      city: 'Kigali',
      picture: '',
      phone: '+250712345678',
      role: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }])]);
  },
  down: function down(queryInterface, Sequelize) {
    return Promise.all([queryInterface.bulkDelete('users', null, {})]);
  }
};