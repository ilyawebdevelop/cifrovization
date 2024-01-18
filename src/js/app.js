import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.7.1.min.js";
import "./modules/fslightbox.js";
import "./modules/bootstrap.bundle.min.js";
import "./modules/select2.min.js";
import './components.js';

flsFunctions.isWebp();

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);

// Инициализация слайдера partnersSlider
const relatedSlider = document.querySelector('.relatedSlider');
var mySwiperRelated = new Swiper(relatedSlider, {
  slidesPerView: 4,
  speed: 800,
  spaceBetween: 29,
  navigation: {
    nextEl: document.querySelector('.related .sliderArrowNext'),
    prevEl: document.querySelector('.related .sliderArrowPrev'),
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

// Инициализация слайдера projectsSlider
const projectsSlider = document.querySelector('.projectsSlider');
var mySwiperProjects = new Swiper(projectsSlider, {
  slidesPerView: 3,
  speed: 800,
  spaceBetween: 19,
  navigation: {
    nextEl: document.querySelector('.projects .sliderArrowNext'),
    prevEl: document.querySelector('.projects .sliderArrowPrev'),
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

$(document).ready(function () {
  $('.js-example-basic-single').select2({
    minimumResultsForSearch: -1
  });
  $('.js-example-basic-single_2').select2({
    minimumResultsForSearch: -1
  });
});

