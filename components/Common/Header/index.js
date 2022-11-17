import React, { useEffect } from "react";

import styles from "./Header.module.css";

function Header() {
  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    const navbar = document.getElementById("navbar");
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";
      } else {
        navbar.style.top = `-${navbar.offsetHeight}px`;
      }
      prevScrollpos = currentScrollPos;
    };
  }, []);

  return (
    <div id="navbar" className={styles.header_wrapper}>
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
        <a href="#book-demo-form" type="button" className="book_demo_btn">
          Book a demo
        </a>
      </div>
    </div>
  );
}

export default Header;
