import { makeExecutableSchema } from '@graphql-tools/schema';
import { GraphQLSchema } from 'graphql';
import Resolvers from './Resolvers';
import TypeDefs from './TypeDefs';

const createSchema = (): GraphQLSchema => {
  return makeExecutableSchema({
    typeDefs: TypeDefs,
    resolvers: Resolvers,
  });
};

export default createSchema;