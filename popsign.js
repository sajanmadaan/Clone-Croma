// document.addEventListener("DOMContentLoaded", () =>{
//     var signupbtn= document.querySelector("signupbtn");
//     var login = document.querySelector("login");

//     document.querySelector("signupbtn").addEventListener("click", e =>{
//         e.preventDefault();
//         signupbtn.classList.add("signuptextcont2");
//         login.classList.remove("signuptextcont");
//     });
// })

// document.querySelector("#linklogin").addEventListener("click", e =>{
//     e.preventDefault();
//     signupbtn.classList.remove("signuptextcont2");
//     login.classList.add("signuptextcont");
// })


document.getElementById("signin").addEventListener("click", openPop);

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

