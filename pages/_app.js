import "./index.css";
import Head from "next/head";
import Layout from "@components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Pedro Martins' Dev Portfolio</title>
        <meta
          name="Description"
          content="My dev portfolio to showcase projects I've worked on."
        />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
