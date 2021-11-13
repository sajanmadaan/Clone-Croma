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
 
    var btnimg = document.getElementById("lfbt").querySelector("img");
  
    if (num == 1) {
      var value = count + 10;
    } else {
      var value = count - 10;
    }
  
    value == 0 || value == -10
      ? (btnimg.style.opacity = 0.5)
      : (btnimg.style.opacity = 1);
  
    if ((count >= 30 && num == 1) || (count == 0 && num == 0)) {
      return;
    }
  
    var slider = document.getElementById("slidertop");
    slider.style.transform = " translate(-" + value + "%)";
  
    count = value;
  }

