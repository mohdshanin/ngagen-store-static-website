import React from "react";

import useMobile from "hooks/useMobile";
import styles from "./Home.module.css";

function Features() {
  const isSmallMobile = useMobile("(max-width: 410px)");

  return (
    <div className={styles.oneClick}>
      <section className="inner_wrapper">
        <header className="center_align">
          <h1 className="heading1">What makes us unique?</h1>
          <p className="description1">
            Web3 architecture that powers a Web2 User Experience
          </p>
        </header>
        <div className={styles.feature}>
          <div className={`img_wrapper ${styles.feature_img}`}>
            <img
              src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/website-assets/asset-14.png`}
              alt="image"
              width="auto"
              height={isSmallMobile ? "25px" : "35px"}
            />
            <img
              src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/website-assets/asset-5.gif`}
              alt="image"
              width="auto"
              height={isSmallMobile ? "40px" : "52px"}
            />
          </div>
          <div className={styles.feature_text}>
            <h2 className="heading1">Easy Sign-Up</h2>
            <summary className={styles.summary_text}>
              Simplest user experience for you and your customers.
            </summary>
            <p className={styles.summary_text}>
              Sign up with your email address.
              <br /> Simple wallet set-up
            </p>
          </div>
        </div>
        <div className={styles.feature}>
          <div className={`img_wrapper ${styles.feature_img}`}>
            <div className="flex-row align-center">
              <img
                src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/website-assets/asset-3.gif`}
                alt="image"
                width="auto"
                height={isSmallMobile ? "70px" : "100px"}
              />
              <img
                src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/website-assets/asset-1.gif`}
                alt="image"
                width="auto"
                height={isSmallMobile ? "40px" : "52px"}
              />
            </div>
          </div>
          <div className={styles.feature_text}>
            <h2 className="heading1">
              User Experience that everyone understands
            </h2>
            <summary className={styles.summary_text}>
              Seamless User Experience for crypto-natives and the other 99%
            </summary>
            <p className={styles.summary_text}>
              Pay with Credit, Debit Cards.
              <br /> E-commerce like user experience that customers are used to
            </p>
          </div>
        </div>
        <div className={styles.feature}>
          <div className={`img_wrapper ${styles.feature_img}`}>
            <div className="flex-row relative">
              <img
                src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/website-assets/asset-6.gif`}
                alt="image"
                width="auto"
                height={isSmallMobile ? "70px" : "100px"}
              />
              <img
                src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/website-assets/asset-2.gif`}
                alt="image"
                width="auto"
                height={isSmallMobile ? "40px" : "52px"}
                className={styles.feature_topimg}
              />
            </div>
          </div>
          <div className={`${styles.feature_text}`}>
            <h2 className="heading1">Built in Global eKYC</h2>
            <summary className={styles.summary_text}>
              Easy customer onboarding while staying compliant
            </summary>
            <p className={styles.summary_text}>
              Instant Identity Verification
              <br /> Across the Globe
            </p>
          </div>
        </div>
        <div className={styles.feature}>
          <div className={`img_wrapper ${styles.feature_img} flex-row`}>
            <img
              src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/website-assets/asset-4.gif`}
              alt="image"
              width="auto"
              height={isSmallMobile ? "85px" : "120px"}
            />
          </div>
          <div className={styles.feature_text}>
            <h2 className="heading1">Self Use for your Team</h2>
            <summary className={styles.summary_text}>
              Launch NFTs aligned with your marketing campaigns
            </summary>
            <p className={styles.summary_text}>
              Create, Sell, Award NFTs when you want, in real time
              <br />
              Separate logins for team members
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
