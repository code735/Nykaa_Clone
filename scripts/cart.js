
var cart = JSON.parse(localStorage.getItem("carts")) || [];

product_display();

// Display Products
function product_display() {
  var prodcheck = [];
  document.getElementById("products_cart_list").textContent = "";

  cart.map(function (elem) {
    if (prodcheck.includes(elem.prodname)) {
    } else {
      prodcheck.push(elem.prodname);

      document.getElementById("cart_counter").textContent = cart.length;

      var p = document.createElement("p");
      p.setAttribute("id", elem.prodname);

      var img = document.createElement("img");
      img.setAttribute("src", elem.img_url);

      var h6 = document.createElement("h6");
      h6.textContent = elem.prodname;


      var i = document.createElement("i");
      i.setAttribute("class", "bi");
      i.setAttribute("class", "bi-trash3");
      i.addEventListener("click",function(){
        var prodid = remove_spaces(elem.prodname);
        removecartprod(prodid,prodcheck,elem.prodname);
      });
      
      var div = document.createElement("div");
      div.append(img,h6,i);
      div.setAttribute("id",remove_spaces(elem.prodname));
      div.setAttribute("class", "bag_product");

      var wrap = document.createElement("div");
      wrap.append(div,p);
      wrap.setAttribute("class", "bag_product_wrap");

      document.getElementById("products_cart_list").append(wrap);
    }
    countQty(elem.prodname);
    countPrice();
  });
}

// Count Quantity Functionality
function countQty(id) {
  var count = 0;
  cart.map(function (elem) {
    if (elem.prodname == id) {
      count++;
    }
  });
  document.getElementById(id).textContent ="Qty: "+count;
}


// Count price functionality
function countPrice(){
  var price = 0;
  cart.map(function(elem){
    price+=parseInt(elem.price);
  });
  document.getElementById("grand_total").textContent ="₹"+price;
}

// Remove Spaces
function remove_spaces(str){
  var string = "";
  for(let i=0;i<str.length;i++){
      if(str.charAt(i)!=' '){
        string+=str.charAt(i);
      }
    }
}


// remove product
function removecartprod(id,arr,prodname){
  if(cart.length==1){
    window.location.reload();
  }
  for(let i=0;i<cart.length;i++){
    if(cart[i].prodname==prodname){
      cart.splice(i,1);
      localStorage.setItem("carts",JSON.stringify(cart));
      product_display();
      countPrice();
      break;
    }
  }
}