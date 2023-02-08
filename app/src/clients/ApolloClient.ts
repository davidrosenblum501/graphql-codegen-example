import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';

const createApolloClient = (
  url: string
): ApolloClient<NormalizedCacheObject> => {
  return new ApolloClient({
    uri: url,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;