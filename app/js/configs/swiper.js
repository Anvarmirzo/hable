export const swiperConfig  =()=>{
  const doctorsSwiper = new Swiper(".doctors-swiper", {
    slidesPerView: 3.6,
    spaceBetween: 20,
    freeMode: true,
    loop: true,
    speed: 600,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".doctors-swiper .swiper-button-next",
      prevEl: ".doctors-swiper .swiper-button-prev",
    },
  });
}