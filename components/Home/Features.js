import React from "react";

import useMobile from "hooks/useMobile";
import styles from "./Home.module.css";

function Features() {
  const isSmallMobile = useMobile("(max-width: 410px)");

  return (
    <div className="inner_wrapper">
      <div className="center_align">
        <h1 className="heading1">What makes us unique?</h1>
        <p className="description1">
          Web3 architecture that powers a Web2 User Experience
        </p>
      </div>
      <div className={styles.feature}>
        <div className={`img_wrapper ${styles.feature_img}`}>
          <img
            src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/asset-14.jpg`}
            alt="image"
            width="auto"
            height={isSmallMobile ? "25px" : "35px"}
          />
          <img
            src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/asset-5.gif`}
            alt="image"
            width="auto"
            height={isSmallMobile ? "40px" : "52px"}
          />
        </div>
        <div className={styles.feature_text}>
          <h2 className="heading2">Easy Sign-Up</h2>
          <h3 className="heading3">
            Simplest user experience for you and your customers.
          </h3>
          <p className="description2">
            Sign up with your email address.
            <br /> 1-click wallet set-up
          </p>
        </div>
      </div>
      <div className={styles.feature}>
        <div className={`img_wrapper ${styles.feature_img}`}>
          <div className="flex-row align-center">
            <img
              src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/asset-3.gif`}
              alt="image"
              width="auto"
              height={isSmallMobile ? "70px" : "100px"}
            />
            <img
              src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/asset-1.gif`}
              alt="image"
              width="auto"
              height={isSmallMobile ? "40px" : "52px"}
            />
          </div>
        </div>
        <div className={styles.feature_text}>
          <h2 className="heading2">
            User Experience that everyone understands
          </h2>
          <h3 className="heading3">
            Seamless User Experience for crypto-natives and the other 99%
          </h3>
          <p className="description2">
            Pay with Credit, Debit Cards.
            <br /> E-commerce like user experience that customers are used to
          </p>
        </div>
      </div>
      <div className={styles.feature}>
        <div className={`img_wrapper ${styles.feature_img}`}>
          <div className="flex-row relative">
            <img
              src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/asset-6.gif`}
              alt="image"
              width="auto"
              height={isSmallMobile ? "70px" : "100px"}
            />
            <img
              src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/asset-2.gif`}
              alt="image"
              width="auto"
              height={isSmallMobile ? "40px" : "52px"}
              className={styles.feature_topimg}
            />
          </div>
        </div>
        <div className={`${styles.feature_text}`}>
          <h2 className="heading2">Built in Global eKYC</h2>
          <h3 className="heading3">
            Online or in person, By sociaal email, SMS or scannable QR Code
          </h3>
          <p className="description2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className={styles.feature}>
        <div className={`img_wrapper ${styles.feature_img} flex-row`}>
          <img
            src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/asset-4.gif`}
            alt="image"
            width="auto"
            height={isSmallMobile ? "85px" : "120px"}
          />
        </div>
        <div className={styles.feature_text}>
          <h2 className="heading2">Self Use for your Team</h2>
          <h3 className="heading3">
            Online or in person, By social email, SMS or scannable QR Code
          </h3>
          <p className="description2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
