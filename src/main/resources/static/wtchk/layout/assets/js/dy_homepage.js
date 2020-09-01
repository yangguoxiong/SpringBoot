$(function() { 
  var dyProductsSwiper;
  dyProductsSwiper = new Swiper("#dy-products-carousel", {
    direction: "horizontal",
    slidesPerView: 5,
    spaceBetween: 0,
    prevButton: ".swiper-button-prev",
    nextButton: ".swiper-button-next",
    loop: false,
    breakpoints: {
      980: {
        slidesPerView: 5
      },
      768: {
        slidesPerView: 2
      }      
    }
  });
});
