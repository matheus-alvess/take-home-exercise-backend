import { models } from '../../db';

export default {
  createTicket: (root, { title, isCompleted }, context) => {
    return models.Ticket.create({
      title,
      isCompleted,
    });
  },
  updateTicket: async (root, { id, title }, context) => {
    const ticket = await models.Ticket.findByPk(id);
    return ticket.update({
      title,
    });
  },
  toggleTicket: async (root, { id, isCompleted }, context) => {
    const ticket = await models.Ticket.findByPk(id);
    return ticket.update({
      isCompleted,
    });
  },
  removeTicket: async (root, { id }, context) => {
    const ticket = await models.Ticket.findByPk(id);
    const ticketExclude = await ticket.destroy();
    return ticketExclude ? true : false;
  },
  addChildrenToTicket: async (root, { parentId, childrenIds }, context) => {},
};
