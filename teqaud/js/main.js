// AOS.init();
$(window).scroll(function () {
  updateNav();
  updateBanner();
  updateUp();
});

function updateNav() {
  if ($(window).scrollTop() > 30) {
    $(".navbar").addClass("scrolled");
  } else {
    $(".navbar").removeClass("scrolled");
  }
}
function updateBanner() {
  if ($(window).scrollTop() > 400) {
    $(".banner-text").addClass("scrolled");
  } else {
    $(".banner-text").removeClass("scrolled");
  }
}
function updateUp() {
  if ($(window).scrollTop() > 30) {
    $(".upper").addClass("scrolled");
  } else {
    $(".upper").removeClass("scrolled");
  }
}
var owl1 = $(".owl-one");
owl1.owlCarousel({
  items: 1,
  nav: true,
  navText: [
    "<img src='/img/untitled.png'>",
    "<img src='/img/untitled.png' class='next-img1'>",
  ],
  dots: true,
  loop: true,
  // animateIn: "fadeIn",
  // animateOut: "fadeOut",
  // autoplay: true,
  // autoplayTimeout: 3000,
  // autoplayHoverPause: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
var owl = $(".owl-two");
owl.owlCarousel({
  items: 3,
  nav: true,
  navText: [
    "<img src='/img/untitled.png'>",
    "<img src='/img/untitled.png' class='next-img'>",
  ],
  dots: false,
  loop: true,
  // autoplay: true,
  // autoplayTimeout: 3000,
  // autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 3,
    },
  },
});
