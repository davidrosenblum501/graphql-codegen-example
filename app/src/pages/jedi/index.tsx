import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import GraphqlClient from '../../clients/GraphqlClient';
import { GetJediPaginatedQuery } from '../../codegen-server';
import JedisContainer from '../../components/jedis/JedisContainer';
import AppLayout from '../../components/layout/AppLayout';

export interface JedisPageProps {
  jediPaginated: GetJediPaginatedQuery['jediPaginated'];
}

const JedisPage: NextPage<JedisPageProps> = ({
  jediPaginated,
}) => {
  return (
    <AppLayout title="Jedi Paginated">
      <Head>
        <title>Jedi | Paginated</title>
      </Head>
      <JedisContainer jediPaginated={jediPaginated} />
    </AppLayout>
  );
};

export const getServerSideProps: GetServerSideProps<JedisPageProps> = async (
  _context
) => {
  const sdk = GraphqlClient.createSdkConfigured();

  const results = await sdk.getJediPaginated({ page: 0, pageSize: 10 });

  return {
    props: {
      jediPaginated: results.jediPaginated,
    },
  };
};

export default JedisPage;