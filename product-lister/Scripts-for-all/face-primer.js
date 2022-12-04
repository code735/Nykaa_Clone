
// ------>"data" KEY for accessing local storage products data 
var product_data = JSON.parse(localStorage.getItem("data"));
// ------>"data" KEY for accessing local storage products data 
// calling first time display products ---->
display_Products(product_data);

function display_Products(productDataDisplay) {
    console.log("product_data");
    console.log(product_data);

    productDataDisplay.map(function (elem) {
        var productcarddiv = document.createElement("div");
        productcarddiv.setAttribute('class', "cart-product-div-class");

        // keyword featured tag corner left div
        var keywordDiv = document.createElement("div");
        keywordDiv.setAttribute("id", "keyword-div-ID");

        var keywordUl = document.createElement("ul");
        keywordUl.setAttribute("id", "keyword-ul-ID");

        var keywordLi = document.createElement("li");
        keywordLi.setAttribute("id", "keyword-li-ID");

        keywordLi.textContent = elem.Keywords;

        // |-----| Apending
        keywordUl.append(keywordLi);
        keywordDiv.append(keywordUl);


        //keyword featured tag corner left div END <----->



        var image = document.createElement("img");
        image.setAttribute("src", elem.img_url);
        image.setAttribute("alt", elem.prodname)
        var namE = document.createElement("h5");
        namE.textContent = elem.prodname;
        var priceBox = document.createElement("div");
        priceBox.setAttribute("class", "price-Box-div-CLASS")

        var price1 = document.createElement("p");
        var MRP = document.createElement("p");
        var preDiscount = document.createElement("p");

        // preDiscount.textContent = 1;
        var disVar1 = elem.price;
        var disVar2 = elem.str_price;
        preDiscount.textContent = Math.round(100 - ((disVar1.replace('₹', '')) / disVar2.replace('₹', '') * 100)) + "%";
        // 100 - (disVar1.replace('₹', '') / disVar2.replace('₹', '') * 100);
        price1.textContent += "" + elem.price;
        MRP.textContent += "MRP: " + elem.str_price;

        var extraDiscount = document.createElement("p");
        var extraDiscountDiv = document.createElement("div");
        extraDiscountDiv.setAttribute("id", "extra-discount-div-ID")

        extraDiscount.textContent = elem.extraOff;

        extraDiscountDiv.append(extraDiscount);

        // Rating  start (not dynamic)

        var h2TagFor_Rate = document.createElement("h2");
        h2TagFor_Rate.setAttribute("class", "rating-box-h2-CLASS")
        var star1 = document.createElement("span");
        star1.setAttribute("class", "fa fa-star checked");
        var star2 = document.createElement("span");
        star2.setAttribute("class", "fa fa-star checked");
        var star3 = document.createElement("span");
        star3.setAttribute("class", "fa fa-star checked");
        var star4 = document.createElement("span");
        star4.setAttribute("class", "fa fa-star");
        var star5 = document.createElement("span");
        star5.setAttribute("class", "fa fa-star");

        // append all stars
        h2TagFor_Rate.append(star1, star2, star3, star4, star5)

        //rating end <------>


        var hoverCartSlide = document.createElement("div");
        hoverCartSlide.setAttribute("id", "hoverCartSlide-ID");

        var wishlist_button = document.createElement("button");
        wishlist_button.setAttribute("id", "wishlist-button-ID");

        var image_for_wishlist = document.createElement("img");
        image_for_wishlist.setAttribute("src", "https://lh3.googleusercontent.com/drive-viewer/AFDK6gPrOYtFM7-C2NztwjjdjAnDYq8gLLhv6ciZ9ElkfqO9mg8TJWfKTLiRJaplG_yceF39QJUyL3cwFVRlB0Ri1nktX5z7xA=w1960-h1810");
        wishlist_button.append(image_for_wishlist);

        var add_cart_BTN = document.createElement("button");
        add_cart_BTN.textContent = 'Add To Bag';
        add_cart_BTN.setAttribute("id", "add-to-cart-button-ID");




        add_cart_BTN.addEventListener("click", function () {
            add_cart_BTN.style.backgroundColor = "#E8734C";
            add_cart_BTN.textContent = 'Added To Bag';
            setTimeout(() => {
                add_cart_BTN.textContent = 'Add To Bag';
                add_cart_BTN.style.backgroundColor = "#FC2779";
            }, 2000);
            addToCart(elem)
        });
        hoverCartSlide.append(wishlist_button, add_cart_BTN);

        priceBox.append(MRP, price1, preDiscount);
        productcarddiv.append(keywordDiv, image, namE, priceBox, extraDiscountDiv, h2TagFor_Rate, hoverCartSlide);
        document.querySelector("#products-grid-ID").append(productcarddiv);
    });



    var cartArr = JSON.parse(localStorage.getItem("carts")) || [];

    function addToCart(product) {

        console.log(product);

        cartArr.push(product);
        localStorage.setItem("carts", JSON.stringify(cartArr));


    }



}

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

