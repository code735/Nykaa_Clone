var userCart = JSON.parse(localStorage.getItem("carts")) || [];

displayCartItems();
console.log(userCart.length);

function displayCartItems() {

    // important varibles present here --> 
    var totalVar1 = 0;
    // important varibles present here --|||

    userCart.forEach(function (elem) {

        console.log(elem);
        // Item counter here 
        var itemCount = document.querySelector(".items-count-CLASS");
        itemCount.textContent = userCart.length;
        // item total value calculation
        var totalValue = document.querySelector(".items-total-value-CLASS");
        var totalVar2 = Math.round(elem.price.replace('₹', ''));
        totalVar1 += totalVar2;
        totalValue.textContent = totalVar1;

    });
}
console.log(userCart.length);
console.log("ram");
var disVar1 = elem.price;
var disVar2 = elem.str_price;
preDiscount.textContent = Math.round(100 - ((disVar1.replace('₹', '')) / disVar2.replace('₹', '') * 100)) + "%";