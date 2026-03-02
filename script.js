/* Golden floating particles */
function createParticle() {
    const particle = document.createElement("div");
    particle.style.position = "fixed";
    particle.style.width = "4px";
    particle.style.height = "4px";
    particle.style.background = "gold";
    particle.style.borderRadius = "50%";
    particle.style.left = Math.random() * 100 + "vw";
    particle.style.top = "-10px";
    particle.style.opacity = "0.8";
    particle.style.animation = "fall linear";
    particle.style.animationDuration = (3 + Math.random() * 5) + "s";

    document.body.appendChild(particle);

    setTimeout(() => particle.remove(), 8000);
}

setInterval(createParticle, 250);

/* Add falling animation */
const style = document.createElement('style');
style.innerHTML = `
@keyframes fall {
    to {
        transform: translateY(110vh);
        opacity: 0;
    }
}`;
document.head.appendChild(style);
