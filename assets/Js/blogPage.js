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


// set the default active slide to the first one
let slideIndex = 1;
showSlide(slideIndex);

// change slide with the prev/next button
function moveSlide(moveStep) {
    showSlide(slideIndex += moveStep);
}

// change slide with the dots
function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    let i;
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName('dot');

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    // hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.add('hidden');
    }

    // remove active status from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove('bg-yellow-500');
        dots[i].classList.add('bg-green-600');
    }

    // show the active slide
    slides[slideIndex - 1].classList.remove('hidden');

    // highlight the active dot
    dots[slideIndex - 1].classList.remove('bg-green-600');
    dots[slideIndex - 1].classList.add('bg-yellow-500');
}

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
ScrollReveal().reveal('.heroCard', {
    delay: 500,
    scale: 0.85,
})

// blogCard section
ScrollReveal().reveal('.bolgCardTitle h5', {
    delay: 500,
    origin: 'left',
    interval: 200
})
ScrollReveal().reveal('.blogCard div', {
    delay: 600,
    origin: 'right',
    interval: 100
})
ScrollReveal().reveal('.blogCardBottom', {
    delay: 500,
    scale: 0.85,
})