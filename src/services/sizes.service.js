import db from '../database/models';

export const findOneSize = (query, scope = null) => db.sizes.scope(scope)
  .findOne(query).then(size => size);

export const findAllSizes = (query, scope = null) => db.sizes.scope(scope)
  .findAll(query).then(sizes => sizes);
