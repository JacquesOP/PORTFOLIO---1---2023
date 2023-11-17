/*=============== CURSOR ===============*/
const mouseCursor1 = document.querySelector(".cursor__1");
const mouseCursor2 = document.querySelector(".cursor__2");

document.addEventListener('mousemove', cursor);

function cursor(e){
    const posX = e.clientX;
    const posY = e.clientY;

    mouseCursor1.style.left = `${posX}px`;
    mouseCursor1.style.top = `${posY}px`;

    mouseCursor2.style.left = `${posX}px`;
    mouseCursor2.style.top = `${posY}px`;
}

/*=============== MENU ===============*/
const header = document.getElementById("header");
const navProfile = document.getElementById("nav-profile");
const navContainer = document.getElementById("nav-container");
const menuBtn = document.getElementById("menu-img");
const closeBtn = document.getElementById("close-btn");


const showMenu = () =>{
    header.style.height = "98%";
    navContainer.style.display = "flex";
    menuBtn.hidden = true;
}

const hideMenu = () =>{
    header.style.height = "25%";
    navContainer.style.display = "none";
    menuBtn.hidden = false;
}

/*===== MENU SHOW =====*/
if(menuBtn){
    menuBtn.addEventListener("click", showMenu);
}

/*===== MENU HIDDEN =====*/
if(closeBtn){
    closeBtn.addEventListener("click", hideMenu);
}

/*=============== GET CURRENT DATE AND HOURS ===============*/
const date = document.getElementById("date-h2");
const timeZone = document.getElementById("current-time");

/**
 * 
 * @param {Date} date  
 */
const formatTime = (date) =>{
    const hours12 = date.getHours() % 12 || 12;
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



/*=============== REMOVE MENU MOBILE ===============*/



/*=============== SHADOW/BLUR HEADER ===============*/





/*=============== SWIPER JS ===============*/



/*===== GSAP ANIMATION =====*/