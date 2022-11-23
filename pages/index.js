import React from "react";
import Head from "next/head";

import Home from "components/Home";

function HomePage() {
  return (
    <>
      <Head>
        <title>ngageN | NFT-Powered Marketing platform for Brands</title>
        <meta
          name="description"
          content="NFT-Powered Marketing platform for Brands to drive engagement, personalization & loyalty in Web3. Create, Sell, Award NFTs to customers, creators & connoisseurs. No coding required, Go live in days with our ready-to-use SaaS."
        />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_WEBSITE_URL} />

        {/* Open Graph */}
        <meta
          name="title"
          property="og:title"
          content="ngageN | NFT-Powered Marketing platform for Brands"
        />
        <meta
          name="description"
          property="og:description"
          content="NFT-Powered Marketing platform for Brands to drive engagement, personalization & loyalty in Web3. Create, Sell, Award NFTs to customers, creators & connoisseurs. No coding required, Go live in days with our ready-to-use SaaS."
        />
        <meta
          name="image"
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/logos/logo-2.png`}
        />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_WEBSITE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image:alt"
          content={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/logos/logo-2.png`}
        />

        {/* twitter */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="ngageN | NFT-Powered Marketing platform for Brands"
        />
        <meta
          name="twitter:description"
          content="NFT-Powered Marketing platform for Brands to drive engagement, personalization & loyalty in Web3. Create, Sell, Award NFTs to customers, creators & connoisseurs. No coding required, Go live in days with our ready-to-use SaaS."
        />
        <meta
          name="twitter:url"
          content={process.env.NEXT_PUBLIC_WEBSITE_URL}
        />
        <meta
          name="twitter:image"
          content={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/logos/logo-2.png`}
        />
      </Head>
      <Home />
    </>
  );
}

export default HomePage;
