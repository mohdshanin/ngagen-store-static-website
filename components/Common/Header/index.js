import React from "react";

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header_wrapper}>
      <div className={styles.logo_container}>
        <img
          src="/ngagen.svg"
          alt="ngagen-logo"
          className={styles.ngagen_logo}
        />
        <p className={`${styles.ngagen_logo_text} orange-background text-mask`}>
          ngageN
        </p>
      </div>
      <div className={styles.btn_container}>
        <button type="button" className={styles.demo_btn}>
          Book a demo
        </button>
      </div>
    </div>
  );
}

export default Header;
