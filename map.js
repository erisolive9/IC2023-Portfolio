//Island images
const academicsIsland = document.getElementById("island1");
const skillsIsland = document.getElementById("island2");
const projectsIsland = document.getElementById("island3");
const futureIsland = document.getElementById("island4");

//Island descriptions
const academics = document.getElementById("academicsDetails");
const skills = document.getElementById("skillsDetails");
const projects = document.getElementById("projectsDetails");
const future = document.getElementById("futureDetails");

//Plane element
const draggablePlane = document.getElementById("plane");


academicsIsland.onmouseover = function() {
    skills.style.display = "none"
    projects.style.display = "none"
    future.style.display = "none"
    academics.style.display = "block"
    academics.style.animation = "fadeIn 0.8s"
}

skillsIsland.onmouseover = function() {
    skills.style.display = "block"
    academics.style.display = "none"
    projects.style.display = "none"
    future.style.display = "none"
    skills.style.animation = "fadeIn 0.8s"
}

projectsIsland.onmouseover = function() {
    projects.style.display = "block"
    academics.style.display = "none"
    skills.style.display = "none"
    future.style.display = "none"
    projects.style.animation = "fadeIn 0.8s"
}

futureIsland.onmouseover = function() {
    future.style.display = "block"
    academics.style.display = "none"
    skills.style.display = "none"
    projects.style.display = "none"
    future.style.animation = "fadeIn 0.8s"
}

// PLANE DRAG AND DROP

//When the plane is picked up, it's transferred to the user's cursor
// draggablePlane.addEventListener("dragstart", function() {
//     console.log("Dragging plane");
//     //Make original plane disappear
//     draggablePlane.classList.add("hold")
//     setTimeout(function() {
//         draggablePlane.style.display = "none"
//     }, 1);
// });

    //When the plane is dropped, it redirects to the respective page
    // draggablePlane.addEventListener("dragend", function() {
    //     draggablePlane.classList.remove("hold")
    //     draggablePlane.style.display = "block"
    // });
    
    // academicsIsland.addEventListener("drop", function(event) {
    //     event.preventDefault()
    
    //     window.location.href = "Academics/academics.html"
    // });
    
    //Make description show up on hover of an island