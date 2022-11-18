import React from "react";

import styles from "./Home.module.css";

function ComingSoon() {
  return (
    <div className="inner_wrapper">
      <div className="center_align">
        <h1 className="heading2">NFT Experiences all about you</h1>
        <p className="description1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </p>
      </div>
      <div className={styles.coming_soon_wrapper}>
        <div className={styles.coming_soon}>
          <h1 className="heading1">Coming Soon</h1>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
