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

// // Menu
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
})

// dropDown
const dropdownIcon = document.getElementById('dropdownDefault')
const dropdownMenu = document.getElementById('dropdown')
const dropdownIcon2 = document.getElementById('dropdownDefault2')
const dropdownMenu2 = document.getElementById('dropdown2')
let dropdownTrue = true;

dropdownIcon.addEventListener('click', () => {
    if (dropdownTrue === true) {
        dropdownMenu.classList.remove('hidden')
        dropdownTrue = false
    } else {
        dropdownMenu.classList.add('hidden')
        dropdownTrue = true
    }
})

dropdownIcon2.addEventListener('click', () => {
    if (dropdownTrue === true) {
        dropdownMenu2.classList.remove('hidden')
        dropdownTrue = false
    } else {
        dropdownMenu2.classList.add('hidden')
        dropdownTrue = true
    }
})

// common reveal options to create reveal animations
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
ScrollReveal().reveal('.heroTitle', {
    delay: 700,
    scale: 1.5
})
ScrollReveal().reveal('.heroSpan', {
    delay: 500,
    origin: 'right'
})
ScrollReveal().reveal('.heroBottom div', {
    delay: 600,
    origin: 'bottom',
    distance: '50px',
    interval: 200
})

// cerfication section
ScrollReveal().reveal('.cerficationTitle', {
    delay: 600,
    scale: 0.80
})
ScrollReveal().reveal('.cerfication', {
    delay: 500,
    scale: 0.80
})