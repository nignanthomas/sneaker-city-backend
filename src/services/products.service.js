import db from '../database/models';

const productAssociations = {
  include: [
    { association: 'category', attributes: ['id', 'name'] },
    { association: 'sizes', attributes: ['quantity', 'sizeId'], include: [{ association: 'size', attributes: ['number', 'country'] }] },
  ]
};

export const findOneProduct = (query, scope = null) => db.products.scope(scope)
  .findOne({
    ...query,
    ...productAssociations,
  }).then(product => product);

export const findAllProducts = (query, scope = null) => db.products.scope(scope)
  .findAll({
    ...query,
    ...productAssociations,
  }).then(products => products);
