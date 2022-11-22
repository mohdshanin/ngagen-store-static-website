export default class CarouselClass {
  constructor({
    container,
    slidesCount,
    scrollWidth = null,
    autoSlide = false,
    intervalTime = 5000,
  }) {
    this.container = container;
    this.slidesCount = slidesCount;
    this.scrollWidth = scrollWidth;
    this.slide = 0;
    this.incrementer = 1;
    this.autoSlide = autoSlide;
    this.intervalTime = intervalTime;
  }

  start() {
    if (this.autoSlide && this.container)
      this.interval = setInterval(() => {
        if (this.slide === this.slidesCount - 1) this.incrementer = -1;
        if (this.slide === 0) this.incrementer = 1;
        this.slide += this.incrementer;
        this.container.scrollBy({
          top: 0,
          left:
            this.incrementer * (this.scrollWidth || this.container.clientWidth),
          ...(!navigator.userAgent.includes('Mac') && {
            behavior: 'smooth',
          }),
        });
      }, this.intervalTime);
  }

  stop() {
    clearInterval(this.interval);
  }

  #scroll({ scrollToSlide = null }) {
    this.container.scrollBy({
      top: 0,
      left:
        scrollToSlide === 0
          ? -this.slidesCount * (this.scrollWidth || this.container.clientWidth)
          : (scrollToSlide || 1) *
            this.incrementer *
            (this.scrollWidth || this.container.clientWidth),
      ...(!navigator.userAgent.includes('Mac') && {
        behavior: 'smooth',
      }),
    });
    if (this.autoSlide) {
      this.stop();
      this.start();
    }
  }

  getCurrentSlide() {
    return this.slide;
  }

  getSlidesCount() {
    return this.slidesCount;
  }

  nextSlide() {
    if (this.container && this.slide < this.slidesCount - 1) {
      this.slide += 1;
      this.incrementer = 1;
      this.#scroll({ scrollToSlide: null });
    }
  }

  prevSlide() {
    if (this.container && this.slide > 0) {
      this.slide -= 1;
      this.incrementer = -1;
      this.#scroll({ scrollToSlide: null });
    }
  }

  changeSlide({ slide = null }) {
    if (this.container && this.slide >= 0) {
      this.incrementer = 1;
      this.#scroll({ scrollToSlide: slide - this.slide });
      this.slide = slide;
    }
  }
}
