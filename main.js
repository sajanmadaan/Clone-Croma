function myFunction(x) {
    x.classList.toggle("change");
    x.parentNode.classList.toggle('active')
}
document.getElementById("tp").addEventListener("click",openotppage)

function openotppage(){
    window.location.href="validateotp.html"
}