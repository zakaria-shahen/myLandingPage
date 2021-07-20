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
const divIconUP = document.querySelector('.up__ico__container');

let hasSectionActive = '#section1';
/**
 * End Global Variables
 * Start Helper Functions
 * 
 */

// change active a tag (navbar)
function changeActiveNavbar(activeTo) {
    const liTagActiveNow = document.querySelector('a[href="' + hasSectionActive + '"]');
    const changeLiActiveTo = document.querySelector('a[href="' + activeTo + '"]');

    // clear 'active' a tag 
    liTagActiveNow.classList.remove('active');

    // add class active a tag
    changeLiActiveTo.classList.add('active');
}

// change active section  
function active(event) {

    const eventId = '#' + event.target.id; // get id event

    if (event.target.nodeName === 'HEADER') {
        // if viewport => header tag 

        // remove class active section 
        const sectionActiveNow = document.querySelector(hasSectionActive);
        sectionActiveNow.removeAttribute('class');

        // remove active navbar
        const lisActiveNow = document.querySelector('a[href="' + hasSectionActive + '"]');
        lisActiveNow.classList.remove('active');

        hasSectionActive = '#section1';

        // add class active
        const sectionActiveNew = document.querySelector(hasSectionActive);
        sectionActiveNew.className = 'your-active-class';

        upTopButtonHidden();
    } else if (eventId !== hasSectionActive) {
        // if viewport =>  not header tag and not hasSectionActive 

        // remove class active 
        const sectionActiveNow = document.querySelector(hasSectionActive);
        sectionActiveNow.removeAttribute('class');

        // add class active
        const sectionActiveNew = document.querySelector(eventId);
        sectionActiveNew.className = 'your-active-class';

        changeActiveNavbar(eventId);
        hasSectionActive = eventId; // change active save 

        upTopButtonShow();

    } else {
        // if viewport =>  not header tag and Equal hasSectionActive 
        changeActiveNavbar(eventId);
        upTopButtonShow();

    }


}

// show and hidden navbar list at Phone view
function navbarPhoneShowHidden() {
    const navbarPhone = document.querySelector('.navbar__menu');
    navbarPhone.classList.toggle('navbar__menu__show');

}



// hidden up icon button 
function upTopButtonHidden() {
    divIconUP.classList.add('up__ico__container__hidden');

}

// show up icon button 
function upTopButtonShow() {
    divIconUP.classList.remove('up__ico__container__hidden');

}




/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */


// build the nav
function createLiNave() {
    // loop create section 
    for (let i = 0; i <= countSection; i++) {

        // create <li> append <a>
        const newElement = document.createElement('li');
        const newATag = document.createElement('a');


        if (i === 0) {
            // create icon navbar for Phone 
            newATag.href = 'javascript:void(0);';
            newATag.setAttribute('onclick', 'navbarPhoneShowHidden()');
            newATag.className = 'menu__link menu__link__phone las la-bars';

        } else {
            // create navbar list <li>
            newATag.href = '#section' + i;

            const headerSelector = document.querySelector('#section' + i); // i => number section
            newATag.innerText = headerSelector.getAttribute('data-nav'); // add text header 
            newATag.className = 'menu__link'; // add class in a tag 
        }

        newElement.appendChild(newATag); // <li> append <a>
        fragment.appendChild(newElement); //  fragment append <li>

    }

    navSelector.appendChild(fragment); // navbar append fragment
}


// Add class 'active' to section when near top of viewport
let scroll = new IntersectionObserver(function(events) {
    events.forEach(function(event) {
        if (event.isIntersecting) {
            active(event);

        }
    });
}, { rootMargin: "0% 0% -50% 0%" });



// Scroll to anchor ID using scrollTO event
// using css ( scroll-behavior: smooth;) 

/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 
createLiNave();

// Scroll to section on link click
mainSelector.querySelectorAll('section').forEach(function(section) { scroll.observe(section) }); // view section
scroll.observe(mainSelector.querySelector('header')); // view header 




// // option 

// function showNavbar() {
//     navSelector.parentElement.style.display = 'block';
//     setTimeout(hiddenNavbar, 7000);
// }


// function hiddenNavbar() {
//     navSelector.parentElement.style.display = 'none';
// }