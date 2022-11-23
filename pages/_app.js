import React, { useEffect } from "react";
import Head from "next/head";

import Layout from "components/Common/Layout";
import "./style.css";

export default function App({ Component }) {
  return (
    <Layout>
      <Head>
        <link
          rel="icon"
          href={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/website-assets/favicon.ico`}
        />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <Component />
    </Layout>
  );
}
