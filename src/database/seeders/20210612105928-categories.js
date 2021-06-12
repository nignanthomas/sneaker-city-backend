'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.bulkInsert('categories', [{
      name: 'Men',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Women',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Mixed',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
  ]),

  down: (queryInterface, Sequelize) => Promise.all([
    queryInterface.bulkDelete('categories', null, {})
  ])
};
