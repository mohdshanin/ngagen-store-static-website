import React from "react";

import LimitedIcon from "components/Common/Icons/Limited";
import PhygitalIcon from "components/Common/Icons/Phygital";
import DonateIcon from "components/Common/Icons/Donate";
import ExclusiveIcon from "components/Common/Icons/Exclusive";
import FanIcon from "components/Common/Icons/Fan";
import ProofIcon from "components/Common/Icons/Proof";
import RecognizeIcon from "components/Common/Icons/Recognize";
import CoCreateIcon from "components/Common/Icons/CoCreate";
import FeaturedIcon from "components/Common/Icons/Featured";
import EarlyAccessIcon from "components/Common/Icons/EarlyAccess";
import SubscriptionIcon from "components/Common/Icons/Subscription";
import VoteIcon from "components/Common/Icons/Vote";
import useMobile from "hooks/useMobile";
import styles from "./Home.module.css";

function Steps() {
  const isMobile = useMobile("(max-width: 600px)");

  return (
    <div className={styles.gradientBg}>
      <section className="inner_wrapper">
        <header className="center_align pb-4">
          <h1 className="heading1">Deploy Innovative Marketing Campaings</h1>
          <p className="description1">Engage your Brand’s Community</p>
        </header>
        <div className={styles.step_wrapper}>
          {!isMobile && (
            <div className={`img_wrapper ${styles.step_img_width}`}>
              <img
                src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/website-assets/asset-12.png`}
                alt="image"
                width="auto"
                className={styles.step1_img}
              />
            </div>
          )}
          <div className={styles.step_right}>
            <div className={styles.dot} />
            {isMobile && (
              <img
                src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/website-assets/asset-12.png`}
                alt="image"
                width="auto"
                className={styles.step1_img}
              />
            )}
            <h2 className="heading2 mt-0">
              Drive eyeballs with Collectible Ads
            </h2>
            <summary className="heading3">
              Enable fans to display their love for your brand and reward them
              with...
            </summary>
            <p className={styles.step_attributes}>
              <LimitedIcon />
              Limited Edition Products
            </p>
            <p className={styles.step_attributes}>
              <PhygitalIcon />
              Phygital NFTs
            </p>
            <p className={styles.step_attributes}>
              <DonateIcon />
              Donating proceeds to causes they care about
            </p>
          </div>
        </div>
        <div className={styles.step_wrapper}>
          {!isMobile && (
            <div className={`img_wrapper ${styles.step_img_width}`}>
              <img
                src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/website-assets/asset-9.png`}
                alt="image"
                width="auto"
                className={styles.step2_img}
              />
            </div>
          )}
          <div className={styles.step_right}>
            <div className={styles.dot} />
            {isMobile && (
              <img
                src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/website-assets/asset-9.png`}
                alt="image"
                width="auto"
                className={styles.step2_img}
              />
            )}
            <h2 className="heading2 mt-0">
              Create micro-influencers with Golden Tickets
            </h2>
            <summary className="heading3">
              Generate word-of-mouth marketing by
            </summary>
            <p className={styles.step_attributes}>
              <ExclusiveIcon />
              Access to Exclusive Experience
            </p>
            <p className={styles.step_attributes}>
              <FanIcon width="18" height="18" />
              Enabling Fan Meet
            </p>
            <p className={styles.step_attributes}>
              <ProofIcon />
              Issuing Proof of Attendance as memorabalia
            </p>
          </div>
        </div>
        <div className={styles.step_wrapper}>
          {!isMobile && (
            <div className={`img_wrapper ${styles.step_img_width}`}>
              <img
                src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/website-assets/asset-11.png`}
                alt="image"
                width="auto"
                className={styles.step3_img}
              />
            </div>
          )}
          <div className={styles.step_right}>
            <div className={styles.dot} />
            {isMobile && (
              <img
                src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/website-assets/asset-11.png`}
                alt="image"
                width="auto"
                className={styles.step3_img}
              />
            )}
            <h2 className="heading2 mt-0">
              Recognize brand ambassdors with Digital Trophies
            </h2>
            <summary className="heading3">
              Engage with the creator economy to extend your brand
            </summary>
            <p className={styles.step_attributes}>
              <RecognizeIcon />
              Recognize Top Creators & Contributors
            </p>
            <p className={styles.step_attributes}>
              <CoCreateIcon />
              Enable co-creation of content and product extension
            </p>
            <p className={styles.step_attributes}>
              <FeaturedIcon />
              Feature brand ambasdors on your website, social media, ads
            </p>
          </div>
        </div>
        <div className={styles.step_wrapper}>
          {!isMobile && (
            <div className={`img_wrapper ${styles.step_img_width}`}>
              <img
                src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/website-assets/asset-10.png`}
                alt="image"
                width="auto"
                className={styles.step4_img}
              />
            </div>
          )}
          <div className={`${styles.step_right} pb-0`}>
            <div className={styles.dot} />
            {isMobile && (
              <img
                src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/website-assets/asset-10.png`}
                alt="image"
                width="auto"
                className={styles.step4_img}
              />
            )}
            <h2 className="heading2 mt-0">
              Reinforce Loyalty with Community Membership
            </h2>
            <summary className="heading3">
              Create your brand’s loyal community which gets
            </summary>
            <p className={styles.step_attributes}>
              <EarlyAccessIcon /> Early access to new products
            </p>
            <p className={styles.step_attributes}>
              <SubscriptionIcon />
              Curated Monthly subscription
            </p>
            <p className={styles.step_attributes}>
              <VoteIcon />
              Right to Vote on brand decisions
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Steps;
