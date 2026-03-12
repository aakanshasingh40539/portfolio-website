document.addEventListener("DOMContentLoaded", function () {

    const toggle = document.getElementById("themeToggle");

    // DARK MODE TOGGLE
    toggle.addEventListener("click", function () {
        document.body.classList.toggle("dark");

        // icon change
        if (document.body.classList.contains("dark")) {
            toggle.textContent = "☀️";
        } else {
            toggle.textContent = "🌙";
        }
    });

    // TYPING ANIMATION
    const roles = ["Frontend Developer", "WordPress Developer", "Web Designer"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingElement = document.getElementById("typing");

    function typeEffect() {
        const current = roles[roleIndex];

        if (!isDeleting) {
            typingElement.textContent = current.substring(0, charIndex++);
            if (charIndex > current.length) {
                isDeleting = true;
                setTimeout(typeEffect, 1000);
                return;
            }
        } else {
            typingElement.textContent = current.substring(0, charIndex--);
            if (charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
            }
        }

        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }

    typeEffect();

    // SKILL ANIMATION
    const skillSection = document.querySelector("#skills");
    const progressBars = document.querySelectorAll(".progress-bar");

    window.addEventListener("scroll", function () {
        const sectionTop = skillSection.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight - 100) {
            progressBars.forEach(bar => {
                bar.style.width = bar.getAttribute("data-width");
            });
        }

        // Reveal animation
        document.querySelectorAll(".reveal").forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 100) {
                el.classList.add("active");
            }
        });
    });

    document.querySelector(".hero").classList.add("active");

});
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.style.background = "#0f2027";
        nav.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";
    } else {
        nav.style.background = "rgba(15, 32, 39, 0.9)";
        nav.style.boxShadow = "none";
    }
});
const form = document.querySelector(".contact-form");
const sendBtn = document.getElementById("sendBtn");
const btnText = document.querySelector(".btn-text");

form.addEventListener("submit", function () {
    sendBtn.disabled = true;
    btnText.textContent = "Sending...";
});