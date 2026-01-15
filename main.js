// HERO SLIDER LOGIC
const heroSlides = document.querySelectorAll(".hero-slide");
let heroIndex = 0;

function changeHeroSlide() {
    heroSlides[heroIndex].classList.remove("active");
    heroIndex = (heroIndex + 1) % heroSlides.length;
    heroSlides[heroIndex].classList.add("active");
}

if (heroSlides.length > 0) {
    setInterval(changeHeroSlide, 5000); // Changes every 5 seconds
}

// IMAGE CAROUSEL LOGIC
const carouselSlides = document.querySelectorAll(".slide");
let carouselIndex = 0;

function changeCarouselSlide() {
    if (carouselSlides.length > 0) {
        carouselSlides[carouselIndex].classList.remove("active");
        carouselIndex = (carouselIndex + 1) % carouselSlides.length;
        carouselSlides[carouselIndex].classList.add("active");
    }
}

setInterval(changeCarouselSlide, 3500);

// ACCORDION LOGIC
document.querySelectorAll(".accordion").forEach(button => {
    button.addEventListener("click", function() {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
});

// TESTIMONIALS LOGIC
const testimonials = document.querySelectorAll(".testimonial");
let tIndex = 0;

function changeTestimonial() {
    if (testimonials.length > 0) {
        testimonials[tIndex].classList.remove("active");
        tIndex = (tIndex + 1) % testimonials.length;
        testimonials[tIndex].classList.add("active");
    }
}

setInterval(changeTestimonial, 4500);