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
