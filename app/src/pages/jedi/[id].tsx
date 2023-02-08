import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import GraphqlClient from '../../clients/GraphqlClient';
import { GetJediQuery } from '../../codegen-server';
import JediContainer from '../../components/jedi/JediContainer';
import AppLayout from '../../components/layout/AppLayout';

export interface JediPageProps {
  jedi: Exclude<GetJediQuery['jedi'], null | undefined>;
}

const JediPage: NextPage<JediPageProps> = ({
  jedi,
}) => {
  return (
    <AppLayout title={`Jedi: ${jedi.name}`}>
      <Head>
        <title>Jedi | {jedi.name}</title>
      </Head>
      <JediContainer jedi={jedi} />
    </AppLayout>
  );
};

export const getServerSideProps: GetServerSideProps<JediPageProps, { id: string }> = async (
  context
) => {
  const idRaw = context.params?.id ?? '';
  const id = Number.parseInt(idRaw);
  if (Number.isNaN(idRaw)) {
    return { notFound: true };
  }

  const sdk = GraphqlClient.createSdkConfigured();

  const results = await sdk.getJedi({ id });

  if (!results.jedi) {
    return { notFound: true };
  }

  return {
    props: {
      jedi: results.jedi,
    },
  };
};

export default JediPage;