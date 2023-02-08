import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import { useMemo } from 'react';
import createApolloClient from '../clients/ApolloClient';

const App = ({ Component, pageProps }: AppProps) => {
  const client = useMemo(() => {
    const url = process.env.GRAPHQL_SERVER_URL;
    if (!url) {
      throw new Error('Missing GRAPHQL_SERVER_URL in .env configs');
    }
    return createApolloClient(url);
  }, []);
  
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default App;