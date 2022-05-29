// core version + navigation, pagination modules:
import Swiper, { Pagination } from 'swiper';
// init Swiper:
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Pagination],
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    // dynamicBullets: true
  },
});
