document.getElementById("login").addEventListener("click", openPop);

function openPop(){

    var container = document.getElementById("popcont");
    container.style.opacity = 1;
    container.style.pointerEvents = "auto";
}


document.getElementById("signcross").addEventListener("click" , close);

function close(){

    console.log("here")
    var container = document.getElementById("popcont");
    container.style.opacity = 0;
    container.style.pointerEvents = "none";
}



document.getElementById("signupbtn" ).addEventListener("click", signup);

function signup(){

    var signup = document.getElementById("signtextcont");
    signup.querySelector("h1").textContent = "Sign up for Croma.com";

    signup.querySelector("p").textContent = "Create an account to get exclusive deals, track your orders, earn rewards and more";
     
    signup.getElementsByClassName("signp")[0].textContent = "Existing user?";

    document.getElementById("signupbtn").textContent = "Login";

    var ptag = document.createElement("p");

    ptag.innerHTML = "By continuing you agree to our <a>Terms of Use</a> & <a>Privacy Policy</a> ";

    signup.append(ptag);
}
