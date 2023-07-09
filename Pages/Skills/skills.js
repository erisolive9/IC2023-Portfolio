
let technicalButton = document.getElementById("technicalButton");
let technical = document.getElementById("technicalSkills");

let communicationButton = document.getElementById("communicationButton");
let communication = document.getElementById("communicationSkills");

let otherButton = document.getElementById("otherButton");
let other = document.getElementById("otherSkills");

let cspLink = document.getElementById("cspLearnMore");
let csaLink = document.getElementById("csaLearnMore");

technicalButton.onclick = function() {
    technical.style.display = "block"
    communication.style.display = "none"
    other.style.display = "none"
};

communicationButton.onclick = function() {
    communication.style.display = "block"
    technical.style.display = "none"
    other.style.display = "none"
};

otherButton.onclick = function() {
    other.style.display = "block"
    technical.style.display = "none"
    communication.style.display = "none"
};

cspLink.onclick = function() {
    window.open("https://code.org/educate/csp", "_blank")
};

csaLink.onclick = function() {
    window.open("https://code.org/educate/csa", "_blank")
};

