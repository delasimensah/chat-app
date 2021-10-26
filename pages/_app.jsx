import Head from "next/head";
import AppContext from "../context";

import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <AppContext>
      <Head>
        <title>Chat App</title>
        <meta name="description" content="Chat Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </AppContext>
  );
}

export default MyApp;
