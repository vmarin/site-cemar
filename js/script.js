var swiper = new Swiper(".slide-content", {
    slidesPerView: 5,
    spaceBetween: 0,    
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });