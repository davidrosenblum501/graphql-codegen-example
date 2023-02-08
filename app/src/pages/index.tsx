import { NextPage } from 'next';
import Head from 'next/head';
import HomeContainer from '../components/home/HomeContainer';
import AppLayout from '../components/layout/AppLayout';

const HomePage: NextPage = () => {
  return (
    <AppLayout title="Home">
      <Head>
        <title>Jedi | Home</title>
      </Head>
      <HomeContainer />
    </AppLayout>
  );  
};

export default HomePage;