const hamburgerClick = document.getElementById("navbar-toggle");
const navBar = document.querySelector(".header");
// const modeToggle = document.querySelector('.switch');
const darkmodeToggle = document.querySelector("#darkmode-toggle");
const UList = document.querySelector("#UList");
// const navLinks = document.querySelector(".link--a");
const navLinks = [...document.querySelectorAll(".nav-links")]; // stored the NodeList into array format using "..." operator
const profileLinks = document.querySelector(".profile");
const experienceLinks = document.querySelector(".experience");
const skillLinks = document.querySelector(".skills");
const projectLinks = document.querySelector(".project");
// const contactLinks = document.querySelector(".contact");

document.getElementById("nav--bar").addEventListener("click", function (e) {
  // console.log('event',e);
  e.preventDefault();
  const target = e.target;
  if (target.classList.contains("link--a")) {
    const id = target.getAttribute("href").slice(1);
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }
});

// console.log(navBar.getBoundingClientRect());

// navbar toggle (mobile-view)
const handleNavToggle = function () {
  navLinks.map((ele) => {
    ele.classList.toggle("active");
  });
  // coverSection.classList.toggle("cover-active");
};
hamburgerClick.addEventListener("click", handleNavToggle);
profileLinks.addEventListener('click', handleNavToggle);
experienceLinks.addEventListener('click', handleNavToggle);
skillLinks.addEventListener('click', handleNavToggle);
projectLinks.addEventListener('click', handleNavToggle);
// contactLinks.addEventListener('click', handleNavToggle);

// theme mode toggle

// const handleModeToggle = function(){
//     console.log('mode toggled')
//     let element = document.body;
//     element.classList.toggle('dark-mode');
// }
// modeToggle.addEventListener('click',handleModeToggle);

/* css customprops detect the default automatically, but this makes sure the starting switch position also corresponds */

// if (
//   window.matchMedia &&
//   window.matchMedia("(prefers-color-scheme: dark)").matches
// ) {
//   darkmodeToggle.checked = true;
// }

/* These classes are for when a user decides to not go with their default setting */
darkmodeToggle.addEventListener("change", () => {
  if (darkmodeToggle.checked) {
    document.body.classList.add("darkmode");
    document.body.classList.remove("lightmode");
    UList.classList.add("darkmode-nav");
    UList.classList.remove("lightmode-nav");
  } else {
    document.body.classList.remove("darkmode");
    document.body.classList.add("lightmode");
    UList.classList.add("lightmode-nav");
    UList.classList.remove("darkmode-nav");
  }
});

// footer hover style class zoom effect (add later)
