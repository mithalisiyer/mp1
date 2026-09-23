/* Your JS here. */
console.log('Hello World!')

const sections = document.querySelectorAll("#home, #projects, #about");
const navlinks = document.querySelectorAll(".nav-link");
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
    const navBottom = navbar.getBoundingClientRect().bottom;
    let currentSection = "";
    sections.forEach(function (section) {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= navBottom) {
            currentSection = section.id;
        }
    });
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        currentSection = "about";
    }
    navlinks.forEach(function (link) {
        link.classList.remove("active");
    });
    const activeLink = document.querySelector
        (`.nav-link[href="#${currentSection}"]`
        );
    if (activeLink) {
        activeLink.classList.add("active");
    }
});

const modals = document.querySelectorAll(".modal");
const casestudybtns = document.querySelectorAll(".casestudybtn");
const closebtns = document.querySelectorAll(".closebtn");

casestudybtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
        const modalId = btn.getAttribute("data-modal");
        const modal = document.getElementById(modalId);
        modal.classList.add("show");
    });
});

closebtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
        const modal = btn.closest(".modal");
        modal.classList.remove("show");
    });
});

modals.forEach(function (modal) {
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.classList.remove("show");
        }
    });
});


const slides = document.querySelectorAll(".carouselslide");
const prevbtn = document.querySelector(".prev");
const nextbtn = document.querySelector(".next");
let currentSlide = 0;

function showSlide(index) {
    slides.forEach(function (slide) {
        slide.classList.remove("active");
    });
    slides[index].classList.add("active");
}
nextbtn.addEventListener("click", function () {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
});

prevbtn.addEventListener("click", function () {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
});

