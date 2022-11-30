var dropdown = document.getElementsByClassName("dropdown");

for (let i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("mouseenter", function () {
    document.getElementById("carouselExampleIndicators").style.zIndex = "-2";
  });
  dropdown[i].addEventListener("mouseleave", function () {
    document.getElementById("carouselExampleIndicators").style.zIndex = "0";
  });
}

for (let i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("mouseenter", function () {
    document.getElementById("content").style.display = "block";
    flag = true;
  });
  dropdown[i].addEventListener("mouseleave", function () {
    document.getElementById("content").style.display = "none";
    flag = false;
  });
}

$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: true,
  items: 1.5,
});

$(".handpicked_carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: true,
  items: 6.5,
});
