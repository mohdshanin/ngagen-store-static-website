import React, { useEffect, useRef } from "react";

import Carousel from "components/Common/Carousel";
import LimitedIcon from "components/Common/Icons/Limited";
import ExclusiveIcon from "components/Common/Icons/Exclusive";
import PhygitalIcon from "components/Common/Icons/Phygital";
import DonateIcon from "components/Common/Icons/Donate";
import CoCreateIcon from "components/Common/Icons/CoCreate";
import RecognizeIcon from "components/Common/Icons/Recognize";
import useMobile from "hooks/useMobile";
import styles from "./Home.module.css";

const nftCardsData = [
  {
    asset: "video-3.mp4",
    title: "ABOVE THE GOLDEN CLOUDS",
    heading: "Consumer Brands",
    desc1: "Digital Art inspired by Architecture NFT",
    desc2:
      "holders get home improvement consultation and gift vouchers from select partners",
  },
  {
    asset: "video-2.mp4",
    title: "Create your brand’s loyal community",
    heading: "Sports",
    desc1: "Digital player cards",
    desc2:
      "NFT holders get access to physical jerseys, reward points & win gift vouchers",
  },
  {
    asset: "video-1.mp4",
    title: "Create your brand’s loyal community",
    heading: "Gaming",
    desc1: "Digital Trophies",
    desc2:
      "Top performers can showcase their achievemnts on Facebook and Instagram",
  },
];

function Section() {
  const isTablet = useMobile("(max-width: 1143px)");
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef) {
      videoRef.current.autoPlay = true;
    }
  }, [videoRef]);

  const nftCarousel =
    nftCardsData?.map(({ asset, title, heading, desc1, desc2 }, index) => ({
      id: title,
      child: (
        <div className={styles.card}>
          <video
            ref={videoRef}
            controls
            autoPlay
            loop
            muted
            controlsList="nodownload"
            src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/website-assets/${asset}`}
            className={styles.card_image}
          >
            <source src="movie.mp4" type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
          <div>
            <h3 className={styles.card_title}>{title}</h3>
            <div className={styles.icon_wrapper}>
              {index !== 2 && <LimitedIcon width="24" height="24" />}
              {index === 0 && <ExclusiveIcon width="24" height="24" />}
              {index === 0 && <CoCreateIcon width="24" height="24" />}
              {index === 1 && <DonateIcon width="24" height="24" />}
              {index === 1 && <PhygitalIcon width="24" height="24" />}
              {index === 2 && <RecognizeIcon width="26" height="26" />}
            </div>
          </div>
          <summary className={styles.card_header}>{heading}</summary>
          <div className={styles.card_description}>
            <p className="mt-0">{desc1}</p>
            <p>{desc2}</p>
          </div>
        </div>
      ),
    })) || [];

  return (
    <section className="inner_wrapper">
      <header className="center_align">
        <h1 className="heading1">Real world NFT Experiences</h1>
      </header>
      <div
        className={`${styles.card_carousel} ${
          isTablet && "invisible absolute"
        }`}
      >
        {nftCardsData?.map(({ asset, title, heading, desc1, desc2 }, index) => {
          return (
            <div className={styles.card}>
              <video
                ref={videoRef}
                controls
                autoPlay
                loop
                muted
                controlsList="nodownload"
                src={`${process.env.NEXT_PUBLIC_WEB_ASSETS_URL}/website-assets/${asset}`}
                className={styles.card_image}
              >
                <source src="movie.mp4" type="video/mp4" />
                <source src="movie.ogg" type="video/ogg" />
                Your browser does not support the video tag.
              </video>
              <div>
                <h3 className={styles.card_title}>{title}</h3>
                <div className={styles.icon_wrapper}>
                  {index !== 2 && <LimitedIcon width="24" height="24" />}
                  {index === 0 && <ExclusiveIcon width="24" height="24" />}
                  {index === 0 && <CoCreateIcon width="24" height="24" />}
                  {index === 1 && <DonateIcon width="24" height="24" />}
                  {index === 1 && <PhygitalIcon width="24" height="24" />}
                  {index === 2 && <RecognizeIcon width="26" height="26" />}
                </div>
              </div>
              <summary className={styles.card_header}>{heading}</summary>
              <div className={styles.card_description}>
                <p className="mt-0">{desc1}</p>
                <p>{desc2}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className={`${styles.card_carousel} ${
          !isTablet && "invisible absolute"
        }`}
      >
        <Carousel
          id="nft-carousel"
          carouselData={nftCarousel}
          intervalTime={5000}
        />
      </div>
    </section>
  );
}

export default Section;
