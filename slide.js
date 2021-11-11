
var count = 0;
document.getElementById("arrow").addEventListener("click", function(){
    slidesomething()
} );


function slidesomething(){
    count += -8;
    console.log(count)
    var value = count;
    var slider1 = document.getElementById("slider1");
slider1.style.transform = "translateX(" + value + "%)";

} 
document.getElementById("arrow1").addEventListener("click", function(){
    slidesomethings()
} );

function slidesomethings(){
    count += 8;
    console.log(count)
    var value = count;
    var slider1 = document.getElementById("slider1");
slider1.style.transform = "translateX(" + value + "%)";

} 