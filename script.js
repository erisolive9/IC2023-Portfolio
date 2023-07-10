//Elements and divs on screen
let content = document.querySelector("body");
let intro = document.getElementById("intro");
let profile = document.getElementById("profile");
let emailLogo = document.getElementById("emailLogo");

//Buttons
let buttons = document.querySelector(".buttons");
let continueButton1 = document.getElementById("openPassportButton");
let continueButton2 = document.getElementById("boardButton");
let backButton1 = document.getElementById("backButton1");

continueButton1.onclick = function() {
    //Set intro to exit towards the top
    intro.style.animation = "slideOutUp 0.5s"
    //Allow time for animations to take place, make div disappear afterwards and play animation of new coming in
    setTimeout(function() {
        intro.style.display = "none"
        profile.style.animation = "slideInUp 0.5s"
    }, 500)
    //Allow time for animations to take place, make the div appear afterwards
    setTimeout(function() {
        profile.style.display = "block"
        buttons.style.display = "block"
    }, 500)
};

continueButton2.onclick = function() {
    content.style.animation = "fadeOut 0.5s"
    setTimeout(function() {
        window.location.href = "Pages/Map/map.html"
    }, 500)
}

backButton1.onclick = function() {
    profile.style.display = "none"
    buttons.style.display = "none"
    intro.style.display = "flex"
    intro.style.animation = "slideInLeft 0.8s"
}

emailLogo.onclick = function() {
    let copyText = "erisolive@gmail.com"
    copyText.select()
    navigator.clipboard.writeText(copyText.value)

    alert("My email address (erisolive@gmail.com) has been copied to your clipboard so you can contact me!")
};
