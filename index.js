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


  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 110, // Ajuste o valor para parar mais acima
          behavior: 'smooth'
        });
      }
    });
  });
  