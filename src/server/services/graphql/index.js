import { ApolloServer } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import Resolvers from './resolvers';
import Schema from './schema';


const executableSchema = makeExecutableSchema ({
    typeDefs: Schema,
    resolvers: Resolvers
});

const server = new ApolloServer({
    schema: executableSchema, 
    context: ({ req }) => req
});

//this index.js file exports the initialized server object, wich handles all GraphQl requests
export default server;