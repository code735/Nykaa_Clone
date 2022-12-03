// ------>"data" KEY for accessing local storage products data 
// var product_data = JSON.parse(localStorage.getItem("data"));
// ------>"data" KEY for accessing local storage products data 


// BRAND -----------------------------------------------------filter Functions implemented HERE


var targetBrand = document.querySelectorAll(".filter_select_CLASS");
for (let index = 0; index < targetBrand.length; index++) {
    targetBrand[index].addEventListener("input", function () {
        filterBrandNow(targetBrand[index].value.toUpperCase());
    });

}

function filterBrandNow(brandName) {
    console.log("filterBrandNow is running");
    document.querySelector("#products-grid-ID").remove();



    var filterd_Data = product_data.filter(function (elem, index) {
        console.log(brandName);
        console.log(elem.brand);
        return elem.brand.toUpperCase() == brandName;

    });
    var prodDivID = document.createElement("div");
    prodDivID.setAttribute("id", "products-grid-ID");
    document.querySelector("#face-primer-middle-div-ID").append(prodDivID);

    display_Products(filterd_Data);
    product_data = filterd_Data;
    console.log("123-check-Check");


};


//BRAND |||||------------------------------------------------------------| filter Functions ENDED HERE
// PRICE -----------------------------------------------------filter Functions implemented HERE


var targetPrice = document.querySelectorAll(".radio_price_CLASS");
for (let index = 0; index < targetPrice.length; index++) {
    targetPrice[index].addEventListener("input", function () {
        filterPriceNow(targetPrice[index].value);
    });

}

function filterPriceNow(valueSet) {
    document.querySelector("#products-grid-ID").remove();

    var filterd_Data = product_data.filter(function (elem, index) {
        console.log(valueSet);
        var priceVar = Math.round(elem.price.replace('₹', ''));
        console.log(priceVar);
        if (valueSet == 999) {
            return priceVar <= valueSet;
        } else if (valueSet == 1999) {
            return 1000 <= priceVar && priceVar <= 1999;
        } else if (valueSet == 3999) {
            return 2000 <= priceVar && priceVar <= 3999;
        } else {
            return priceVar >= 4000;
        }
    });
    var prodDivID = document.createElement("div");
    prodDivID.setAttribute("id", "products-grid-ID");
    document.querySelector("#face-primer-middle-div-ID").append(prodDivID);

    display_Products(filterd_Data);
    product_data = filterd_Data;
    console.log("123-check-Check");


};
//BRAND |||||------------------------------------------------------------|filter Functions ENDED HERE
// PRICE -----------------------------------------------------filter Functions implemented HERE


var targetDiscount = document.querySelectorAll(".radio_Discount_CLASS");
for (let index = 0; index < targetDiscount.length; index++) {
    targetDiscount[index].addEventListener("input", function () {
        filterDiscountNow(targetDiscount[index].value);
    });

}

function filterDiscountNow(valueSet) {
    document.querySelector("#products-grid-ID").remove();

    var filterd_Data = product_data.filter(function (elem, index) {
        console.log(valueSet);
        // preDiscount Calculation 
        var disVar1 = elem.price;
        var disVar2 = elem.str_price;
        var priceVar = Math.round(100 - ((disVar1.replace('₹', '')) / disVar2.replace('₹', '') * 100));
        console.log(priceVar);
        if (valueSet == 1) {
            return priceVar >= valueSet;
        } else if (valueSet == 10) {
            return 10 <= priceVar;
        } else if (valueSet == 20) {
            return 20 <= priceVar;
        } else {
            return priceVar >= 40;
        }
    });
    var prodDivID = document.createElement("div");
    prodDivID.setAttribute("id", "products-grid-ID");
    document.querySelector("#face-primer-middle-div-ID").append(prodDivID);

    display_Products(filterd_Data);
    product_data = filterd_Data;
    console.log("123-check-Check");


};
// PRICE -----------------------------------------------------| PRICE  filter Functions ENDED HERE

// NavBar Page Filters Implemented HERE --------------------->

// Navbar Brand Pages ------------------ >

var navBarBrand = document.querySelectorAll(".navbar_brand_select_CLASS");
for (let index = 0; index < navBarBrand.length; index++) {
    navBarBrand[index].addEventListener("click", function () {
        // page title changing here --->
        document.getElementById("page-title-name-ID").textContent = navBarBrand[index].textContent + " Products Collection ";
        //calling filter function for particular Brand
        navBarfilterBrandNow(navBarBrand[index].textContent.toUpperCase());
    });

}

function navBarfilterBrandNow(brandName) {




    console.log("navBarfilterBrandNow is running");
    document.querySelector("#products-grid-ID").remove();



    var filterd_Data = product_data.filter(function (elem, index) {
        console.log(brandName);
        console.log(elem.brand.toUpperCase());
        return elem.brand.toUpperCase() == brandName;

    });
    var prodDivID = document.createElement("div");
    prodDivID.setAttribute("id", "products-grid-ID");
    document.querySelector("#face-primer-middle-div-ID").append(prodDivID);

    console.log(filterd_Data);
    display_Products(filterd_Data);

    console.log("123-check-Check-NavBarFilter");


};

