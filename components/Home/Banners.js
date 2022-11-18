import React from "react";

import styles from "./Home.module.css";

function Banners() {
  return (
    <>
      <div className={styles.banner_wrapper}>
        <img
          src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/website-assets/asset-8.jpg`}
          alt="banner1"
          width="100%"
          className={styles.banner1}
        />
        <div className={`${styles.banner_shadow} shadow-background`} />
        <div className={styles.banner_text}>
          <h1 className="heading1">
            NFT-Powered <br />
            Marketing platform for Brands
          </h1>
          <p className={styles.banner_description}>
            Drive engagement, personalization & loyalty in Web3
          </p>
        </div>
      </div>
      <div className={styles.banner_wrapper}>
        <img
          src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/website-assets/asset-7.png`}
          alt="banner2"
          width="100%"
          className={styles.banner2}
        />
        <div className={styles.banner_text}>
          <h1 className="heading1">Embed NFTs on your website</h1>
          <p className={styles.banner_description}>
            Create, Sell, Award NFTs to customers, creators & connoisseurs
            <br /> No coding required, Go live in days with our ready-to-use
            SaaS
          </p>
        </div>
      </div>
    </>
  );
}

export default Banners;
