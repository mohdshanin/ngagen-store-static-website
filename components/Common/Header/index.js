import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

import styles from "./Header.module.css";

function Header() {
  const [isDemoBooked, setIsDemoBooked] = useState("");

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

  useEffect(() => {
    if (Cookies.get("email")) return setIsDemoBooked(Cookies.get("email"));
    return setIsDemoBooked("");
  }, [Cookies.get("email")]);

  function toDemoForm() {
    const element = document.getElementById("book-demo-form");
    window.scrollTo({
      behavior: element ? "smooth" : "auto",
      top: element ? element.offsetTop : 0,
    });
  }

  return (
    <nav id="navbar" className={styles.header_wrapper}>
      <header className={styles.logo_container}>
        <img
          src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/logos/logo-2.png`}
          alt="ngagen-logo"
          className={styles.ngagen_logo}
        />
        <h3
          className={`${styles.ngagen_logo_text} orange-background text-mask`}
        >
          ngageN
        </h3>
      </header>
      <div className={styles.btn_container}>
        <button
          type="button"
          onClick={toDemoForm}
          disabled={isDemoBooked}
          className="book_demo_btn"
          title={isDemoBooked ? "You have already booked a demo" : ""}
        >
          Book a demo
        </button>
      </div>
    </nav>
  );
}

export default Header;
