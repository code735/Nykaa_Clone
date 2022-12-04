var userCart = JSON.parse(localStorage.getItem("carts")) || [];

displayCartItemsOnPaymentPage();

console.log(userCart.length);

function displayCartItemsOnPaymentPage() {

    // important varibles present here --> 
    var totalVar1 = 0;
    // important varibles present here --|||

    userCart.forEach(function (elem) {

        console.log(elem);
        // Item counter here 
        var itemCount = document.querySelector(".super-price");
        itemCount.textContent = userCart.length;
        // item total value calculation
        var totalValue = document.querySelector("#total-price-details-on-payment-page-ID");
        var totalVar2 = Math.round(elem.price.replace('₹', ''));
        totalVar1 += totalVar2;
        totalValue.textContent = totalVar1;
        console.log(userCart.length);
        console.log("ram");

        var showAddressOnPayment = document.getElementById("show-address-on-payment-ID");
        showAddressOnPayment.textContent = "";
        var userAddress = JSON.parse(localStorage.getItem("userAddress"));

        for (let index = 0; index < 3; index++) {
            const element = userAddress[index];
            showAddressOnPayment.textContent += element;
        }


    });
}

document.querySelector(".pay-now-payment-page-button-CLASS").addEventListener("click", otpPage);
function sendToOtpPage() {

    var aTag = document.querySelector(".pay-now-button-a-tag-CLASS");
    location.replace("OTPpaymentpage.html");
}

function otpPage() {
    event.preventDefault();
    if (document.getElementById("card-number-on-payment-ID").value == 1234567812345678) {
        if (document.getElementById("cvv-on-payment-ID").value == 123) {
            sendToOtpPage();
        } else {
            alert("Card details entered are incorrect ( Card number, card expiry and CVV)");
        }
    } else {
        alert("Card details entered are incorrect ( Card number, card expiry and CVV)");
    }
    console.log(document.getElementById("card-number-on-payment-ID").value);
    console.log(document.getElementById("cvv-on-payment-ID").value);
}

