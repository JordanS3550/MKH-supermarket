let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menu.onclick =() => {
    menu.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
}



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      769: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
        delay: 3500,
        disableOnInteraction:false,
    },
    effect: "creative",
    creativeEffect:{
        prev:{
            shadow:true,
            translate:[0,0-400],
        },
        next:{
            translate:["100%",0,0],
        },


    },
  });