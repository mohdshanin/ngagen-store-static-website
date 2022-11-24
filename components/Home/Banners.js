import React from "react";

import styles from "./Home.module.css";

function Banners() {
  return (
    <>
      <div className={styles.banner_wrapper}>
        <img
          src={
            "https://cdn.ngagen.team/ngagen-store-static-staging/website-assets/asset-8.jpg"
          }
          alt="banner1"
          width="100%"
          className={styles.banner1}
        />
        <div className={`${styles.banner_shadow} shadow-background`} />
        <header
          className={`${styles.banner_text} ${styles.header_banner_text}`}
        >
          <h1 className="heading1">
            NFT-Powered <br />
            Marketing platform for Brands
          </h1>
          <p className={styles.banner_description}>
            Drive engagement, personalization & loyalty in Web3
          </p>
        </header>
      </div>
    </>
  );
}

export default Banners;
