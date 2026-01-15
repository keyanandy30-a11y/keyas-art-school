// HERO SLIDER
const heroSlides = document.querySelectorAll(".hero-slide");
let index = 0;

setInterval(() => {
    heroSlides[index].classList.remove("active");
    index = (index + 1) % heroSlides.length;
    heroSlides[index].classList.add("active");
}, 4000);
