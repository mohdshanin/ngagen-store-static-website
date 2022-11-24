import React, { useEffect, useRef, useState } from "react";

import useMobile from "hooks/useMobile";
import styles from "./Home.module.css";

const bannersData = [
  {
    title: "Embed NFTs on your website",
    desc1: "Create, Sell, Award NFTs to customers, creators & connoisseurs",
    desc2: "No coding required, Go live in days with our ready-to-use SaaS",
  },
  {
    title: "Premium",
    desc1: "Drive sales by offering NFT holders early access, ",
    desc2: "exclusive experiences, limited edition products.",
  },
  {
    title: "Personalize in a privacy-centric world",
    desc1: "Incentivize zero-party data for personalization.",
    desc2: "Hyper-personalize offers based on NFTs customers reveal",
  },
];

const sectionsData = [
  {
    title: "Custom Store",
    desc: "Customize the user experience to seamlessly embed NFTs on your existing website",
  },
  {
    title: "Token Gated Commerce",
    desc: "Offer exclusive experiences to your NFT holders across digital and physical channels",
  },
  {
    title: "Personalization SDK",
    desc: "Personalize offers and experience based on what NFTs a user holds",
  },
];

function Section() {
  const isMobile = useMobile("(max-width: 500px)");

  const bannerCarousel =
    bannersData?.map(({ title, desc1, desc2 }) => ({
      id: title,
      child: (
        <div className={styles.banner_text} height={1}>
          <h1 className="heading1">{title}</h1>
          <div className={styles.banner_description}>
            <p className="m-0">{desc1}</p>
            <p className="m-0">{desc2}</p>
          </div>
        </div>
      ),
    })) || [];

  const sectionCarousel =
    sectionsData?.map(({ title, desc }) => ({
      id: title,
      child: (
        <div className={styles.section_item}>
          <h1 className="heading3">{title}</h1>
          <p className="description2">{desc}</p>
        </div>
      ),
    })) || [];

  return (
    <div className="relative">
      <div className={styles.banner_wrapper}>
        <BannerCarousel
          id="banner-carousel"
          carouselData={bannerCarousel}
          intervalTime={5000}
        />
      </div>
      <section
        className={`${styles.section_wrapper} ${styles.absolute} ${
          !isMobile && "invisible"
        }`}
      >
        <div className={styles.gradientbar_wrapper}>
          <div className={`${styles.gradient_bar} `} />
        </div>
        <SectionCarousel
          id="section-carousel"
          carouselData={sectionCarousel}
          intervalTime={5000}
        />
      </section>
    </div>
  );
}

export default Section;

function BannerCarousel({
  id = null,
  carouselData = [],
  autoSlide = true,
  intervalTime = 5000,
}) {
  const bannerCarouselRef = useRef();
  const isMobile = useMobile("(max-width: 500px)");
  const [activeSlide, setActiveSlide] = useState(0);
  let carouselInterval;

  const restartInterval = () => {
    clearInterval(carouselInterval);
    carouselInterval = setInterval(() => {
      setActiveSlide(window[id].getCurrentSlide());
    }, [intervalTime]);
  };

  const changeSlide = ({ slide }) => {
    window[id].changeSlide({ slide });
    setActiveSlide(slide);
    restartInterval();
  };

  const initialEffect = async () => {
    if (window?.[id]) window[id].stop();
    const { default: CarouselClass } = await import(
      "components/Common/Carousel/class"
    );
    window[id] = new CarouselClass({
      container: bannerCarouselRef.current,
      slidesCount: carouselData.length,
      autoSlide,
      intervalTime,
    });
    window[id].start();
    restartInterval();
  };

  useEffect(async () => {
    initialEffect();

    return () => {
      if (window?.[id]) window[id].stop();
      clearInterval(carouselInterval);
    };
  }, [carouselData.id]);

  useEffect(() => {
    const resizeHandler = () => {
      if (window[id]) changeSlide({ slide: 0 });
    };
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="relative">
      <div
        ref={bannerCarouselRef}
        display="grid"
        className={`${styles.carousel_container} ${styles.banner2}`}
      >
        {carouselData?.map(({ id: carouselId, child }) => (
          <div className="relative" key={carouselId}>
            {child}
          </div>
        ))}
      </div>
      {!isMobile && (
        <section className={styles.section_wrapper}>
          <div className={styles.gradientbar_wrapper}>
            <div
              className={`${styles.gradient_bar} ${
                activeSlide !== 0 && "invisible"
              }`}
            />
            <div
              className={`${styles.gradient_bar} ${
                activeSlide !== 1 && "invisible"
              }`}
            />
            <div
              className={`${styles.gradient_bar} ${
                activeSlide !== 2 && "invisible"
              }`}
            />
          </div>
          {sectionsData?.map(({ title, desc }, index) => {
            return (
              <div
                className={styles.section_item}
                onClick={() => changeSlide({ slide: index })}
                key={title}
              >
                <h1 className="heading3">{title}</h1>
                <p className="description2">{desc}</p>
              </div>
            );
          })}
        </section>
      )}
    </div>
  );
}

function SectionCarousel({
  id = null,
  carouselData = [],
  autoSlide = true,
  intervalTime = 5000,
}) {
  const carouselRef = useRef();
  const [activeSlide, setActiveSlide] = useState(0);
  let carouselInterval;

  const restartInterval = () => {
    clearInterval(carouselInterval);
    carouselInterval = setInterval(() => {
      setActiveSlide(window[id].getCurrentSlide());
    }, [intervalTime]);
  };

  const changeSlide = ({ slide }) => {
    window[id].changeSlide({ slide });
    setActiveSlide(slide);
    restartInterval();
  };

  const initialEffect = async () => {
    if (window?.[id]) window[id].stop();
    const { default: CarouselClass } = await import(
      "components/Common/Carousel/class"
    );
    window[id] = new CarouselClass({
      container: carouselRef.current,
      slidesCount: carouselData.length,
      autoSlide,
      intervalTime,
    });
    window[id].start();
    restartInterval();
  };

  useEffect(async () => {
    initialEffect();

    return () => {
      if (window?.[id]) window[id].stop();
      clearInterval(carouselInterval);
    };
  }, [carouselData.id]);

  useEffect(() => {
    const resizeHandler = () => {
      if (window[id]) changeSlide({ slide: 0 });
    };
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="relative">
      <div
        ref={carouselRef}
        display="grid"
        className={`${styles.carousel_container}`}
      >
        {carouselData?.map(({ id: carouselId, child }) => (
          <div className="relative" key={carouselId}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
