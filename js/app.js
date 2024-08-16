new Swiper("#swiper-1", {
  effect: "fade",
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: true,
  //   parent,
  // },
  pagination: {
    el: "#swiper-1 .swiper-pagination",
    clickable: true,
  },
});

new Swiper("#swiper-2", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 2,
  lazyLoading :true,
  loop: true,
  keyboard:{
    enabled:true
  },
  navigation:  {  
    nextEl :"#nav-left",
    prevEl :"#nav-right",
  }
});