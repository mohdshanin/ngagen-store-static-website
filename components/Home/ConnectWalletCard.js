import React from "react";

import useMobile from "hooks/useMobile";

import styles from "./Home.module.css";

function ConnectWalletCard() {
  const isMobile = useMobile("(max-width: 780px)");

  return (
    <div className={styles.demo_card}>
      <div className={styles.demo_container}>
        <div className={styles.card_text}>
          <h1 className="heading1">NFTs for D2C engagement</h1>
          <h3 className="heading3">
            Even if you sell via partners, retailers, e-commerce platforms
          </h3>
          <p className="description2">
            Web3 gives control of customer data to the customer. With 3rd party
            cookies on the way out, NFTs provide a solution for personalization,
            engagement & loyalty.
          </p>
          <p className="description2">
            With ngageN, Brands can incentivize customers to share this data.
            55% of customers are willing to share personal data to be part of a
            brand’s community
          </p>
        </div>
        <div className={styles.demo_img_wrapper}>
          <img
            src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/asset-13.jpg`}
            alt="image"
            className={styles.card_img}
          />
          {!isMobile && (
            <div className={styles.btn_container}>
              <a href="#book-demo-form" type="button" className="book_demo_btn">
                Book a demo
              </a>
            </div>
          )}
        </div>
      </div>
      {isMobile && (
        <div className={styles.btn_container}>
          <a href="#book-demo-form" type="button" className="book_demo_btn">
            Book a demo
          </a>
        </div>
      )}
    </div>
  );
}

export default ConnectWalletCard;
