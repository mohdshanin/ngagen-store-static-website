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
    <section className="inner_wrapper">
      <header className="center_align">
        <h1 className="heading1">Real world NFT Experiences</h1>
      </header>
      <div className={styles.card_carousel}>
        <div className={styles.card}>
          <img
            src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/website-assets/asset-15.jpg`}
            alt="image"
            className={styles.card_image}
          />
          <div>
            <h3 className={styles.card_title}>ABOVE THE GOLDEN CLOUDS</h3>
            <div className={styles.icon_wrapper}>
              <LimitedIcon width="24" height="24" />
              <ExclusiveIcon width="24" height="24" />
              <CoCreateIcon width="24" height="24" />
            </div>
          </div>
          <summary className={styles.card_header}>Consumer Brands</summary>
          <div className={styles.card_description}>
            <p className="mt-0">Digital Art inspired by Architecture NFT</p>
            <p>
              holders get home improvement consultation and gift vouchers from
              select partners
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/website-assets/asset-16.jpg`}
            alt="image"
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
          <summary className={styles.card_header}>Sports</summary>
          <div className={styles.card_description}>
            <p className="mt-0">Digital player cards</p>
            <p>
              NFT holders get access to physical jerseys, reward points & win
              gift vouchers
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/website-assets/asset-17.jpg`}
            alt="image"
            className={styles.card_image}
          />
          <div>
            <h3 className={styles.card_title}>
              Create your brand’s loyal community
            </h3>
            <div className={styles.icon_wrapper}>
              <FanIcon width="26" height="26" />
            </div>
            <summary className={styles.card_header}>Gaming</summary>
            <div className={styles.card_description}>
              <p className="mt-0">Digital Trophies</p>
              <p>
                Top performers can showcase their achievemnts on Facebook and
                Instagram
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
