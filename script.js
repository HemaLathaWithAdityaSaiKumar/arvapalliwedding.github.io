const enterBtn = document.getElementById("enter-btn");
const entryScreen = document.getElementById("entry-screen");
const music = document.getElementById("bg-music");

music.volume = 0;

enterBtn.addEventListener("click", async () => {
  await music.play();

  let vol = 0;
  const fade = setInterval(() => {
    vol += 0.02;
    music.volume = vol;
    if (vol >= 0.25) clearInterval(fade);
  }, 100);

  entryScreen.classList.add("hide");
  setTimeout(() => entryScreen.remove(), 1000);
});

const weddingDate = new Date("2026-03-08T02:38:00+05:30").getTime();

function updateCountdown() {
  const now = Date.now();
  const distance = weddingDate - now;
  if (distance <= 0) return;

  document.getElementById("days").textContent =
    Math.floor(distance / (1000 * 60 * 60 * 24));
  document.getElementById("hours").textContent =
    Math.floor((distance / (1000 * 60 * 60)) % 24);
  document.getElementById("minutes").textContent =
    Math.floor((distance / (1000 * 60)) % 60);
  document.getElementById("seconds").textContent =
    Math.floor((distance / 1000) % 60);
}

setInterval(updateCountdown, 1000);
updateCountdown();
