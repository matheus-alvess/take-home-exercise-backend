import TicketQuery from './query/Ticket';
import TicketMutation from './mutation/Ticket';

export default {
  Query: {
    ...TicketQuery,
  },
  Mutation: {
    ...TicketMutation,
  },
};
