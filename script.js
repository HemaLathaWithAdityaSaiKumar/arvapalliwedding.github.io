// ENTRY SCREEN + MUSIC
const enterBtn = document.getElementById("enter-btn");
const entryScreen = document.getElementById("entry-screen");
const music = document.getElementById("bg-music");

music.volume = 0.25;

enterBtn.addEventListener("click", () => {
  music.play();
  entryScreen.classList.add("hide");
});

// COUNTDOWN
const weddingDate = new Date("March 8, 2026 02:38:00").getTime();

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
