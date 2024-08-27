// bannar slider 
var swiper = new Swiper(".bannarslider", {
  loop: true,
 
  // autoplay: {
  //   delay: 4000,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
  
// features slider 
var swiper = new Swiper(".features-slider", {
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
document.querySelector('.features-slider').addEventListener('mouseenter', function() {
  swiper.autoplay.stop();
});
document.querySelector('.features-slider').addEventListener('mouseleave', function() {
  swiper.autoplay.start();
});

