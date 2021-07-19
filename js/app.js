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


// change active 'a' tag/Element by scroll
function aActiveChangeScroll(event){
    // for (let i = 0; i < countSection; i++){
        // const section = document.querySelectorAll('section')[0];
        // const positionSection = section.getBoundingClientRect();
        // const positionUser = window.getBoundingClientRect();
        // console.log(positionSection);
        
    // }
    // console.log(event);
    
    showNavbar();

}

function showNavbar(event = 0) {
    navSelector.parentElement.style.display = 'block';
    const n = setTimeout(hiddenNavbar, 7000);
    if (event !== 0){
        clearTimeout(n);

    }
    console.log(event);
}


function hiddenNavbar() {
    navSelector.parentElement.style.display = 'none';
}

// change active a tag/Element
function activeAElement(aElementNew) {
    const lisActiveNow = document.querySelector('a[href="' + hasSectionActive + '"]');
    const lisActiveNew = document.querySelector('a[href="' + aElementNew + '"]');

    // clear active a tag 
    lisActiveNow.classList.remove('active');

    // add class active a tag
    lisActiveNew.classList.add('active');
}



// change active section  
function active(event) {

    const eventId = event.srcElement.hash;
    if (eventId !== hasSectionActive){
        // remove class active 
        const sectionActiveNow = document.querySelector(hasSectionActive);
        sectionActiveNow.removeAttribute('class');

        // add class active
        const sectionActiveNew = document.querySelector(eventId);
        sectionActiveNew.className = 'your-active-class'; 

        activeAElement(eventId);  
        hasSectionActive = eventId; // change active save
    } else {
        activeAElement(eventId);
    }
    
   
}
    
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/




// build the nav

createLiNave(); // create li an a tags/Element

navSelector.addEventListener("click", active); // Event Click a tag nav bar;
navSelector.parentElement.addEventListener("mouseenter", showNavbar); // Event Click a tag nav bar;



// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
window.addEventListener('scroll', aActiveChangeScroll);



// Set sections as active


