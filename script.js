// Scroll reveal animation
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;

    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < windowHeight - 100) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Jasmine petal fall
function createPetal() {
    const petal = document.createElement("div");
    petal.innerHTML = "🌸";
    petal.style.position = "fixed";
    petal.style.top = "-20px";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.fontSize = "20px";
    petal.style.animation = "fall 6s linear forwards";
    document.body.appendChild(petal);

    setTimeout(() => petal.remove(), 6000);
}

setInterval(createPetal, 600);

// Falling animation
const style = document.createElement('style');
style.innerHTML = `
@keyframes fall {
    to {
        transform: translateY(110vh) rotate(360deg);
        opacity: 0;
    }
}`;
document.head.appendChild(style);
