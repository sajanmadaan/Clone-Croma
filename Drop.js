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
var paymentDetails = JSON.parse(localStorage.getItem("paymentDetails")) ||  [];
document.querySelector(".itemprice").textContent = paymentDetails.Itemtotal
document.getElementById("totalprice").textContent = paymentDetails.Totalprice


document.getElementById("Submitdetails").addEventListener("click", Submitdetail);
function Submitdetail(){
    if(carn.value.length<16 || cvv.value.length<3 || date.value.length<6){
        alert("invalid user");
    } 
    else{
        window.location.href="otp.html"
    }

}

document.querySelector(".btn").addEventListener("click", Paydetail);
function Paydetail(){
        window.location.href="otp.html"

}