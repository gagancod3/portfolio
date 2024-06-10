const hamburgerClick = document.getElementById("navbar-toggle");

const navLinks = [...document.querySelectorAll(".nav-links")]; // stored the NodeList into array format using "..." operator
const coverSection = document.querySelector(".cover-style-toggle");

// navbar options
const navSection = document.querySelector("#nav-section");
const techSection = document.querySelector("#tech-section");
const projSection = document.querySelector("#project-section");
const footerSection = document.querySelector('#footer-section');

// sections
const navBar = document.querySelector('.header');
const resume = document.querySelector(".resume-section");
const techStack = document.querySelector(".tech-grid");
const project = document.querySelector(".project-sec");
const footer = document.querySelector(".footer");

const handleNavToggle = function(){
    navLinks.map((ele)=> {
        ele.classList.toggle('active');
    });
    console.log(coverSection); 
    coverSection.classList.toggle('cover-active');
    console.log('clicked');
}
hamburgerClick.addEventListener('click', handleNavToggle);


function sectionScroll(section) {
let coordVal = section.getBoundingClientRect();
// console.log(coordVal);
console.log(navBar.getBoundingClientRect());
let navBarCoord = navBar.getBoundingClientRect();
scrollTo({left:coordVal.x,top :(coordVal.y - navBarCoord.height), behavior:"smooth"});
}

navSection.addEventListener("click", function () {
    sectionScroll(resume);
});
techSection.addEventListener("click",function(){
    sectionScroll(techStack);
});
projSection.addEventListener("click",function(){
    sectionScroll(project);
});
footerSection.addEventListener("click", function () {
    sectionScroll(footer);
})