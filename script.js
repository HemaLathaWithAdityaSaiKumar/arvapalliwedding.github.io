// Scroll reveal
function reveal() {
  document.querySelectorAll('.reveal').forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// Music fade in
const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");

btn.addEventListener("click", () => {
  if (music.paused) {
    music.volume = 0;
    music.play();
    let fade = setInterval(() => {
      if (music.volume < 0.9) music.volume += 0.05;
      else clearInterval(fade);
    }, 200);
  } else {
    music.pause();
  }
});
