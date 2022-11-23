import React from "react";

import styles from "./Home.module.css";

function ComingSoon() {
  return (
    <aside className="inner_wrapper">
      <header className="center_align">
        <h2 className="heading2">NFT Experiences for your Brand</h2>
        <p className="description1">
          Brand NFT Case Studies from around the world
        </p>
      </header>
      <div className={styles.coming_soon_wrapper}>
        <div className={styles.coming_soon}>
          <h1 className="heading1">Coming Soon</h1>
        </div>
      </div>
    </aside>
  );
}

export default ComingSoon;
