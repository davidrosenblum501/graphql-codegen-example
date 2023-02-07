import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import dotenv from 'dotenv';
import express from 'express';
import http from 'http';
import loadConfigs from './configs/Configs';
import createContext from './context/Context';
import createSchema from './schema/Schema';

const main = async (): Promise<void> => {
  dotenv.config();
  const configs = loadConfigs();

  const app = express();
  const httpServer = http.createServer(app);

  const apolloServer = new ApolloServer({
    schema: createSchema(),
  });
  await apolloServer.start();

  app.use(
    express.json(),
    expressMiddleware(apolloServer, {
      context: createContext
    }),
  );

  httpServer.listen(configs.port, () => {
    console.log(`GraphQL server listening on port ${configs.port}`);
  });
};

export default main;

if (require.main === module) {
  main();
}