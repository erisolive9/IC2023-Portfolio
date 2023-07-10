//Buttons that lead to sections
let seniorButton = document.getElementById("date1");
let gradButton = document.getElementById("date2");
let collegeButton = document.getElementById("date3");
let jobButton = document.getElementById("date4");

//Text sections 
let senior = document.getElementById("future1");
let grad = document.getElementById("future2");
let college = document.getElementById("future3");
let job = document.getElementById("future4");


//On click, chosen section appears while others disappear
seniorButton.onclick = function() {
    clearChanges()
    
    seniorButton.style.animation = "shadow-pop-bl 0.3s"
    seniorButton.classList.add("afterAnim")
    senior.style.display = "block"
};

gradButton.onclick = function() {
    clearChanges()

    gradButton.style.animation = "shadow-pop-bl 0.3s"
    gradButton.classList.add("afterAnim")
    grad.style.display = "block"
};

collegeButton.onclick = function() {
    clearChanges()

    collegeButton.style.animation = "shadow-pop-bl 0.3s"
    collegeButton.classList.add("afterAnim")
    college.style.display = "block"
};

jobButton.onclick = function() {
    clearChanges()

    jobButton.style.animation = "shadow-pop-bl 0.3s"
    jobButton.classList.add("afterAnim")
    job.style.display = "block"
};

function clearChanges() {
    senior.style.display = "none"
    grad.style.display = "none"
    college.style.display = "none"
    job.style.display = "none"

    // seniorButton.classList.remove("afterAnims")
    // gradButton.classList.remove("afterAnims")
    // collegeButton.classList.remove("afterAnims")
    // jobButton.classList.remove("afterAnims")
}