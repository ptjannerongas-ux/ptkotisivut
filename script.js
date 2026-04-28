const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

window.addEventListener("scroll", () => {
    document.querySelector("header").classList.toggle(
        "scrolled",
        window.scrollY > 50
    );
});

const faders = document.querySelectorAll(".fade-up");

const appear = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

faders.forEach(el => appear.observe(el));

let current = 0;
const steps = document.querySelectorAll(".step");

function nextStep() {
    steps[current].classList.remove("active");
    current++;
    steps[current].classList.add("active");
}