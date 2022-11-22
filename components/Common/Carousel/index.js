import React, { useEffect, useRef, useState } from "react";

import styles from "./Carousel.module.css";

function Carousel({
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
      {carouselData.length > 1 && (
        <div className={styles.button_Wrapper}>
          {carouselData.map(({ id: carouselId }, i) => (
            <button
              key={carouselId || ""}
              onClick={() => changeSlide({ slide: i })}
              className={`${styles.button} ${
                activeSlide === i && styles.selected
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Carousel;
