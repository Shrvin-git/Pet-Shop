const swiper = new Swiper('.swiper-item', {

  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {

    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },

    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },

});

const swiperOff = new Swiper(".slider__offer", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {

    1200: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
})


const swiperSlider = new Swiper('.mySwiper', {

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,


  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});

const productSlide = new Swiper(".product-slide", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {

    576: {
      slidesPerView: 1
    },


    768: {
      slidesPerView: 2

    },
    992: {
      slidesPerView: 3

    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30
    },
  }

});




const navToggleIcon = document.querySelector('.btn__toggle')
const menu = document.querySelector('.mobile__nav')
const navToggleIconClose = document.querySelector(".close__menu")


navToggleIconClose.addEventListener("click", function () {
  menu.classList.toggle("menu__close");
  menu.classList.remove("menu--open");
})


navToggleIcon.addEventListener('click', function () {
  this.classList.toggle('nav__toggle-icon--open');
  menu.classList.toggle('menu--open');
  menu.classList.remove('menu__close');
})