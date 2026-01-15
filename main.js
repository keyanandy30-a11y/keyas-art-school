// HERO SLIDER LOGIC
const slides = document.querySelectorAll(".hero-slide");
let current = 0;

setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
}, 4000); // change image every 4 seconds

// DROPDOWN CLICK SUPPORT
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("coursesToggle");
    const dropdown = document.querySelector(".dropdown");

    if (toggle && dropdown) {
        toggle.addEventListener("click", (e) => {
            e.preventDefault();
            dropdown.classList.toggle("open");
        });
    }
});
