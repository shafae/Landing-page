/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */


//calculate performance 
const startingTime = performance.now();



/**
 * Define Global Variables
 * 
 */


const sections = document.querySelectorAll("section");
const myDocFrag = document.createDocumentFragment();
const navMenu = document.getElementById('navbar__list');
/**
 * End Global Variables
 * Start Helper Functions
 * 
 */

/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
let buildNav = () => {
    for (section of sections) {
        //create <li> element each iteration and append <a> as a child for it with the data-nav text and id of each section
        const addMenuItem = document.createElement('li');
        addMenuItem.innerHTML = `<a class ="menu__link" herf="#" data-id="${section.getAttribute('id')}">${section.getAttribute('data-nav')}</a>`;
        myDocFrag.appendChild(addMenuItem);
    }
    navMenu.appendChild(myDocFrag);
};

// Add class 'active' to section when near top of viewport
let activeSection = () => {
    const navLinks = document.querySelectorAll("nav ul li a");
    for (sec of sections) {
        //if section in viewport.
        if (sec.getBoundingClientRect().top > 0 && sec.getBoundingClientRect().top < 300) {
            sec.classList.add("your-active-class");
            //get id of active section.
            let currentSec = sec.getAttribute("id");
            //loop for add active class for link which contains active section id.
            for(link of navLinks) {
                link.classList.remove("active");
                if(link.classList.contains(currentSec)){
                    link.classList.add("active");
                }
            };
           
        } else {
            sec.classList.remove("your-active-class");
        };


    };
};

// Scroll to anchor ID using scrollTO event
let scrollToSec = (evt) => {
    evt.preventDefault();
    const sec = document.getElementById(evt.target.getAttribute('data-id'));
    sec.scrollIntoView({ block: 'center', behavior: "smooth" });
};

/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 
buildNav();
// Scroll to section on link click
navMenu.addEventListener('click', scrollToSec);
// Set sections as active
document.addEventListener('scroll', activeSection);
// find run time
const endingTime = performance.now();
console.log('The code takes ' + (endingTime - startingTime) + ' milliseconds.');