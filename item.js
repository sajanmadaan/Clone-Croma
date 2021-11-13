var item = JSON.parse(localStorage.getItem("itemData")) || [];
// console.log(item);
var img = document.getElementById("mainImg");
img.src = item.image_url;
var nam = document.getElementById("nam");
nam.textContent = item.name;
var prod_id = document.getElementById("prod_id");
prod_id.textContent = `PRODUCT ID : ${item.id}`;
var price = document.getElementById("payable");
price.innerHTML = `<span>&#8377;${item.price}<\span>`;
var realPrice = document.getElementById("mrp");
realPrice.innerHTML = `<span>${item.realPrice}<\span>`;
var list_name = document.getElementById("list_name");
list_name.textContent = item.name;

var cart = JSON.parse(localStorage.getItem("cartItems")) || [];

var cartbtn = document.getElementById("addToCart");
cartbtn.addEventListener("click", function() {
  addToCart(item);
  // alert("Item Added To Cart")
});
function addToCart(item) {
  cart.push(item);
  localStorage.setItem("cartItems", JSON.stringify(cart));
}

var buyNow = document.getElementById("buyNow");
buyNow.addEventListener("click", function() {
  addToCart(item);
  window.location.href = "finalcart.html";
});



var acc = document.getElementsByClassName("accordion");

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}