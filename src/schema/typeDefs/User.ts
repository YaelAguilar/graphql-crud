import {GraphQLObjectType, GraphQLString, GraphQLID} from 'graphql'

export const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        lastname: {type: GraphQLString},
        email: {type: GraphQLString},
        password: {type: GraphQLString}
    }
})