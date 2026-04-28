// QUIZ
let current = 0;
const steps = document.querySelectorAll(".step");
const progress = document.querySelector(".progress");

function nextStep() {
    steps[current].classList.remove("active");
    current++;

    if (current < steps.length) {
        steps[current].classList.add("active");
        progress.style.width = (current / (steps.length - 1)) * 100 + "%";
    }
}

// ANIMATION
const faders = document.querySelectorAll(".fade-up");

const appear = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

faders.forEach(el => appear.observe(el));