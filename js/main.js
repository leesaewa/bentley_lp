$(".visual-sl").owlCarousel({
  loop: true,
  nav: true,
  dots: false,
  items: 1,
  mouseDrag: false,
  touchDrag: false,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: false,
  margin: 10,
  animateOut: "fadeOut",
  animateIn: "fadeIn",
  navText: [
    "<span class='material-icons'>keyboard_arrow_left</span>",
    "<span class='material-icons'>keyboard_arrow_right</span>",
  ],
});

$(".basic-sl").owlCarousel({
  loop: true,
  nav: false,
  dots: true,
  items: 1,
  autoplay: true,
  mouseDrag: false,
  touchDrag: false,
  autoplayTimeout: 4000,
  autoplayHoverPause: false,
  margin: 10,
  animateOut: "fadeOut",
});

$(window).scroll(function () {
  const scroll = $(window).scrollTop();
  if (scroll >= 50) {
    $("header").addClass("change");
  } else {
    $("header").removeClass("change");
  }
});

//vanilla JS
// nav
const mobileNav = document.querySelector(".hamburger");
const navContents = document.querySelector("nav");

mobileNav.addEventListener("click", () => {
  navContents.classList.toggle("open");
  mobileNav.classList.toggle("open");
});

// scroll top
const topScroll = document.getElementById("topScroll");

topScroll.addEventListener("click", function (event) {
  event.preventDefault();
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
});
