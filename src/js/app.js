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
      spaceBetween: 20,
    },
    1400: {
      spaceBetween: 29,
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

// Burger
const btnMenu = document.querySelector('#toggle');
const menu = document.querySelector('.headerNav');

const bodyEl = document.querySelector('body');
const menuLine1 = document.querySelector('.top-bun');
const menuLine2 = document.querySelector('.meat');
const menuLine3 = document.querySelector('.bottom-bun');
let navItemAll = document.querySelectorAll('.headerNavList li a');

const toggleMenu = function () {
  menu.classList.toggle('active');
}
const toggleBurger = function () {
  btnMenu.classList.toggle('active');
}
const toggleMenuLine = function () {
  menuLine1.classList.toggle('active');
  menuLine2.classList.toggle('active');
  menuLine3.classList.toggle('active');
}
const bodyOverflow = function () {
  bodyEl.classList.toggle('hidden');
}

btnMenu?.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleMenu();
  toggleBurger();
  bodyOverflow();
  toggleMenuLine();
});

// close menu in Landing page
$(document).on("click", ".headerNavList li a", function (e) {
  $('.headerNav').removeClass('active');
  $('body').removeClass('hidden');
  toggleBurger();
  toggleMenuLine();
});
