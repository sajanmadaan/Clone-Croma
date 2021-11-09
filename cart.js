var dummy = [

    {name : "Samsung Galaxy S20 FE 5G (128GB ROM, 8GB RAM, SM-G781BZBG, Cloud Navy)",
    Productid: "233767", 
    quantity : "1",
    disprice : "75,980.00",
    oriprice : "85,980.00",
    image_url : "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_110,w_110/v1627022922/Croma%20Assets/Communication/Mobiles/Images/240337_h4iolz.png/mxw_2048,s_webp,f_auto"     },

    {name : "OnePlus 9R (128GB ROM, 8GB RAM, LE2101, Carbon Black)",
    Productid: "233910", 
    quantity : "1",
    disprice : "36,999.00",
    oriprice : "39,999.00" ,
    image_url : "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_110,w_110/v1618481348/Croma%20Assets/Communication/Mobiles/Images/233910_oelzkr.png/mxw_2048,s_webp,f_auto"    }
]

var cartItems = JSON.parse(localStorage.getItem("cartItems")) ||  dummy;

cartItems.map(display);

var maindiv = document.getElementById("itemsdiv");
function display(item){

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
    spantag1.textContent = "Product Id :" + item.Productid;

    var spantag2 = document.createElement("span");
    spantag2.textContent = "QTY: " + item.quantity;
    idquantitydiv.append(spantag1, spantag2)

    var pricesdiv = document.createElement("div");
    var newprice = document.createElement("span");
    newprice.textContent =  item.disprice;

    var oldprice = document.createElement("span");
    oldprice.textContent =  item.oriprice;
    pricesdiv.append(newprice, oldprice)

    textdiv.append(h2tag, idquantitydiv, pricesdiv);

    div.append(imagediv, textdiv);

    spantag2.setAttribute("class", "floating");
    // oldprice.setAttribute("class", "floating");
    image.setAttribute("class", "image");
    div.setAttribute("class", "prodiv");
    textdiv.setAttribute("id", "textdiv");
    oldprice.setAttribute("class", "oldprice");

    var deletebtn = document.createElement("button");
    deletebtn.textContent = "delete";
    div.append(deletebtn);
    
}