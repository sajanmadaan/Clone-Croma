var modal = document.getElementById('id01');


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.getElementById("checkbottom").addEventListener("click", openpay);
function openpay(){
  window.location.href="payment.html"
}