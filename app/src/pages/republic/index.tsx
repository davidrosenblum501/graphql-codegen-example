import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import GraphqlClient from '../../clients/GraphqlClient';
import { GetRepublicUnitsQuery } from '../../codegen-server';
import AppLayout from '../../components/layout/AppLayout';
import RepublicContainer from '../../components/republic/RepublicContainer';

export interface RepublicPageProps {
  republicUnits: GetRepublicUnitsQuery['republicUnits'];
}

const RepublicPage: NextPage<RepublicPageProps> = ({
  republicUnits,
}) => {
  return (
    <AppLayout title="Republic">
      <Head>
        <title>Jedi | Republic</title>
      </Head>
      <RepublicContainer republicUnits={republicUnits}  />
    </AppLayout>
  );
};

export const getServerSideProps: GetServerSideProps<RepublicPageProps> = async (
  _context
) => {
  const sdk = GraphqlClient.createSdkConfigured();

  const results = await sdk.getRepublicUnits();

  return {
    props: {
      republicUnits: results.republicUnits,
    },
  };
};

export default RepublicPage;