document.getElementById("temp").addEventListener("click", openPop);

function openPop(){
    


    var container = document.getElementById("signuppopcont");
    container.style.opacity = 1;
    container.style.pointerEvents = "auto";
}


document.getElementById("signupcross").addEventListener("click" , close);

function close(){

    console.log("here")
    var container = document.getElementById("signuppopcont");
    container.style.opacity = 0;
    container.style.pointerEvents = "none";
}