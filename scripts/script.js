// Verre weg de grootste bron die ik heb gebruikt is ChatGPT. Deze bron bestond uit een tal van verschillende chats, waaruit verschillende stukken code zijn gekomen. Helaas ondersteund ChatGPT het delen van chat met daarin bestanden nog niet, waardoor ik deze chats niet direct kan delen.
// Uiteraard laat ik deze maar al te graag zien tijdens het mondeling zo nodig.
// 

// https://chatgpt.com/share/6717c256-0360-8000-9a5c-3812094531e7



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





// Inplaats van section observer gebruik gemaakt van window.innerHeight en .getBoundingClientRect() om vervolgens met een if else statement te checken of het element zich tussen de gewenste margins bevindt.
// De functie wordt bij iedere scroll opgeroepen
//
// Bron en inspiratie voor deze setup kwam van chatGPT https://chatgpt.com/share/6717c256-0360-8000-9a5c-3812094531e7

const yellowBox = document.querySelector('.yellowBox');
const backgroundBox = document.querySelector('.backgroundBox');


function checkVisibility() {
    const viewportHeight = window.innerHeight;

    // De margins voor de middelste 75% van de viewport
    const middleTop = viewportHeight * 0.10;  // 12.5% from the top
    const middleBottom = viewportHeight * 0.85; // 87.5% from the top

    // De locatie van de box ten opzichte van de viewport
    const rect = backgroundBox.getBoundingClientRect();

    // Is de box binnen de margins?
    if (rect.top >= middleTop && rect.bottom <= middleBottom) {
        yellowBox.style.transform = 'scale(10)'; // Expand the yellowBox
    } else {
        yellowBox.style.transform = 'scale(1)';  // Revert the yellowBox
    }
}

// Roep de functie op bij iedere scroll
window.addEventListener('scroll', checkVisibility);

// Check bij iedere keer dat de pagina wordt ingeladen
checkVisibility();






// dark theme:  https://chatgpt.com/share/6717c256-0360-8000-9a5c-3812094531e7 

// Wanneer de pagina wordt geladen checkt deze functie de voorkur van de gebruiker.
function applyThemeBasedOnSystemPreference() {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (prefersDarkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
}

// Wanneer de voorkeur wordt veranderd
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (event.matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
});

// Check bij iedere keer dat de pagina wordt ingeladen
applyThemeBasedOnSystemPreference();




// Newsletter sign up window
//
// Inspiaratie bron voor de onderstaande code was ChatGPT: https://chatgpt.com/share/6717c256-0360-8000-9a5c-3812094531e7

const signUpButton = document.querySelector(".signUpButton");
const popupOverlay = document.querySelector(".popup-overlay");
const signupForm = document.querySelector("#signupForm");
const popupTitle = document.querySelector(".popup h2");
const emailInput = document.querySelector("#email");
const successMessage = document.querySelector(".success-message");
const errorMessage = document.querySelector(".error-message");
const errorMessage2 = document.querySelector(".error-message2");
const inputName = document.querySelector("#name");

function openPopup() {
    popupOverlay.classList.remove("hidden");
    resetForm();
}

function closePopup() {
    popupOverlay.classList.add("hidden");
    resetForm();
}



function validateName() {
    const nameValue = inputName.value;
    const namePattern = /^[ a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœŒ'`'\-]+$/;

    if (nameValue.length > 1 && namePattern.test(nameValue)) {
        inputName.classList.add("valid");
        inputName.classList.remove("invalid");
        errorMessage.classList.add("hidden");
    } 
    
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

function showSuccessMessage() {
    signupForm.classList.add("hideSignupForm");
    successMessage.classList.remove("hidden");
    popupTitle.textContent = "Thank you!";
    setTimeout(closePopup, 2000);
}

function submit(event) {
    event.preventDefault();

    const nameValue = inputName.value;

    // bron: stack overflow - onderste comment op de pagina (code komt van persoon met username Gudvit) https://stackoverflow.com/questions/3073850/javascript-regex-test-peoples-name
    const namePattern = /^[ a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœŒ'`'\-]+$/;

    const emailValue = emailInput.value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    // als alles klopt
    if (emailPattern.test(emailValue) && inputName.value.length > 1 && namePattern.test(nameValue)) {
        emailInput.classList.remove("invalid");
        errorMessage.classList.add("hidden");
        errorMessage2.classList.add("hidden");
        showSuccessMessage();
    }


    // als geen van beide kloppen
    else if (nameValue.length < 2 && !namePattern.test(nameValue) && !emailPattern.test(emailValue)) {
        errorMessage.classList.remove("hidden");
        errorMessage2.classList.remove("hidden");
        return;
    }

    // als naam niet klopt
    else if (emailPattern.test(emailValue) && inputName.value.length < 2 && !namePattern.test(nameValue)) {
        errorMessage2.classList.add("hidden");
        errorMessage.classList.remove("hidden");
        return;
    }

    // als email niet klopt
    else if (inputName.value.length > 1 && namePattern.test(nameValue) && !emailPattern.test(emailValue)) {
        errorMessage.classList.add("hidden");
        errorMessage2.classList.remove("hidden");
        return;
    }

    
}





//Checkbox animation fill
//
// Bron: De code is geinspireerd op een les uit een cursus van DevelopedbyEd. De code is echter aangepast naar mijn eigen wensen en stijl.
// link naar cursus: https://developedbyed.com/p/the-ultimate-javascript-animation-course
//
// Specifiek was dit een les over Forms, waar ook de checkmark animatie werd behandeld.

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
    tl2.to(".checkbox-label", { color: "black" }, "<");
    tl2.fromTo(
      tickMarkPath,
      { strokeDashoffset: 0 },
      { strokeDashoffset: pathLength },
      "<50%"
    );
    
    checkboxContainer.classList.remove("checked");
  } 
  
  else {
    tl2.to(".checkbox-fill", { top: "0%" });
    tl2.to(".checkbox-label", { color: "green" }, "<");
    tl2.fromTo(
      tickMarkPath,
      { strokeDashoffset: pathLength },
      { strokeDashoffset: 0 },
      "<50%"
    );
    
    checkbox.checked = true;
    checkboxContainer.classList.add("checked");
  }
});


function resetForm() {
    signupForm.classList.remove("hidden");
    successMessage.classList.add("hidden");
    errorMessage.classList.add("hidden");
    errorMessage2.classList.add("hidden");
    emailInput.classList.remove("valid", "invalid");
    signupForm.classList.remove("hideSignupForm");
    signupForm.reset();
    checkbox.checked = false;
    checkboxContainer.classList.remove("checked");
    tl2.to(".checkbox-fill", { top: "100%" });
    tl2.to(".checkbox-label", { color: "black" });
    popupTitle.textContent = "Sign up for our newsletter";
}

// Event Listeners
signUpButton.addEventListener("click", openPopup);
signupForm.addEventListener("submit", submit);
emailInput.addEventListener("input", validateEmail); 
emailInput.addEventListener("focusout", validateEmailFocusout); 
inputName.addEventListener("focusout", validateName); 
inputName.addEventListener("focusin", removeNameColor);
emailInput.addEventListener("focusin", removeEmailColor);
window.addEventListener("touchend", (event) => {
    if (event.target === popupOverlay) {
        closePopup();
    }
}   );

window.addEventListener("click", (event) => {
    if (event.target === popupOverlay) {
        closePopup();
    }
}   );





