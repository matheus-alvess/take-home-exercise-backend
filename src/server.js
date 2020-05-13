import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import resolvers from './resolvers';
import typeDefs from './typeDefs';

const PORT = 4001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: PORT }, () => {
  console.log(`Server ready at: http://localhost:${PORT}${server.graphqlPath}`);
});
