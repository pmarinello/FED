// JavaScript Document
console.log("yo");

const hamburgerIcon = document.querySelector(".hamburgerIcon");
const headerNav = document.querySelector(".headerNav")
const kruisje = document.querySelector(".headerNav div > button:nth-child(2)")

function toggleMenu() {
    if (headerNav.classList.contains("menuClosed")) {
        menuExpander();
    } else {
        menuCloser();
    }
}

function menuExpander() {
    hamburgerIcon.classList.remove("ham2x-reverse")
    hamburgerIcon.classList.add("ham2x")
    headerNav.classList.add("menuExpanded")
    headerNav.classList.remove("menuClosed")
    const scrollHeight = headerNav.scrollHeight;
    headerNav.style.maxHeight = scrollHeight + "px";
    console.log("expanded")
};

function menuCloser() {
    hamburgerIcon.classList.remove("ham2x")
    hamburgerIcon.classList.add("ham2x-reverse")
    headerNav.style.maxHeight = "3.3em";
    setTimeout(() => {
        headerNav.classList.remove("menuExpanded");
        headerNav.classList.add("menuClosed");
    }, 1000);
    console.log("closed")
};

hamburgerIcon.addEventListener("click", toggleMenu)

