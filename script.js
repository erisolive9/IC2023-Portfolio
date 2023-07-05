//Elements and divs on screen
let intro = document.getElementById("intro");
let profile = document.getElementById("profile");

//Buttons
let buttons = document.querySelector(".buttons");
let continueButton1 = document.getElementById("openPassportButton");
let continueButton2 = document.getElementById("boardButton");
let backButton1 = document.getElementById("backButton1");

continueButton1.onclick = function() {
    intro.style.display = "none"
    profile.style.display = "block"
    buttons.style.display = "block"
};

continueButton2.onclick = function() {
    window.location.href = "Pages/Map/map.html"
}

backButton1.onclick = function() {
    profile.style.display = "none"
    buttons.style.display = "none"
    intro.style.display = "flex"
}