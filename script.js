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


// Newsletter sign up window

const signUpButton = document.querySelector(".signUpButton");
const popupOverlay = document.querySelector(".popup-overlay");
const signupForm = document.querySelector("#signupForm");
const emailInput = document.querySelector("#email");
const successMessage = document.querySelector(".success-message");
const errorMessage = document.querySelector(".error-message");
const errorMessage2 = document.querySelector(".error-message2");
const inputName = document.querySelector("#name");

function openPopup() {
    popupOverlay.classList.remove("hidden");
}

function closePopup() {
    popupOverlay.classList.add("hidden");
    resetForm();
}

function resetForm() {
    signupForm.classList.remove("hidden");
    successMessage.classList.add("hidden");
    errorMessage.classList.add("hidden");
    errorMessage2.classList.add("hidden");
    emailInput.classList.remove("valid", "invalid");
    signupForm.reset();
}

function validateName() {
    const nameValue = inputName.value;
    const namePattern = /^[ a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœŒ'`'\-]+$/;

    if (nameValue.length > 1 && namePattern.test(nameValue)) {
        inputName.classList.add("valid");
        inputName.classList.remove("invalid");
        errorMessage.classList.add("hidden");
    } 
    
    // else if (nameValue.length > 0 && nameValue.length < 2 && nameValue.length == focus) {
    //     inputName.classList.remove("valid");
    //     inputName.classList.remove("invalid");
    // }
    
    else {
        inputName.classList.remove("valid");
        inputName.classList.add("invalid");
        errorMessage.classList.remove("hidden");
    }
}

function validateEmail() {
    const emailValue = emailInput.value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailPattern.test(emailValue)) {
        emailInput.classList.add("valid");
        emailInput.classList.remove("invalid");
        errorMessage2.classList.add("hidden");
    } else {
        emailInput.classList.remove("valid");
    }
}

function validateEmailFocusout() {
    const emailValue = emailInput.value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailPattern.test(emailValue)) {
        emailInput.classList.add("valid");
        emailInput.classList.remove("invalid");
        errorMessage2.classList.add("hidden");
    } else {
        emailInput.classList.remove("valid");
        emailInput.classList.add("invalid");
        errorMessage2.classList.remove("hidden");
    }
}

function removeNameColor() {
    inputName.classList.remove("valid");
    inputName.classList.remove("invalid");
}

function removeEmailColor() {
    emailInput.classList.remove("valid");
    emailInput.classList.remove("invalid");
}

function submit(event) {
    event.preventDefault();

    const emailValue = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)) {
        emailInput.classList.add("invalid");
        errorMessage.classList.remove("hidden");
        return;
    }

    emailInput.classList.remove("invalid");
    showSuccessMessage();
}

function showSuccessMessage() {
    signupForm.classList.add("hidden");
    successMessage.classList.remove("hidden");

    setTimeout(closePopup, 2000);
}



//Checkbox animation fill
const checkbox = document.querySelector(".checkbox");
const promoContainer = document.querySelector(".promoContainer");
const checkboxContainer = document.querySelector(".checkbox-container");

const tl2 = gsap.timeline({
  defaults: { duration: 0.5, ease: "Power2.easeOut" },
});
const tickMarkPath = document.querySelector(".tick-mark path");
const pathLength = tickMarkPath.getTotalLength();

gsap.set(tickMarkPath, {
  strokeDashoffset: pathLength,
  strokeDasharray: pathLength,
});

promoContainer.addEventListener("click", () => {      

  if (checkbox.checked) {
    checkbox.checked = false;

    tl2.to(".checkbox-fill", { top: "100%" });
    tl2.fromTo(
      tickMarkPath,
      { strokeDashoffset: 0 },
      { strokeDashoffset: pathLength },
      "<50%"
    );
    tl2.to(".checkbox-label", { color: "#c5c5c5" }, "<");
    checkboxContainer.classList.remove("checked");
  } 
  
  else {
    tl2.to(".checkbox-fill", { top: "0%" });
    tl2.fromTo(
      tickMarkPath,
      { strokeDashoffset: pathLength },
      { strokeDashoffset: 0 },
      "<50%"
    );
    tl2.to(".checkbox-label", { color: "#6391e8" }, "<");
    checkbox.checked = true;
    checkboxContainer.classList.add("checked");
  }
});










// Event Listeners
signUpButton.addEventListener("click", openPopup);
signupForm.addEventListener("submit", submit);
emailInput.addEventListener("input", validateEmail); // Real-time validation
emailInput.addEventListener("focusout", validateEmailFocusout); 
inputName.addEventListener("focusout", validateName); // Real-time validation
inputName.addEventListener("focusin", removeNameColor);
emailInput.addEventListener("focusin", removeEmailColor);



