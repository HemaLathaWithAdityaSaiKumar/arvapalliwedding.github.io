// ================= script.js =================
// Entry screen, music, countdown, and subtle enhancements

(function() {
  'use strict';

  // ----- ELEMENTS -----
  const enterBtn = document.getElementById('enter-btn');
  const entryScreen = document.getElementById('entry-screen');
  const music = document.getElementById('bg-music');

  if (music) music.volume = 0.2; // low background

  // ----- ENTRY WITH TELUGU BUTTON -----
  if (enterBtn && entryScreen) {
    enterBtn.addEventListener('click', async () => {
      // attempt music play (user interaction)
      if (music) {
        try {
          await music.play();
        } catch (e) {
          console.log('Audio play failed (expected if no music.mp3)');
        }
      }

      // hide entry screen
      entryScreen.classList.add('hide');

      // remove from DOM after transition
      setTimeout(() => {
        if (entryScreen.parentNode) entryScreen.remove();
      }, 800);
    });
  }

  // ----- COUNTDOWN (compact) -----
  const weddingDate = new Date('2026-03-08T02:38:00+05:30').getTime(); // Mar 8, 02:38 IST

  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  if (daysEl && hoursEl && minutesEl && secondsEl) {
    function updateCountdown() {
      const now = Date.now();
      const distance = weddingDate - now;

      if (distance <= 0) {
        daysEl.textContent = '00';
        hoursEl.textContent = '00';
        minutesEl.textContent = '00';
        secondsEl.textContent = '00';
        clearInterval(timer);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      daysEl.textContent = String(days).padStart(2, '0');
      hoursEl.textContent = String(hours).padStart(2, '0');
      minutesEl.textContent = String(minutes).padStart(2, '0');
      secondsEl.textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
  }

  // ----- small extra: preload portraits (optional) -----
  window.addEventListener('load', () => {
    // images already have loading="lazy" – fine
  });

})();
