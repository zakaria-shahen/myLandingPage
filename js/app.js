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
    for (let i = 0; i <= countSection; i++){

        // create <li> append <a>
        const newElement = document.createElement('li');
        const newATag = document.createElement('a');


        if (i === 0){
            newATag.href = 'javascript:void(0);';
            newATag.setAttribute('onclick', 'navbarPhoneShowHidden()');
            newATag.className = 'menu__link menu__link__phone las la-bars';
            // newATag.style = 'font-size: 2.5em; padding: 0.3em;';

        } else {
            newATag.href = '#section' + i;

            const headerSelector = document.querySelector('#section' + i); // i => number section
            newATag.innerText = headerSelector.getAttribute('data-nav'); // add text header 
            newATag.className = 'menu__link'; // add class in a tag 
        }

        newElement.appendChild(newATag); // <li> append <a>
        fragment.appendChild(newElement);//  fragment append <li>

    }

    navSelector.appendChild(fragment); // navbar append fragment
}



function showNavbar() {
    navSelector.parentElement.style.display = 'block';
    // setTimeout(hiddenNavbar, 7000);
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

    const eventId = '#' + event.target.id;
    if (event.target.nodeName === 'HEADER') {
        // remove class active section 
        const sectionActiveNow = document.querySelector(hasSectionActive);
        sectionActiveNow.removeAttribute('class');

        // remove active navbar
        const lisActiveNow = document.querySelector('a[href="' + hasSectionActive + '"]');    
        lisActiveNow.classList.remove('active');
    
    } else if (eventId !== hasSectionActive){
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

function navbarPhoneShowHidden(){
    const nav = document.querySelector('.navbar__menu');
    nav.classList.toggle('navbar__menu__show');
    
} 


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


// build the nav




// Add class 'active' to section when near top of viewport
let scroll = new IntersectionObserver(function (events){
    events.forEach(function (event){
        if (event.isIntersecting){
            active(event);

        } 
    }); 
 }, {rootMargin: "0% 0% -50% 0%"});






// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
createLiNave();

// Scroll to section on link click
mainSelector.querySelectorAll('section').forEach(function (section){scroll.observe(section)}); // view section
scroll.observe(mainSelector.querySelector('header')); // view header 

// Set sections as active


