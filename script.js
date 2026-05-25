let current = 0;

function openQuiz() {
    document.querySelector(".quiz-section").style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeQuiz() {
    document.querySelector(".quiz-section").style.display = "none";
    document.body.style.overflow = "auto";
}

function nextStep() {
    const steps = document.querySelectorAll(".step");
    const progress = document.querySelector(".progress");

    steps[current].classList.remove("active");
    current++;

    if (current < steps.length) {
        steps[current].classList.add("active");

        if (progress) {
            progress.style.width = (current / (steps.length - 1)) * 100 + "%";
        }
    }
}

function selectAnswer(field, value) {
    const input = document.getElementById(field);

    if (input) {
        input.value = value;
    }

    nextStep();
}

function toggleMenu() {
    document.querySelector(".menu-btn").classList.toggle("active");
    document.querySelector(".overlay-menu").classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("startQuizBtn");

    if (startBtn) {
        startBtn.addEventListener("click", openQuiz);
    }

    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const data = new FormData(form);

            fetch(form.action, {
                method: "POST",
                body: data,
                headers: {
                    "Accept": "application/json"
                }
            }).then(() => {
                document.querySelector(".quiz-container").style.display = "none";
                document.querySelector(".thank-you").style.display = "block";
            });
        });
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.15
    });

    document.querySelectorAll(".fade-up, .card").forEach(el => {
        observer.observe(el);
    });
});