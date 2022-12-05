// ------>"data" KEY for accessing local storage products data 
// var product_data = JSON.parse(localStorage.getItem("data"));
// ------>"data" KEY for accessing local storage products data 

//  variable for price and discount filters-- -> 
var newProdDataForFilters;
var BrandFilterFlag = false;


// Sort ------------------------------------------------ Implemented here 



var targetPrice = document.querySelectorAll(".radio_sort_CLASS");
for (let index = 0; index < targetPrice.length; index++) {
    targetPrice[index].addEventListener("change", function () {
        if (this.checked) {
            filterSortPriceNow(targetPrice[index].value);
            console.log("checked");
        }

    });

}

function filterSortPriceNow(valueSet) {
    document.querySelector("#products-grid-ID").remove();

    console.log("sortHEllo");
    if (BrandFilterFlag == false) {
        newProdDataForFilters = product_data;
    }
    console.log(valueSet);
    console.log("valueset");
    if (valueSet == "LOW" || valueSet == "Low " || valueSet == 999) {
        newProdDataForFilters.sort((a, b) => {
            return a.price.replace('₹', '') - b.price.replace('₹', '');
        });
    } else {
        newProdDataForFilters.sort((a, b) => {
            return b.price.replace('₹', '') - a.price.replace('₹', '');
        });
    }


    var filterd_Data = newProdDataForFilters;
    var prodDivID = document.createElement("div");
    prodDivID.setAttribute("id", "products-grid-ID");
    document.querySelector("#face-primer-middle-div-ID").append(prodDivID);

    display_Products(filterd_Data);

    if (filterd_Data.length >= 1) {

    } else {
        noProductsDisplay();
    }

    console.log("123-check-Check");
    console.log(filterd_Data);
};



// BRAND -----------------------------------------------------filter Functions implemented HERE


var targetBrand = document.querySelectorAll(".filter_select_CLASS");
for (let index = 0; index < targetBrand.length; index++) {


    targetBrand[index].addEventListener("change", function () {
        // page banner changing here ---->
        document.querySelector(".changeIMG1").setAttribute("src", "https://images-static.nykaa.com/uploads/dbf8a336-0fbc-455e-b758-89b2228bd7b8.jpg?tr=w-1200,cm-pad_resize");
        document.querySelector(".changeIMG3").setAttribute("src", "https://images-static.nykaa.com/uploads/8c284b3b-6c8f-4c20-a18e-9b8ee885c2d6.jpg?tr=w-2400,cm-pad_resize");
        // page title changing here --->
        document.getElementById("page-title-name-ID").textContent = targetBrand[index].value + " Products Collection ";

        if (this.checked) {
            filterBrandNow(targetBrand[index].value.toUpperCase());
            console.log("checked");
        }

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

    BrandFilterFlag = true;
    newProdDataForFilters = filterd_Data;

    display_Products(filterd_Data);
    if (filterd_Data.length >= 1) {

    } else {
        noProductsDisplay();
    }

    console.log("123-check-Check");


};


//BRAND |||||------------------------------------------------------------| filter Functions ENDED HERE
//
// PRICE -----------------------------------------------------filter Functions implemented HERE


var targetPrice = document.querySelectorAll(".radio_price_CLASS");
for (let index = 0; index < targetPrice.length; index++) {
    targetPrice[index].addEventListener("change", function () {
        if (this.checked) {
            filterPriceNow(targetPrice[index].value);
            console.log("checked");
        }

    });

}

function filterPriceNow(valueSet) {
    document.querySelector("#products-grid-ID").remove();


    if (BrandFilterFlag == false) {
        newProdDataForFilters = product_data;
    }

    var filterd_Data = newProdDataForFilters.filter(function (elem, index) {
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
    if (filterd_Data.length >= 1) {

    } else {
        noProductsDisplay();
    }

    console.log("123-check-Check");


};
//price |||||------------------------------------------------------------|filter Functions ENDED HERE
// DISCOUNT -----------------------------------------------------filter Functions implemented HERE


var targetDiscount = document.querySelectorAll(".radio_Discount_CLASS");
for (let index = 0; index < targetDiscount.length; index++) {
    targetDiscount[index].addEventListener("change", function () {
        if (this.checked) {
            filterDiscountNow(targetDiscount[index].value);
            console.log("checked");
        }

    });

}

function filterDiscountNow(valueSet) {
    document.querySelector("#products-grid-ID").remove();

    if (BrandFilterFlag == false) {
        newProdDataForFilters = product_data;
    }
    var filterd_Data = newProdDataForFilters.filter(function (elem, index) {
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
    if (filterd_Data.length >= 1) {

    } else {
        noProductsDisplay();
    }

    console.log("123-check-Check");


};
// Discount -----------------------------------------------------| Discount  filter Functions ENDED HERE

// NavBar Page Filters Implemented HERE --------------------->

// Navbar Brand Pages ------------------ >

var navBarBrand = document.querySelectorAll(".navbar_brand_select_CLASS");
for (let index = 0; index < navBarBrand.length; index++) {
    navBarBrand[index].addEventListener("click", function () {
        // page banner changing here ---->
        document.querySelector(".changeIMG1").setAttribute("src", "https://images-static.nykaa.com/uploads/af878bff-a8ad-4712-b8c5-1940d818f790.jpg?tr=w-1200,cm-pad_resize");
        document.querySelector(".changeIMG2").setAttribute("src", "https://images-static.nykaa.com/uploads/62d95f48-98bb-4c78-aac8-72345475661f.jpg?tr=w-2400,cm-pad_resize");
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
    BrandFilterFlag = true;
    newProdDataForFilters = filterd_Data;
    console.log(filterd_Data);
    display_Products(filterd_Data);
    if (filterd_Data.length >= 1) {

    } else {
        noProductsDisplay();
    }

    console.log("123-check-Check-NavBarFilter");


};




// when no products according to search ----->

function noProductsDisplay() {

    var noProdDiv = document.createElement("div");
    noProdDiv.setAttribute("id", "no-products-display-ID")
    // div styling 
    noProdDiv.style.display = "flex";
    noProdDiv.style.flexDirection = "column";
    noProdDiv.style.justifyContent = "center";
    noProdDiv.style.alignItems = "center";
    noProdDiv.style.textAlign = "center";
    noProdDiv.style.marginRight = "-40%";

    var noProdImg = document.createElement("img");
    noProdImg.setAttribute("src", "https://lh3.googleusercontent.com/drive-viewer/AFDK6gMABZmm-jl8wfSpZU7YxE2Ztmt_7uL87fX-SzgjHh0iXUyI8Jb5zd9E94dNBif90L-kUCQq_k7wmnav9pwzk_M4QXnIqg=w2288-h1590");

    noProdImg.style.width = "200%";
    noProdImg.style.paddingLeft = "41%";

    // var noProdHead = document.createElement("h2");
    // noProdHead.textContent = "Thanks for visiting our website!";
    // var noProdPtag = document.createElement("p");
    // noProdPtag.textContent = "Unfortunately, we couldn’t find any matches for Your search. Please try searching with another term.";
    noProdDiv.append(noProdImg);
    document.getElementById("products-grid-ID").append(noProdDiv);
    console.log("i.m here no prod");


};