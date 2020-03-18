//ROOTQUERY TYPE WRAPS ALL OF THE QUERIES A CLIENT CAN RUN
//IN GRAPHQL WE NEED ONLY ONE ROUTE, AND SEND QUERY AS JSON-LIKE OBJECT
//query: RootQuery is the starting point for Apollo Server

const typeDefinitions = `
    type post {
        id: Int
        text: String
    }

    type RootQuery {
        posts: [Post]
    }

    Schema {

        query: RootQuery
    }

    `;

export default [typeDefinitions];
