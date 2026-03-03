const enterBtn = document.getElementById("enter-btn");
const entryScreen = document.getElementById("entry-screen");
const music = document.getElementById("bg-music");

if (music) music.volume = 0.25;

enterBtn.addEventListener("click", async () => {
  try {
    await music.play();
  } catch (e) {}

  entryScreen.classList.add("hide");

  setTimeout(() => {
    entryScreen.style.display = "none";
  }, 1000);
});
