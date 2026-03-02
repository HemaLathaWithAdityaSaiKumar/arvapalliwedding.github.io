// Scroll reveal
function reveal() {
    document.querySelectorAll('.reveal').forEach(el => {
        const windowHeight = window.innerHeight;
        const top = el.getBoundingClientRect().top;
        if (top < windowHeight - 120) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// Music fade in/out
const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicToggle");

btn.addEventListener("click", () => {
    if (music.paused) {
        music.volume = 0;
        music.play();
        let fade = setInterval(() => {
            if (music.volume < 0.9) {
                music.volume += 0.05;
            } else {
                clearInterval(fade);
            }
        }, 200);
    } else {
        music.pause();
    }
});
