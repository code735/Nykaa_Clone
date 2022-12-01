display();

function display() {
  var obj = JSON.parse(localStorage.getItem("prod_display"));
  console.log(obj);

  var img = document.createElement("img");
  img.setAttribute("src", obj.img_url);
  document.getElementById("product_img").append(img);

  document.getElementById("product_name").textContent = obj.prodname;
  document.getElementById("price").textContent = obj.price;
  document.getElementById("str_price").textContent = obj.str_price;
}
