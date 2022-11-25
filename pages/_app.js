import React from "react";
import Head from "next/head";
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";

import Layout from "components/Common/Layout";
import "./style.css";

export default function App({ Component }) {
  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  };

  if (!getApps().length) {
    initializeApp(firebaseConfig);
    const app = initializeApp(firebaseConfig);
    // Check that `window` is in scope for the analytics module!
    if (typeof window !== "undefined") {
      // Enable analytics. https://firebase.google.com/docs/analytics/get-started
      if ("measurementId" in firebaseConfig) {
        getAnalytics(app);
        getPerformance();
      }
    }
  } else {
    getApp();
  }
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
