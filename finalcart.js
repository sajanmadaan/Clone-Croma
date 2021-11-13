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
function remove (item,index){

     cartItems.splice(index, 1);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    document.getElementById("itemsdiv").innerHTML ="";
    cartItems.map(display);

var quantity = cartItems.length;
document.getElementById("qty").innerHTML = "[&nbsp;" + quantity + "&nbsp;item(s)&nbsp;]";

    removeprices(item);
}

function removeprices(item){
   
  var presentitemprice = JSON.parse(localStorage.getItem("paymentDetails"));
  var req = presentitemprice.Itemtotal  ;
  req -= item.price;
  var two = document.querySelector(".itemprice");


 two.innerHTML = "&emsp; ₹"  ;
 two.innerHTML += req;


var dummytotal = presentitemprice.Totalprice;
dummytotal -= item.price;
document.getElementById("totalprice").textContent = "₹" + dummytotal;

var save = savecal();
document.getElementById("savings").textContent = "₹" +  save;
document.querySelector(".effprice").innerHTML = "&emsp; ₹";
document.querySelector(".effprice").innerHTML += dummytotal;

paymentstore = {

  Itemtotal : req,
  Deliverycharge : 0,
  Totalprice : dummytotal,
};

localStorage.setItem("paymentDetails", JSON.stringify(paymentstore) );

}


  // for opening and closing


localStorage.setItem("paymentDetails",JSON.stringify(paymentstore)) ;

var pinvalue = JSON.parse(localStorage.getItem("pincode :")) || null;



document.getElementById("popinbtn").addEventListener("click", popup);

function popup(){

  var transblack = document.getElementById("transpin");

  transblack.style.opacity = 1;
  transblack.style.pointerEvents = "auto";
}

document.getElementById("crosspin").addEventListener("click", closepin);

function closepin(){

  var transblack = document.getElementById("transpin");

  transblack.style.opacity = 0;
  transblack.style.pointerEvents = "none";

}

document.getElementById("applybtncart").addEventListener("click", setpin);

function setpin (){

  var pinvalue = document.getElementById("pininputcart").value;

  if(pinvalue.length != 6 ){

    alert("Wrong Pin");
    return ;
  }

 localStorage.setItem("pincode :",JSON.stringify(pinvalue));
 
changeapply();
 
}

function changeapply (){


   var pin = JSON.parse(localStorage.getItem("pincode :")) || null;

 
  var changediv = document.getElementById("changingdiv");

  var image1 =  document.createElement("img");
  image1.src = "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1614689510/Croma%20Assets/CMS/Category%20icon/Croma.com-icon-design_Faster-Delivery_sozfwa.png/mxw_1440,f_auto";
  image1.setAttribute("class", "icons");

  var image2 =  document.createElement("img");
  image2.src = "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1616525040/Croma%20Assets/CMS/Category%20icon/E9EF7733-EDFB-4FC9-8ABE-B26A22C381D4_zuwywz.png/mxw_1440,f_auto" ; 
   image2.setAttribute("class", "icons");
  
    if( pin == "533005"){
        
     var spanradio1 =  document.createElement("span");
     

       spanradio1.innerHTML = "<input type='radio'></input> &nbsp;" ;
       spanradio1.append(image1);
       spanradio1.innerHTML += "&emsp; Standard Delivery";
      
       changediv.innerHTML = "";
      changediv.append(spanradio1);
      
      closepin();
      return ;
    }

    if( pin == "530012"){
      var spanradio1 =  document.createElement("span");
      spanradio1.innerHTML = "<input type='radio'></input> &nbsp;"; 
      spanradio1.append(image1);
      spanradio1.innerHTML += "&emsp; Standard Delivery";

      var spanradio2 = document.createElement("span");
      spanradio2.innerHTML = "<input type='radio'></input> &nbsp;";
      spanradio2.append(image2);
      spanradio2.innerHTML += "&emsp; Available For Pickup Croma, Vizag Muralinagar";
      
     
      changediv.innerHTML = "";
     changediv.append(spanradio1, spanradio2);
      
     closepin();
     return ;
    }

    if(pin == null){

      changediv.innerHTML = "Delivery options are not available for this pincode."; 
    }
}




// calculation

var itemprice = cartItems.reduce(function(ac, item){
  return ac + (item.price);
},0);

var quantity = cartItems.length;
document.getElementById("qty").innerHTML = "[&nbsp;" + quantity + "&nbsp;item(s)&nbsp;]";


var two = document.querySelectorAll(".itemprice");
// two[0].textContent += itemprice;
two.forEach(function(item){
 item.textContent += itemprice;
})

document.querySelector(".effprice").textContent +=  itemprice;

var save = savecal();

function savecal(){

  var saveinner = cartItems.reduce(function(ac, item){

  var diff ;
  
   if(item.realPrice == undefined){
       diff = 0;
   }else{

      diff = item.realPrice - item.price;
   }

  return ac + diff;
},0);

return saveinner;
}



var payvalue = itemprice;
document.getElementById("totalprice").textContent += payvalue;

document.getElementById("savings").textContent += save;




var paymentstore = {

  Itemtotal : itemprice,
  Deliverycharge : 0,
  Totalprice : payvalue,
};


localStorage.setItem("paymentDetails", JSON.stringify(paymentstore));

function checkcoupon(){

  var effprice = itemprice;
  var value = document.getElementById("couponinput").value;
  var dis;
  if(value == "masai30"){

      dis = effprice * 0.3;
      effprice -=  effprice * 0.3;
  }else{
    dis = 0;
  }

  
  document.getElementById("savings").textContent = "₹" +( save + dis);
  document.getElementById("totalprice").textContent = "₹" + effprice;

  paymentstore = {

    Itemtotal : itemprice,
    Deliverycharge : 0,
    Totalprice : effprice,
  
  };
  
  localStorage.setItem("paymentDetails", JSON.stringify(paymentstore));
  document.querySelector(".effprice").innerHTML =  "₹" + effprice;
}


var checkbtns = document.getElementsByClassName("checkout");

for(var i = 0; i < 2; i++){

  checkbtns[i].addEventListener("click", redirect);
}

function redirect(){

   window.location.href = "checkout.html";
}