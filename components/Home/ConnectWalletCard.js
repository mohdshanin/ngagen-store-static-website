import React, { useState, useEffect } from "react";

import useMobile from "hooks/useMobile";
import styles from "./Home.module.css";

function ConnectWalletCard() {
  const isMobile = useMobile("(max-width: 780px)");

  function toDemoForm() {
    const element = document.getElementById("book-demo-form");
    window.scrollTo({
      behavior: element ? "smooth" : "auto",
      top: element ? element.offsetTop : 0,
    });
  }

  return (
    <article className={styles.demo_card_wrapper}>
      <div className={styles.demo_card}>
        <div className={styles.demo_container}>
          <div className={styles.card_text}>
            <h1 className="heading1">NFTs for D2C engagement</h1>
            <summary className={styles.summary_text}>
              Even if you sell via partners, retailers, e-commerce platforms
            </summary>
            <p className={styles.summary_text}>
              Web3 gives control of customer data to the customer. With 3rd
              party cookies on the way out, NFTs provide a solution for
              personalization, engagement & loyalty.
            </p>
            <p className={styles.summary_text}>
              With ngageN, Brands can incentivize customers to share this data.
              55% of customers are willing to share personal data to be part of
              a brand’s community
            </p>
          </div>
          <div className={styles.demo_img_wrapper}>
            <img
              src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/website-assets/asset-13.jpg`}
              alt="image"
              className={styles.card_img}
            />
          </div>
        </div>
        <div className={styles.btn_container}>
          <button type="button" onClick={toDemoForm} className="book_demo_btn">
            Book a demo
          </button>
        </div>
      </div>
    </article>
  );
}

export default ConnectWalletCard;
