import React, { useEffect } from "react";
import Head from "next/head";

import Layout from "components/Common/Layout";
import "./style.css";

export default function App({ Component }) {
  return (
    <Layout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <Component />
    </Layout>
  );
}
