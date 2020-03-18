import { gql } from 'apollo-server-express';

//ROOTQUERY TYPE WRAPS ALL OF THE QUERIES A CLIENT CAN RUN
//IN GRAPHQL WE NEED ONLY ONE ROUTE, AND SEND QUERY AS JSON-LIKE OBJECT
//query: RootQuery is the starting point for Apollo Server

const typeDefinitions = gql`
    type Post {
        id: Int
        text: String
    }

    type RootQuery {
        posts: [Post]
    }

    schema {
        query: RootQuery
    }

    `;

export default [typeDefinitions];
