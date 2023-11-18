/*=============== CURSOR ===============*/
const mouseCursor1 = document.querySelector(".cursor__1");
const navlinks = document.querySelectorAll(".nav__links");
const h3Links = document.querySelector(".h3-links");
const allLinks = document.querySelectorAll("a");
const profileBtn = document.getElementById("link-logo");


window.addEventListener('mousemove', cursor);

function cursor(e){
    const posX = e.clientX;
    const posY = e.clientY;

    mouseCursor1.style.left = `${posX}px`;
    mouseCursor1.style.top = `${posY}px`;
}

function linkGrow(e){
    mouseCursor1.classList.add('link-grow');
}

function linkShrink(e){
    mouseCursor1.classList.remove('link-grow');
}

function linkGrow2(e){
    mouseCursor1.classList.add('link-grow2');
}

function linkShrink2(e){
    mouseCursor1.classList.remove('link-grow2');
}

navlinks.forEach(link =>{
    link.addEventListener("mouseover", linkGrow);

    link.addEventListener("mouseleave", linkShrink);
})

profileBtn.addEventListener("mouseover", linkGrow);
profileBtn.addEventListener("mouseleave", linkShrink);


/*=============== MENU ===============*/
const headerContainer = document.getElementById("header-container");
const header = document.getElementById("header");
const navProfile = document.getElementById("nav-profile");
const navContainer = document.getElementById("nav-container");
const menuBtn = document.getElementById("menu-img");
const closeBtn = document.getElementById("close-btn");
const main = document.querySelector('.main');


// const showMenu = () =>{
//     header.style.height = "98%";
//     navContainer.style.display = "flex";
//     menuBtn.hidden = true;
// }

// const hideMenu = () =>{
//     header.style.height = "25%";
//     navContainer.style.display = "none";
//     menuBtn.hidden = false;
// }

// /*===== MENU SHOW =====*/
// if(menuBtn){
//     menuBtn.addEventListener("click", showMenu);
// }

// /*===== MENU HIDDEN =====*/
// if(closeBtn){
//     closeBtn.addEventListener("click", hideMenu);
// }

const showMenu = (e) =>{
    header.classList.add('header__show');
    navProfile.classList.add('nav__profile__show');
    navContainer.classList.add('nav__container__show');
    menuBtn.hidden = true;
    closeBtn.hidden = false;
    e.preventDefault();
}

const hideMenu = (e) =>{
    header.classList.remove('header__show');
    navProfile.classList.remove('nav__profile__show');
    navContainer.classList.remove('nav__container__show');
    closeBtn.hidden = true;
    menuBtn.hidden = false;
    e.preventDefault();
}

/*===== MENU SHOW =====*/
if(menuBtn){
    menuBtn.addEventListener("click", showMenu);
}

/*===== MENU HIDDEN =====*/
if(closeBtn){
    closeBtn.addEventListener("click", hideMenu);
}

if(main){
    main.addEventListener("click", hideMenu);
}


function navBtnHovered(e){
    mouseCursor1.classList.add('link-hovered');
}

function resetNavBtn(e){
    mouseCursor1.classList.remove('link-hovered');
}

menuBtn.addEventListener("mouseover", navBtnHovered);
menuBtn.addEventListener("mouseleave", resetNavBtn);

closeBtn.addEventListener("mouseover", navBtnHovered);
closeBtn.addEventListener("mouseleave", resetNavBtn);

/*=============== GET CURRENT DATE AND HOURS ===============*/
const date = document.getElementById("date-h2");
const timeZone = document.getElementById("current-time");

/**
 * 
 * @param {Date} date  
 */
const formatTime = (date) =>{
    const hours12 = date.getHours() % 24 || 24;
    const minutes = date.getMinutes();
    const secondes = date.getSeconds();
    const isAm = date.getHours() < 12 ;

    return `${hours12.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secondes.toString().padStart(2, "0")} ${isAm ? "AM" : "PM"}`;
}


/**
 * 
 * @param {Date} date  
 */
const formatDate = (date) =>{

    const days = ["Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
};

setInterval(() =>{
    const now = new Date();
    date.innerHTML = formatDate(now);
    timeZone.innerHTML = formatTime(now);
}, 200);


/*===== GSAP ANIMATION =====*/

// HOME
gsap.from(".header", {opacity: 0, duration: 1, delay: 2, x:30, stagger: 0.2});
gsap.from(".home-h1", {opacity: 0, duration: 1, delay: 1.4, x:-60, stagger: 0.2});
gsap.from(".home-h2", {opacity: 0, duration: 1, delay: 1.8, y:30, stagger: 0.2});
gsap.from(".portfolio__updates-h2", {opacity: 0, duration: 1, delay: 1.6, x:-40, stagger: 0.2});
gsap.from(".portfolio__updates-h3", {opacity: 0, duration: 1, delay: 1.9, y:30, stagger: 0.2});
gsap.from(".catch", {opacity: 0, duration: 1, delay: 1.9, y:30, stagger: 0.2});
