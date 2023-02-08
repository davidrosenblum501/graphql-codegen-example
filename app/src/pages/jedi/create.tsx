import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import JediCreateContainer from '../../components/jedi-create/JediCreateContainer';
import AppLayout from '../../components/layout/AppLayout';

const JediCreatePage: NextPage = () => {
  return (
    <AppLayout title="Jedi Create">
      <Head>
        <title>Jedi | Create</title>
      </Head>
      <JediCreateContainer/>
    </AppLayout>
  );
};

export default JediCreatePage;