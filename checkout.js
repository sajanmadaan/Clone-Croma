var cartItems = JSON.parse(localStorage.getItem("cartItems")) ||  [];

cartItems.map(display);

var maindiv = document.getElementById("itemsdiv");
function display(item, index){

    var div = document.createElement("div");

    itemsdiv.append(div);
    
    var imagediv = document.createElement("div");
    
    var image = document.createElement("img");
    image.src = item.image_url;

    imagediv.append(image);

    var textdiv = document.createElement("div");
    var h2tag = document.createElement("h3");
    h2tag.textContent = item.name;
    
    var idquantitydiv = document.createElement("div"); 
    var spantag1 = document.createElement("span");
    spantag1.textContent = "Product Id :" + item.id;
    spantag1.setAttribute("class","lightgrey");

    var spantagrgt2 = document.createElement("span");
    var spantagrgt1 = document.createElement("span");
    spantagrgt1.textContent = "QTY: ";
    spantagrgt2.textContent = "1";
    var quantityrightdiv = document.createElement("div");
    quantityrightdiv.append(spantagrgt1, spantagrgt2);

    idquantitydiv.append(spantag1, quantityrightdiv)

    var pricesdiv = document.createElement("div");
    var newprice = document.createElement("span");
    newprice.textContent = "₹" + item.price;
    newprice.setAttribute("class", "effprice")

    var oldprice = document.createElement("span");
    oldprice.textContent =  item.realPrice;
    oldprice.setAttribute("class", "oldprice")
    pricesdiv.append(newprice, oldprice)

    textdiv.append(h2tag, idquantitydiv, pricesdiv);

    div.append(imagediv, textdiv);
     
  
   quantityrightdiv.setAttribute("class", "floating");
   spantagrgt1.setAttribute("class", "lightgrey");
  
    image.setAttribute("class", "image");
    div.setAttribute("class", "prodiv");
    textdiv.setAttribute("id", "textdiv");
    oldprice.setAttribute("class", "oldprice");

    var deletebtn = document.createElement("button");
    deletebtn.textContent = "delete";
    deletebtn.innerHTML = "<i class='far fa-trash-alt fa-2x'></i>"
    div.append(deletebtn);

    deletebtn.addEventListener("click",function(){
         remove(item,index);
    });
    
}
var paymentDetails = JSON.parse(localStorage.getItem("paymentDetails")) ||  [];
document.querySelector(".itemprice").textContent = paymentDetails.Itemtotal
document.getElementById("totalprice").textContent = paymentDetails.Totalprice


document.getElementById("checkbottom").addEventListener("click",openpayment)

function openpayment(){
    window.location.href = "payment.html"
}