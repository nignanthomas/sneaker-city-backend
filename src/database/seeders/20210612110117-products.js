'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.bulkInsert('products', [
      {
        brand: 'Nike',
        model: 'Air Force 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        picture: 'https://footwearnews.com/wp-content/uploads/2018/02/nike-air-force-1-low-07.jpg',
        categoryId: 1,
        price: 50,
        releaseDate: '04-09-2010',
        stock: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        brand: 'Nike',
        model: 'Air Jordan 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        picture: 'https://footwearnews.com/wp-content/uploads/2019/11/jordan-melo-m12-555088_062_a_prem-e1575044740922.jpg?resize=1024,593',
        categoryId: 1,
        price: 50,
        releaseDate: '11-06-2015',
        stock: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        brand: 'Nike',
        model: 'Air Yeezy 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        picture: 'https://footwearnews.com/wp-content/uploads/2012/06/spy64.jpg',
        categoryId: 1,
        price: 50,
        releaseDate: '02-11-2018',
        stock: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  ]),

  down: (queryInterface, Sequelize) => Promise.all([
    queryInterface.bulkDelete('products', null, {})
  ])
};
