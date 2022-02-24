export const swiperConfig = () => {
  const enableSwiper = () => {
    const doctorsSwiper = new Swiper('.doctors-swiper', {
      slidesPerView: 3.6,
      spaceBetween: 20,
      freeMode: true,
      loop: true,
      speed: 1000,
      autoplay: {
      pauseOnMouseEnter: true,
        delay: 5000,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: '.doctors-swiper .swiper-button-next',
        prevEl: '.doctors-swiper .swiper-button-prev'
      },
      breakpoints: {
        320: {
          slidesPerView: 1.5,
          spaceBetween: 20
        },
        630: {
          slidesPerView: 1.7,
          spaceBetween: 20
        },
        715: {
          slidesPerView: 1.9,
          spaceBetween: 20
        },
        810: {
          slidesPerView: 2.2,
          spaceBetween: 20
        },
        900: {
          spaceBetween: 20,
          slidesPerView: 2.5
        },
        980: {
          slidesPerView: 2.6,
          spaceBetween: 30
        },
        1230: {
          slidesPerView: 3,
          spaceBetween: 40
        },
        1400: {
          slidesPerView: 3.6
        }
      }
    });
  };

// breakpoint where swiper will be destroyed
// and switches to a dual-column layout
  const breakpoint = window.matchMedia('(max-width:576px)');
// keep track of swiper instances to destroy later
  let mySwiper;
  const breakpointChecker = function () {
    // if larger viewport and multi-row layout needed
    if (breakpoint.matches === true) {
      // clean up old instances and inline styles when available
      if (mySwiper !== undefined) mySwiper.destroy(true, true);
      // or/and do nothing
      return;
      // else if a small viewport and single column layout needed
    } else if (breakpoint.matches === false) {
      // fire small viewport version of swiper
      return enableSwiper();
    }
  };
  // keep an eye on viewport size changes
  breakpoint.addListener(breakpointChecker);
// kickstart
  breakpointChecker();
};

