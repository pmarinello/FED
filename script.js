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
    console.log("closed");
};

hamburgerIcon.addEventListener("click", toggleMenu);




// https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver
// https://chatgpt.com/share/6717c256-0360-8000-9a5c-3812094531e7

const yellowBox = document.querySelector('.yellowBox');
const backgroundBox = document.querySelector('.backgroundBox');

// Function to check if the element is within the middle 75% of the viewport
function checkVisibility() {
    const viewportHeight = window.innerHeight;

    // Calculate the boundaries for the middle 75% of the viewport
    const middleTop = viewportHeight * 0.10;  // 12.5% from the top
    const middleBottom = viewportHeight * 0.85; // 87.5% from the top

    // Get the element's bounding box
    const rect = backgroundBox.getBoundingClientRect();

    // Check if the element is within the middle 75% of the viewport
    if (rect.top >= middleTop && rect.bottom <= middleBottom) {
        yellowBox.style.transform = 'scale(10)'; // Expand the yellowBox
    } else {
        yellowBox.style.transform = 'scale(1)';  // Revert the yellowBox
    }
}

// Set up a scroll event listener to continuously check the visibility
window.addEventListener('scroll', checkVisibility);

// Initial check on page load
checkVisibility();






// dark theme 

// Function to apply the theme based on system preference
function applyThemeBasedOnSystemPreference() {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (prefersDarkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
}

// Listen for changes in system theme preference and apply the corresponding theme
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (event.matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
});

// Initial check to set theme on page load
applyThemeBasedOnSystemPreference();