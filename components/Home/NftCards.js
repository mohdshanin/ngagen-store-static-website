import React from "react";

import LimitedIcon from "components/Common/Icons/Limited";
import ExclusiveIcon from "components/Common/Icons/Exclusive";
import PhygitalIcon from "components/Common/Icons/Phygital";
import DonateIcon from "components/Common/Icons/Donate";
import CoCreateIcon from "components/Common/Icons/CoCreate";
import FanIcon from "components/Common/Icons/Fan";
import styles from "./Home.module.css";

function Section() {
  return (
    <div className="inner_wrapper">
      <div className="center_align">
        <h1 className="heading1">Real world NFT Experiences</h1>
      </div>
      <div className={styles.card_carousel}>
        <div className={styles.card}>
          <img
            src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/website-assets/asset-15.jpg`}
            alt="image"
            width="312px"
            height="221px"
            className={styles.card_image}
          />
          <div>
            <h3 className={styles.card_title}>
              Create your brand’s loyal community
            </h3>
            <div className={styles.icon_wrapper}>
              <LimitedIcon width="24" height="24" />
              <ExclusiveIcon width="24" height="24" />
              <CoCreateIcon width="24" height="24" />
            </div>
          </div>
          <h3 className={styles.card_header}>Header</h3>
          <p className={styles.card_description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
        <div className={styles.card}>
          <img
            src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/website-assets/asset-16.jpg`}
            alt="image"
            width="312px"
            height="221px"
            className={styles.card_image}
          />
          <div>
            <h3 className={styles.card_title}>
              Create your brand’s loyal community
            </h3>
            <div className={styles.icon_wrapper}>
              <LimitedIcon width="24" height="24" />
              <DonateIcon width="24" height="24" />
              <PhygitalIcon width="24" height="24" />
            </div>
          </div>
          <h3 className={styles.card_header}>Header</h3>
          <p className={styles.card_description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
        <div className={styles.card}>
          <img
            src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/website-assets/asset-17.jpg`}
            alt="image"
            width="312px"
            height="221px"
            className={styles.card_image}
          />
          <div>
            <h3 className={styles.card_title}>
              Create your brand’s loyal community
            </h3>
            <div className={styles.icon_wrapper}>
              <FanIcon width="26" height="26" />
            </div>
            <h3 className={styles.card_header}>Header</h3>
            <p className={styles.card_description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
