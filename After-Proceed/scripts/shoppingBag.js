

<<<<<<< HEAD


// For Login Button
document.getElementById("user_login_button_CLASS").addEventListener("click", function () {
    window.open("../signup.html");
});


// For Login Button
document.getElementById("user_signup_button_CLASS").addEventListener("click", function () {
    window.open("../register.html");
});


=======
>>>>>>> main
var userCart = JSON.parse(localStorage.getItem("carts")) || [];


console.log(userCart);

displayCountPrice();

<<<<<<< HEAD
function displayCountPrice() {
    document.querySelector(".items-count-CLASS").textContent = "Qty: " + userCart.length;

    var totalprice = 0;
    userCart.map(function (elem) {
        totalprice += parseInt(elem.price);
    });

    document.querySelector(".items-total-value-CLASS").textContent = "Price: ₹" + totalprice;
=======
function displayCountPrice(){
    document.querySelector(".items-count-CLASS").textContent ="Qty: "+userCart.length;

    var totalprice = 0;
    userCart.map(function(elem){
        totalprice+=parseInt(elem.price);
    });

    document.querySelector(".items-total-value-CLASS").textContent ="Price: ₹"+totalprice;
>>>>>>> main

}


// aaaaaaaaaaaaaaaa

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