var cart = JSON.parse(localStorage.getItem("carts")) || [];

display();

function display() {
  cart = JSON.parse(localStorage.getItem("carts")) || [];
  var obj = JSON.parse(localStorage.getItem("prod_display"));

  var img = document.createElement("img");
  img.setAttribute("src", obj.img_url);
  document.getElementById("product_img").append(img);

  document.getElementById("product_name").textContent = obj.prodname;
  document.getElementById("price").textContent = "₹" + obj.price;
  document.getElementById("str_price").textContent = "₹" + obj.str_price;
}

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

document.getElementById("add_to_cart").addEventListener("click", function () {
  var obj = JSON.parse(localStorage.getItem("prod_display"));

  
  cart.push(obj);

  localStorage.setItem("carts", JSON.stringify(cart));

  product_display();
});