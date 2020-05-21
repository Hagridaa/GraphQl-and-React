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

    type Message {
        id: Int
        text: String
        chat: Chat
        user: User
    }
    
    type Chat {
        id: Int
        messages: [Message]
        users: [User]
    }

    input PostInput {
        text: String!
    }

    input UserInput {
        username: String!
        avatar: String!
    }

    input ChatInput {
        users: [Int]
      }
    
      input MessageInput {
        text: String!
        chatId: Int!
      }
  
      
    type RootMutation {
        addPost (
            post: PostInput!
          ): Post
    }

    type RootQuery {
        posts: [Post]
        chats: [Chat]
        chat(chatId: Int): Chat    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
 
    `;

export default [typeDefinitions];
