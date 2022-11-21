import React from "react";

import styles from "./Home.module.css";

function Section() {
  return (
    <section className={styles.section_wrapper}>
      <div className={styles.section_item}>
        <h1 className="heading3">Custom Store</h1>
        <p className="description2">
          Customize the user experience to seamlessly embed NFTs on your
          existting website
        </p>
      </div>
      <div className={styles.section_item}>
        <h1 className="heading3">Token Gated Commerce</h1>
        <p className="description2">
          Offer exclusive experiences to your NFT holders across digital and
          physical channels
        </p>
      </div>
      <div className={styles.section_item}>
        <h1 className="heading3">Personalization SDK</h1>
        <p className="description2">
          Personalize offers and experience based on what NFTs a user holds
        </p>
      </div>
    </section>
  );
}

export default Section;
