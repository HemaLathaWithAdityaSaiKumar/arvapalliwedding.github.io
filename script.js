// script.js - lightweight
(function() {
  const enterBtn = document.getElementById('enter-btn');
  const entryScreen = document.getElementById('entry-screen');
  const music = document.getElementById('bg-music');
  
  if (music) music.volume = 0.2;

  if (enterBtn && entryScreen) {
    enterBtn.addEventListener('click', () => {
      if (music) music.play().catch(() => {});
      entryScreen.classList.add('hide');
      setTimeout(() => entryScreen.remove(), 400);
    });
  }

  // Countdown
  const wedding = new Date('2026-03-08T02:38:00+05:30').getTime();
  const days = document.getElementById('days');
  const hours = document.getElementById('hours');
  const minutes = document.getElementById('minutes');
  const seconds = document.getElementById('seconds');

  if (days && hours && minutes && seconds) {
    function update() {
      const now = Date.now();
      const dist = wedding - now;
      if (dist <= 0) {
        days.textContent = hours.textContent = minutes.textContent = seconds.textContent = '00';
        return;
      }
      days.textContent = String(Math.floor(dist / (1000*60*60*24))).padStart(2,'0');
      hours.textContent = String(Math.floor((dist/(1000*60*60))%24)).padStart(2,'0');
      minutes.textContent = String(Math.floor((dist/(1000*60))%60)).padStart(2,'0');
      seconds.textContent = String(Math.floor((dist/1000)%60)).padStart(2,'0');
    }
    update();
    setInterval(update, 1000);
  }
})();
