import { ApolloServer } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import Resolvers from './Resolvers';
import Schema from './Schema';


const makeExecutableSchema = makeExecutableSchema ({

    typeDefs: Schema,
    Resolvers: Resolvers
});

const server = new ApolloServer({
    schema: ExecutableSchema, 
    context: ({ reg }) => reg
});

//this index.js file exports the initialized server object, wich handles all GraphQl requests
export default server;