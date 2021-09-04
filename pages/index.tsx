import type { NextPage } from 'next';
import { useEffect } from 'react';
import { Layout } from '../layout';
import { attachScripts } from '../utils/bootstrapScript';

const Home: NextPage = () => {
  useEffect(() => {
    attachScripts();
  }, []);

  return (
    <Layout>
      <h1>Home</h1>
    </Layout>
  );
};

export default Home;
