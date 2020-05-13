import { models } from '../../db';

export default {
  tickets: (root, args, context) => {
    return models.Ticket.findAll({
      where: {
        parentId: null,
      },
    });
  },
  ticket: (root, { id }, context) => {
    return models.Ticket.findOne({
      where: {
        id,
      },
    });
  },
};
