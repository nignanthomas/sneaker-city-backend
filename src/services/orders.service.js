import db from '../database/models';

export const findOneOrder = (query, scope = null) => db.orders.scope(scope)
  .findOne(query).then(order => order);

export const findAllOrders = (query, scope = null) => db.orders.scope(scope)
  .findAll(query).then(orders => orders);
