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

// Countdown
const weddingDate = new Date("March 7, 2026 02:38:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance < 0) return;

  document.getElementById("days").innerText =
    Math.floor(distance / (1000 * 60 * 60 * 24));

  document.getElementById("hours").innerText =
    Math.floor((distance / (1000 * 60 * 60)) % 24);

  document.getElementById("minutes").innerText =
    Math.floor((distance / (1000 * 60)) % 60);

  document.getElementById("seconds").innerText =
    Math.floor((distance / 1000) % 60);
}

setInterval(updateCountdown, 1000);
updateCountdown();
// MUSIC CONTROL
const music = document.getElementById("bg-music");
const toggle = document.getElementById("music-toggle");

// Set soft volume
music.volume = 0.25;

// Attempt autoplay
window.addEventListener("load", () => {
  const playPromise = music.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      // Autoplay blocked — will wait for interaction
    });
  }
});

// Show button only after scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    toggle.classList.add("show");
  }
});

// Toggle play/pause
toggle.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    toggle.innerHTML = "❚❚";
  } else {
    music.pause();
    toggle.innerHTML = "♪";
  }
});

















