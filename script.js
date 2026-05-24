// KYSELY
let current = 0;
const steps = document.querySelectorAll(".step");
const progress = document.querySelector(".progress");

function startQuiz() {
    document.querySelector(".quiz-section").style.display = "flex";
}

function nextStep() {

    steps[current].classList.remove("active");

    current++;

    if (current >= steps.length) {
        return;
    }

    steps[current].classList.add("active");

    updateProgress();
}

function updateProgress() {
    let percent = (current / (steps.length - 1)) * 100;
    progress.style.width = percent + "%";
}


function selectAnswer(field, value) {
    document.getElementById(field).value = value;
    nextStep();

const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const data = new FormData(form);

    fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        document.querySelector(".quiz-container").style.display = "none";
        document.querySelector(".thank-you").style.display = "block";
    });
});

}

function closeQuiz() {
    document.querySelector(".quiz-section").style.display = "none";
}
// ANIMAATIO
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".fade-up, .card").forEach((el) => {
    observer.observe(el);
});

function toggleMenu() {

    document
        .querySelector(".menu-btn")
        .classList.toggle("active");

    document
        .querySelector(".overlay-menu")
        .classList.toggle("active");
}