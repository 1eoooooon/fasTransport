import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const swiper = new Swiper(".swiper", {
  modules: [Navigation],
  centeredSlides: true,
  freeMode: true,
  initialSlide: 1,
  slidesPerView: 3,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 38,
    },
  },
});
