import db from '../database/models';

const userAssociations = {
  include: [
    { association: 'orders' },
  ]
};

export const findOneUser = (query, scope = null) => db.users.scope(scope)
  .findOne({
    ...query,
    ...userAssociations,
  }).then(user => user);
