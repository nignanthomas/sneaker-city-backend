'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.bulkInsert('products', [
      {
        brand: 'Nike',
        model: 'React Infinity Run FK 2 BETRUE',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        picture: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/12995e34-323e-4b61-8b85-51ff4db38710/react-infinity-run-fk-2-betrue-shoe-R8D7Z6.png',
        categoryId: 1,
        price: 50,
        releaseDate: '04-09-2010',
        stock: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        brand: 'Nike',
        model: 'Air Max Pre-Day BETRUE',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        picture: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7e90a06d-13fa-46d0-8cde-e3f3f0c61363/air-max-pre-day-betrue-shoe-6ChMCv.png',
        categoryId: 1,
        price: 99,
        releaseDate: '11-06-2015',
        stock: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        brand: 'Adidas',
        model: 'MULTIX SHOES',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        picture: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/1a3d6bc58e884fc2959eac3700ac256d_9366/Multix_Shoes_Black_FZ3438_06_standard.jpg',
        categoryId: 1,
        price: 80,
        releaseDate: '12-11-2016',
        stock: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        brand: 'Nike',
        model: 'Air Zoom G.T.Cut',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        picture: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ef83853b-6ba6-4bb0-bf96-a8cd575d6218/air-zoom-gt-cut-basketball-shoe-kTDfNK.png',
        categoryId: 1,
        price: 125,
        releaseDate: '02-11-2018',
        stock: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        brand: 'Nike',
        model: 'Adapt BB 2.0',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        picture: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b07915ee-643b-4ad2-a3f0-f1932fe76fc1/adapt-bb-2-basketball-shoe-vdFwKS.png',
        categoryId: 1,
        price: 75,
        releaseDate: '02-11-2021',
        stock: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        brand: 'Adidas',
        model: 'ULTRABOOST 21',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        picture: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/c9b68d986d4f4eebbf20ac77013749e2_9366/Ultraboost_21_Shoes_Pink_FY0426_06_standard.jpg',
        categoryId: 2,
        price: 144,
        releaseDate: '02-11-2019',
        stock: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        brand: 'Adidas',
        model: 'DONOVAN MITCHELL D.O.N. ISSUE #2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        picture: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/ffdac9c609aa4bbd931fabda00fbd9d0_9366/Donovan_Mitchell_D.O.N._Issue_2_Shoes_Purple_FV8959_06_standard.jpg',
        categoryId: 1,
        price: 75,
        releaseDate: '02-11-2019',
        stock: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        brand: 'New Balance',
        model: 'Fresh Foam 880v11',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        picture: 'https://nb.scene7.com/is/image/NB/m880f11_nb_03_i?$pdpflexf2$&fmt=webp&wid=472&hei=472',
        categoryId: 1,
        price: 130,
        releaseDate: '02-08-2019',
        stock: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        brand: 'Nike',
        model: 'React Infinity Run Flyknit 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        picture: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/01577ea6-a93b-46ea-9828-a359a8369d8d/react-infinity-run-flyknit-2-womens-running-shoe-rfh6Z8.png',
        categoryId: 2,
        price: 90,
        releaseDate: '12-11-2020',
        stock: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        brand: 'Nike',
        model: 'Air Max 90',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        picture: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6c9ea1a9-a2a8-47d2-96c6-4eb07531c49b/air-max-90-womens-shoe-g5nqKN.png',
        categoryId: 2,
        price: 120,
        releaseDate: '02-12-2017',
        stock: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        brand: 'New Balance',
        model: 'NITREL v4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        picture: 'https://nb.scene7.com/is/image/NB/wtntrcp4_nb_03_i?$pdpflexf2$&fmt=webp&wid=472&hei=472',
        categoryId: 2,
        price: 60,
        releaseDate: '02-12-2017',
        stock: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        brand: 'Adidas',
        model: 'ULTRABOOST DNA 1.0',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        picture: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/25c6bb1d4cb3476d8283ac6d01226341_9366/Ultraboost_DNA_1.0_Shoes_Turquoise_H05263_06_standard.jpg',
        categoryId: 2,
        price: 180,
        releaseDate: '02-12-2017',
        stock: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        brand: 'New Balance',
        model: 'Mens Made in US 993',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        picture: 'https://nb.scene7.com/is/image/NB/mr993gl_nb_03_i?$pdpflexf2$&fmt=webp&wid=472&hei=472',
        categoryId: 1,
        price: 185,
        releaseDate: '02-05-2017',
        stock: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        brand: 'New Balance',
        model: 'Fresh Foam 860v11',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        picture: 'https://nb.scene7.com/is/image/NB/w860a11_nb_03_i?$pdpflexf2$&fmt=webp&wid=472&hei=472',
        categoryId: 2,
        price: 129,
        releaseDate: '04-09-2016',
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
