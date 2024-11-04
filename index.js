const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    keyboard: true,
    breakpoints: {
      700: {
        slidesPerView: 2,
        spaceBetween: -55,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });