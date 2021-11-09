slidedata = [
  {
    img_url:
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1616657339/Croma%20Assets/Categories/Category%20Icons/Mobiles_r8edzv.svg/mxw_64,f_auto",
    text: "Mobile Phones",
  },

  {
    img_url:
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1616657341/Croma%20Assets/Categories/Category%20Icons/Television_ikfovg.svg/mxw_64,f_auto",
    text: "Televisions",
  },

  {
    img_url:
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1616657339/Croma%20Assets/Categories/Category%20Icons/laptops_s2hrc6.svg/mxw_64,f_auto",
    text: "Laptops",
  },

  {
    img_url:
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1616657337/Croma%20Assets/Categories/Category%20Icons/Audio_fpn8cw.svg/mxw_64,f_auto",
    text: "Audio",
  },

  {
    img_url:
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1616657339/Croma%20Assets/Categories/Category%20Icons/Refrigerators_jgijqs.svg/mxw_64,f_auto",
    text: "Refrigerators",
  },

  {
    img_url:
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1616657339/Croma%20Assets/Categories/Category%20Icons/Kitchen_pfklj9.svg/mxw_64,f_auto",
    text: "Kitchen Appliances",
  },

  {
    img_url:
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1616657341/Croma%20Assets/Categories/Category%20Icons/Washing_Machine_m8fh96.svg/mxw_64,f_auto",
    text: "Washing Machine",
  },

  {
    img_url:
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1616657339/Croma%20Assets/Categories/Category%20Icons/Grooming_yad2tb.svg/mxw_64,f_auto",
    text: "Grooming",
  },

  {
    img_url:
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1616657337/Croma%20Assets/Categories/Category%20Icons/AC_k4bz6f.svg/mxw_64,f_auto",
    text: "Air Conditioner",
  },

  {
    img_url:
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1616657339/Croma%20Assets/Categories/Category%20Icons/Tablets_hbff4d.svg/mxw_64,f_auto",
    text: "Tablets",
  },

  {
    img_url:
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1623932660/Croma%20Assets/CMS/g5o5vuusbb82nicuurej.svg/mxw_64,f_auto",
    text: "wearables",
  },

  {
    img_url:
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1616657337/Croma%20Assets/Categories/Category%20Icons/Camera_y20hgq.svg/mxw_64,f_auto",
    text: "Cameras",
  },

  {
    img_url:
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1617786835/Croma%20Assets/CMS/Homepage%20Navigation/Accessories_vrnymy.svg/mxw_64,f_auto",
    text: "Accessories",
  },

  {
    img_url:
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1617786834/Croma%20Assets/CMS/Homepage%20Navigation/Gaming_ixbjyz.svg/mxw_64,f_auto",
    text: "Gaming",
  },

  {
    img_url:
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1616657337/Croma%20Assets/Categories/Category%20Icons/Consumables_akfycy.svg/mxw_64,f_auto",
    text: "Consumables",
  },
];

function addurls(slidedata) {
  var num = 1;
  slidedata.map(function (item) {
    var el = document.querySelector("ul");
    var div = document.createElement("div");
    el.append(div);

    var litag = document.createElement("li");
    div.append(litag);

    var image = document.createElement("img");
    image.src = item.img_url;

    var txt = document.createElement("span");
    txt.textContent = item.text;

    var anchor = document.createElement("a");
    anchor.href = "product.html";
    anchor.append(image, txt);
    anchor.setAttribute("id" , "anchor")

    litag.append(anchor);

    num++;

   
  });
}

addurls(slidedata);

var rightbutton = document.getElementById("rgbt");
rightbutton.addEventListener("click", function () {
  slide(1);
});

var leftbutton = document.getElementById("lfbt");
leftbutton.addEventListener("click", function () {
  slide(0);
});

var count = 0;

function slide(num) {
  console.log(count);
  var btnimg = document.getElementById("lfbt").querySelector("img");

  if (num == 1) {
    var value = count + 10;
  } else {
    var value = count - 10;
  }

  value == 0 || value == -10
    ? (btnimg.style.opacity = 0.5)
    : (btnimg.style.opacity = 1);

  if ((count >= 80 && num == 1) || (count == 0 && num == 0)) {
    return;
  }

  var slider = document.getElementById("slidertop");
  slider.style.transform = " translate(-" + value + "%)";

  count = value;
}


