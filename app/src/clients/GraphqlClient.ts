import { GraphQLClient } from 'graphql-request';
import * as codegen from '../codegen-server';

export type CodegenSdk = ReturnType<typeof createSdk>;

const create = (url: string): GraphQLClient => {
  return new GraphQLClient(url);
};

const createSdk = (url: string) => {
  const client = create(url);
  return codegen.getSdk(client);
};

const createSdkConfigured = (): CodegenSdk => {
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