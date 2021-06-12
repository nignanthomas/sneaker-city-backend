'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.bulkInsert('sizes', [
      {
        number: 42,
        country: 'EUR',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 11,
        country: 'US',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 39,
        country: 'EUR',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 9,
        country: 'UK',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  ]),

  down: (queryInterface, Sequelize) => Promise.all([
    queryInterface.bulkDelete('sizes', null, {})
  ])
};
