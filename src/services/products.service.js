import db from '../database/models';

export const findOneProduct = (query, scope = null) => db.products.scope(scope)
  .findOne(query).then(product => product);

export const findAllProducts = (query, scope = null) => db.products.scope(scope)
  .findAll(query).then(products => products);
