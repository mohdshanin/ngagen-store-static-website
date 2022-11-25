import React, { useState, useEffect } from "react";

import useMobile from "hooks/useMobile";
import styles from "./Header.module.css";

function Header() {
  const isMobile = useMobile("(max-width: 780px)");

  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    const navbar = document.getElementById("navbar");
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (currentScrollPos <= 0) {
        prevScrollpos = currentScrollPos;
        return;
      }
      if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";
      } else {
        navbar.style.top = `-${navbar.offsetHeight}px`;
      }
      prevScrollpos = currentScrollPos;
    };
  }, []);

  function toDemoForm() {
    const element = document.getElementById("book-demo-form");
    window.scrollTo({
      behavior: element ? "smooth" : "auto",
      top: element ? element.offsetTop : 0,
    });
  }

  return (
    <header id="navbar" className={styles.header_wrapper}>
      <nav className={styles.logo_container}>
        <a href="https://www.ngagen.com">
          {!isMobile && (
            <img
              src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/logos/logo-1.png`}
              alt="ngagen-logo"
              className={styles.ngagen_logo}
            />
          )}
          {isMobile && (
            <img
              src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/logos/logo-2.png`}
              alt="ngagen-logo"
              className={styles.ngagen_logo}
            />
          )}
        </a>
      </nav>
      <div className={styles.btn_container}>
        <button type="button" onClick={toDemoForm} className="book_demo_btn">
          Book a demo
        </button>
      </div>
    </header>
  );
}

export default Header;
