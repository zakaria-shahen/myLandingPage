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

/**
 * Define Global Variables
 * 
*/
const navSelector = document.querySelector('#navbar__list');
const mainSelector = document.querySelector('main');
const countSection = mainSelector.querySelectorAll('section').length; // get total number section
const fragment = document.createDocumentFragment();
let hasSectionActive = '#section1';
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function createLiNave() { 
    
    // loop create section 
    for (let i = 1; i <= countSection; i++){
        // create <li> append <a>
        const newElement = document.createElement('li');
        const newATag = document.createElement('a');
        newATag.href = '#section' + i;

        const headerSelector = document.querySelector('#section' + i); // i => number section
        newATag.innerText = headerSelector.getAttribute('data-nav'); // add text header 
        newATag.className = 'menu__link'; // add class in a tag 
        
        newElement.appendChild(newATag); // <li> append <a>
        fragment.appendChild(newElement);//  fragment append <li>
    }
    navSelector.appendChild(fragment); // navbar append fragment
}




// change active section and a tag 
function active(event) {

    const eventId = event.srcElement.hash;
    if (eventId !== hasSectionActive){
        // remove class active 
        const sectionActiveNow = document.querySelector(hasSectionActive);
        sectionActiveNow.removeAttribute('class');
        const lisActiveNow = document.querySelector('a[href="' + hasSectionActive + '"]');

        // clear active a tag 
        lisActiveNow.className = 'menu__link';


        // add class active
        const sectionActiveNew = document.querySelector(eventId);
        sectionActiveNew.className = 'your-active-class'; 


        hasSectionActive = eventId; // change active save
    }  // else  ==> exit if 
    
    // add class active a tag
    const lisActiveNew = document.querySelector('a[href="' + eventId + '"]');
    lisActiveNew.className = 'menu__link active';

}
    
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/




// build the nav
createLiNave();
navSelector.addEventListener("click", active)



// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


