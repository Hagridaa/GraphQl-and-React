import { gql } from 'apollo-server-express';

//ROOTQUERY TYPE WRAPS ALL OF THE QUERIES A CLIENT CAN RUN
//IN GRAPHQL WE NEED ONLY ONE ROUTE, AND SEND QUERY AS JSON-LIKE OBJECT
//query: RootQuery is the starting point for Apollo Server

const typeDefinitions = gql`
    type Post {
        id: Int
        text: String
        user: User
    }

    type User {
        avatar: String
        username: String
    }

    input PostInput {
        text: String!
    }

    input UserInput {
        username: String!
        avatar: String!
    }

    type RootMutation {
        addPost (
            post: PostInput!
          ): Post
    }

    type RootQuery {
        posts: [Post]
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
 
    `;

export default [typeDefinitions];
