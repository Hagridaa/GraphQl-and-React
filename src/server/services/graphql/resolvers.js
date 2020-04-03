import logger from '../../helpers/logger';

let posts = [{
    id:2,
    text: 'Lorem ipsum',
    user: {
        avatar: '',
        username: 'test user'
    }
},

{
    id: 1,
    text: 'lorem ipsum',
    user: {
        avatar: '',
        username: 'Test User 2'
    }

}];

const resolvers = {
    RootQuery: {
        posts(root, args, context) {
            return posts;
        },

        },

        RootMutation: {
            addPost (root, { post, user }, context) {
                const postObject = {
                    ...post, 
                    user,
                    id: posts.length + 1,
                };
                posts.push(postObject);
                logger.log({ level: 'info', message: 'Post was created'});
                return postObject;
            },
    },
    
};

export default resolvers;

