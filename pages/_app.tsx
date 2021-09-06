import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Fragment } from 'react';
import { Layout } from '../layout';
import '../styles/css/bootstrap.css';
import '../styles/css/responsive.css';
import '../styles/css/ui.css';
import '../styles/fonts/fontawesome/css/all.min.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Benyaan</title>
        <meta
          name="description"
          content="A B2B platform for businesses in Middle East"
        />
        <link rel="icon" href="/images/favicon.ico" />
        <meta property="og:title" content="Benyaan" />
        <meta
          property="og:description"
          content="A B2B platform for businesses in Middle East"
        />
        <meta property="og:image" content="/images/favicon.ico" />
        <meta property="og:url" content="https://www.benyaan.com/" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}
export default MyApp;
