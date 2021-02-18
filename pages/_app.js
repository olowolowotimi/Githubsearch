import React from 'react';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>User Search from Github</title>
        <link rel="icon" href="" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,100&display=swap" rel="stylesheet"/>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
