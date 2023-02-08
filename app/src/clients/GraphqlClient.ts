import { GraphQLClient } from 'graphql-request';
import * as codegen from '../codegen-server';

const create = (url: string): GraphQLClient => {
  return new GraphQLClient(url);
};

const createSdk = (url: string) => {
  const client = create(url);
  return codegen.getSdk(client);
};

const createSdkConfigured = () => {
  const url = process.env.GRAPHQL_SERVER_URL;
  if (!url) {
    throw new Error('Missing GRAPHQL_SERVER_URL in .env configs');
  }
  const client = create(url);
  return codegen.getSdk(client);
};

export default {
  create,
  createSdk,
  createSdkConfigured,
};