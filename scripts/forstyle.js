var dropdown = document.getElementsByClassName("dropdown");

for (let i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("mouseenter", function () {
    document.getElementById("carouselExampleIndicators").style.zIndex = "-2";
  });
  dropdown[i].addEventListener("mouseleave", function () {
    document.getElementById("carouselExampleIndicators").style.zIndex = "0";
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
  responsive: {
    0: {
      items: 7,
      nav: true,
    },
    600: {
      items: 7,
      nav: false,
    },
    1000: {
      items: 7,
      nav: true,
      loop: false,
    },
  },
});

$(".bestsellers_section_items").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: true,
  responsive: {
    0: {
      items: 7,
      nav: true,
    },
    600: {
      items: 7,
      nav: false,
    },
    1000: {
      items: 7,
      nav: true,
      loop: false,
    },
  },
});

// For bag slider

document.getElementById("bi_arrow_left").style.cursor = "pointer";

document.getElementById("cart_icon").addEventListener("click", function () {
  document.getElementById("bag_section").style.display = "block";
  document.querySelector("body").style.overflow = "hidden";
});

document
  .getElementById("bag_section_overlay")
  .addEventListener("click", function () {
    document.getElementById("bag_section").style.display = "none";
    document.querySelector("body").style.overflow = "auto";
  });

document.getElementById("bi_arrow_left").addEventListener("click", function () {
  document.getElementById("bag_section").style.display = "none";
  document.querySelector("body").style.overflow = "auto";
});


document.getElementById("proceed_btn").addEventListener("click",function(){
  window.open("./After-Proceed/shoppingBag.html");
});


// Sign In validation

var signeduser = localStorage.getItem("signeduser") || "Signin";
var sw  = localStorage.getItem("switch") || false;

signinvalidation();

function signinvalidation(){
  if(sw){
    var str = "";

    for(let i=0;i<signeduser.length;i++){
      if(signeduser.charAt(i)=='@'){
        break;
      }
      str+=signeduser.charAt(i);
    }

    document.getElementById("changeonsign").style.color="black";
    document.getElementById("changeonsign").style.background="white";
    document.getElementById("changeonsign").textContent=str;
    document.getElementById("changeonsign").style.padding="0";
    document.getElementById("bi_person").style.fontSize="20px";
    document.getElementById("bi_person").style.display="block";
    document.getElementById("sign_in_options_1").style.display="none";
    document.getElementById("after_sign_in_option").style.display="block";
    document.getElementById("sign_in_content").style.left = "-3vw";
    document.getElementById("sign_in_content").style.marginTop = "12%";
    
  }
}


document.getElementById("logout").addEventListener("click",function(){
  sw = false;
  localStorage.setItem("switch",sw);
  signeduser = "Signin";
  localStorage.setItem("signeduser",signeduser);
  document.getElementById("sign_in_options_1").style.display = "block";
  document.getElementById("after_sign_in_option").style.display = "none";

});


