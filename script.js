const enterBtn = document.getElementById("enter-btn");
const entryScreen = document.getElementById("entry-screen");
const music = document.getElementById("bg-music");

if (music) music.volume = 0.25;

if (enterBtn && entryScreen) {
  enterBtn.addEventListener("click", async () => {
    try {
      if (music) await music.play();
    } catch (err) {
      console.warn("Autoplay blocked:", err);
    }

    entryScreen.classList.add("hide");

    setTimeout(() => {
      entryScreen.remove();
    }, 1000);
  });
}

/* COUNTDOWN */

const weddingDate = new Date("2026-03-08T02:38:00+05:30").getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCountdown() {
  const now = Date.now();
  const distance = weddingDate - now;

  if (distance <= 0) {
    clearInterval(timer);
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");
}

const timer = setInterval(updateCountdown, 1000);
updateCountdown();
