(function () {
  "use strict";

  document.querySelector("html").classList = "js";

  var swiper = new Swiper(".vehicle-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    lazy: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".vehicle-pagination",
      clickable: false,
    },
    breakpoints: {
      520: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  var swiper = new Swiper(".featured-swiper1", {
    slidesPerView: 1,
    spaceBetween: 30,
    lazy: true,
    pagination: {
      el: ".featured-pagination1",
      clickable: true,
    },
    breakpoints: {
      520: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  var swiper = new Swiper(".featured-swiper2", {
    slidesPerView: 1,
    spaceBetween: 30,
    lazy: true,
    pagination: {
      el: ".featured-pagination2",
      clickable: true,
    },
    breakpoints: {
      520: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  var swiper = new Swiper(".review-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    lazy: true,
    pagination: {
      el: ".review-pagination",
      clickable: true,
    },
    breakpoints: {
      520: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  // Scrollspy


})()