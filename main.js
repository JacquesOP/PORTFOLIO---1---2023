/*=============== DOM SELECTIONS ===============*/
const mouseCursor1 = document.querySelector(".cursor__1");
const profileBtn = document.getElementById("link-logo");
const navlinks = document.querySelectorAll(".nav__links");

const headerContainer = document.getElementById("header-container");
const header = document.getElementById("header");
const navProfile = document.getElementById("nav-profile");
const navContainer = document.getElementById("nav-container");
const menuBtn = document.getElementById("menu-img");
const closeBtn = document.getElementById("close-btn");
const h3Links = document.querySelector(".h3-links");
const allLinks = document.querySelectorAll("a");
const section = document.querySelectorAll('section');


// CURSOR

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


// MENU SHOW and HIDE

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

section.forEach(section =>{
    section.addEventListener('click', hideMenu);
})

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
    let hours12 = date.getHours() % 24 || 24;
    const minutes = date.getMinutes();
    const secondes = date.getSeconds();
    const isAm = date.getHours() < 12 ;

    if(hours12 === 24){
        hours12 = 0;
    }

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



/*===== Smooth Scroll =====*/

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)



/*===== GSAP ANIMATION =====*/

// HOME
gsap.from(".header", {opacity: 0, duration: 1, delay: 2, x:30, stagger: 0.2});
gsap.from(".home__title", {opacity: 0, duration: 1, delay: 1.4, x:-60, stagger: 0.2});
gsap.from(".home__title2", {opacity: 0, duration: 1, delay: 1.8, y:30, stagger: 0.2});
gsap.from(".portfolio__updates-h2", {opacity: 0, duration: 1, delay: 1.6, x:-40, stagger: 0.2});
gsap.from(".portfolio__updates-h3", {opacity: 0, duration: 1, delay: 1.9, y:30, stagger: 0.2});
gsap.from(".catch", {opacity: 0, duration: 1, delay: 1.9, y:30, stagger: 0.2});


// ABOUT



/*=============== GSAP ANIMATION ===============*/
// GSAP SrollTrigger

gsap.registerPlugin(ScrollTrigger)

const Scroll = new function() {
	let sections
	let page
	let main
	let scrollTrigger
	let tl
	let win
	
	// Init
	this.init = () => {
		sections = document.querySelectorAll('section')
		page = document.querySelector('#page')
		main = document.querySelector('main')
		win = {
			w: window.innerWidth,
			h: window.innerHeight
		}
		
		this.setupTimeline()
		this.setupScrollTrigger()
		window.addEventListener('resize', this.onResize)
	}
	
	// Setup ScrollTrigger
	this.setupScrollTrigger = () => {
		page.style.height = (this.getTotalScroll() + win.h) + 'px'
		
		scrollTrigger = ScrollTrigger.create({
			id: 'mainScroll',
			trigger: 'main',
			animation: tl,
			pin: true,
			scrub: true,
			snap: {
				snapTo: (value) => {
					
					let labels = Object.values(tl.labels)
					
					const snapPoints = labels.map(x => x / tl.totalDuration());
					const proximity = 0.1
					
					console.log(tl.labels , tl.totalDuration(), labels, snapPoints)
					
					for (let i = 0; i < snapPoints.length; i++) {
						if (value > snapPoints[i] - proximity && value < snapPoints[i] + proximity) {
							return snapPoints[i]
						}
					}
				},
				duration: { min: 0.2, max: 0.6 },
			},
			start: 'top top',
			end: '+=' + this.getTotalScroll(),
		})
	}
	
	// Setup timeline
	this.setupTimeline = () => {
		tl = gsap.timeline()
		tl.addLabel("label-initial")
		
		sections.forEach((section, index) => {
			const nextSection = sections[index+1]
			if (!nextSection) return

			tl.to(nextSection, {
				y: -1 * nextSection.offsetHeight,
				duration: nextSection.offsetHeight,
				ease: 'linear',
			})
			.addLabel(`label${index}`)
		})
	}
	
	// On resize
	this.onResize = () => {
		win = {
			w: window.innerWidth,
			h: window.innerHeight
		}
		
		this.reset()
	}
	
	// Reset
	this.reset = () => {
		if (typeof ScrollTrigger.getById('mainScroll') === 'object') {
			ScrollTrigger.getById('mainScroll').kill()
		}
		
		if (typeof tl === 'object') {
			tl.kill()
			tl.seek(0)
		}
		
		document.body.scrollTop = document.documentElement.scrollTop = 0
		this.init()
	}
	
	// Get total scroll
	this.getTotalScroll = () => {
		let totalScroll = 0
		sections.forEach(section => {
			totalScroll += section.offsetHeight
		})
		totalScroll -= win.h
		return totalScroll
	}
}

Scroll.init()