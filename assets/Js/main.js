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