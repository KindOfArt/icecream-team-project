import Swiper, { Pagination, EffectFlip, EffectFade, Autoplay } from 'swiper';
// init Swiper:
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Pagination, EffectFlip, EffectFade, Autoplay],
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    // dynamicBullets: true
  },
  loop: true,
  // effect: 'fade',
  // fadeEffect: {
  //   crossFade: false,
  // },
  effect: 'flip',
  flipEffect: {
    slideShadows: false,
    // limitRotation: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});
