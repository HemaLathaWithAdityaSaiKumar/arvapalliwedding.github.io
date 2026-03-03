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

/* COUNTDOWN */
const weddingDate = new Date("2026-03-08T02:38:00+05:30").getTime();

const ids = ["days", "hours", "minutes", "seconds"];

function updateCountdown() {
  const now = Date.now();
  const distance = weddingDate - now;
  if (distance <= 0) return;

  const values = [
    Math.floor(distance / (1000 * 60 * 60 * 24)),
    Math.floor((distance / (1000 * 60 * 60)) % 24),
    Math.floor((distance / (1000 * 60)) % 60),
    Math.floor((distance / 1000) % 60)
  ];

  ids.forEach((id, i) => {
    const el = document.getElementById(id);
    el.textContent = String(values[i]).padStart(2, "0");
  });
}

setInterval(updateCountdown, 1000);
updateCountdown();

/* ICS FILE DOWNLOAD (Correct UTC) */
document.getElementById("download-ics").addEventListener("click", () => {

const icsContent =
`BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:20260307T210800Z
DTEND:20260307T230800Z
SUMMARY:Hemalatha & Aditya Wedding
DESCRIPTION:Wedding Ceremony
LOCATION:Sri Vasavi Arya Vysya Kalyana Mandapam
END:VEVENT
END:VCALENDAR`;

  const blob = new Blob([icsContent], { type: "text/calendar" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "Hemalatha-Aditya-Wedding.ics";
  link.click();
});
