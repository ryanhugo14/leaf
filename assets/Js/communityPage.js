// for second Nav
const amazing = document.querySelectorAll('.amazing')
const amazingItem = document.querySelectorAll(".amazing-item");
const icons = document.querySelectorAll(".icon");
const showMmobildMenuBox = document.querySelector('.show-mobild-menu-box')
    // const menuIcon = document.querySelector(".menu-icon");

amazing.forEach((ee, index) => {
    ee.addEventListener("click", () => {
        amazingItem[index].classList.toggle("hidden");
        amazingItem[index].classList.toggle("opacity-0");
        ee.classList.toggle('bg-slate-100')
        icons[index].classList.toggle("rotate-180");
    });
})

const menuIcon = () => {
    showMmobildMenuBox.classList.toggle("hidden");
}

// Menu
// const openMenu = document.querySelector('#openMenu')
// const closeMenu = document.querySelector('.close-menu')
// const mobileMenu = document.querySelector('#mobile-menu')

// openMenu.addEventListener('click', () => {
//     mobileMenu.style.left = '0px'
// })

// closeMenu.addEventListener('click', () => {
//     mobileMenu.style.left = '-100%'
// })

// let mobileSlideClosed = document.querySelectorAll('.mobile-slide-closed')

// for (let i = 0; i < mobileSlideClosed.length; i++) {
//     // console.log(mobileSlideClosed[i])
//     mobileSlideClosed[i].addEventListener('click', () => {
//         mobileMenu.style.left = '-100%'
//     })
// }

// fixed Nav & Animation
const fixedNav = document.getElementById('fixedNav')
var waypoint = new Waypoint({
    element: document.getElementById('navStart'),
    handler: function(direction) {
        if (direction === 'down') {
            fixedNav.classList.add('fixed', 'top-0', 'animate__fadeInDown', 'shadow-lg', 'bg-[#131C2A]')
        } else {
            fixedNav.classList.remove('fixed', 'top-0', 'animate__fadeInDown', 'shadow-lg', 'bg-[#131C2A]')
        }
    },
    offset: '30%'
});

// target elements and specify options to create animations
ScrollReveal({
    // reset: true,
    distance: '10px',
    duration: 1500,
    delay: 400
})

// target elements and specify options to create animations
// first Nav
ScrollReveal().reveal('.firstNavMenu div', {
    delay: 500,
    scale: 0.80,
    interval: 200
})

// sec Nav
ScrollReveal().reveal('.secNavLogo', {
    delay: 500,
    origin: 'left'
})
ScrollReveal().reveal('.secNavMenu', {
    delay: 600,
    origin: 'bottom',
    distance: '30px',
    intreval: 100
})
ScrollReveal().reveal('.secNavBottom', {
        delay: 700,
        origin: 'right'
    })
    //hero section
ScrollReveal().reveal('.heroTitle h1', {
    delay: 500,
    origin: 'left',
    interval: 200
})
ScrollReveal().reveal('.heroBottom', {
    delay: 600,
    origin: 'bottom',
    distance: '30px'
})

// community section
ScrollReveal().reveal('.communityCards div', {
    delay: 500,
    origin: 'right',
    interval: 200
})
ScrollReveal().reveal('.communityMainCard', {
    delay: 500,
    scale: 0.80
})