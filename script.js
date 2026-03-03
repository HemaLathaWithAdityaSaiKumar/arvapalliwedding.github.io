// script.js

(function() {
  
  // Entry Screen
  const entryScreen = document.getElementById('entry-screen');
  const enterBtn = document.getElementById('enter-btn');
  const bgMusic = document.getElementById('bg-music');
  
  if (bgMusic) bgMusic.volume = 0.2;
  
  if (enterBtn && entryScreen) {
    enterBtn.addEventListener('click', function() {
      if (bgMusic) bgMusic.play().catch(() => {});
      entryScreen.classList.add('hide');
      setTimeout(() => {
        if (entryScreen.parentNode) entryScreen.style.display = 'none';
      }, 500);
    });
  }
  
  // Countdown
  const weddingDate = new Date('2026-03-08T02:38:00+05:30').getTime();
  
  const days = document.getElementById('days');
  const hours = document.getElementById('hours');
  const minutes = document.getElementById('minutes');
  const seconds = document.getElementById('seconds');
  
  if (days && hours && minutes && seconds) {
    function updateCountdown() {
      const now = Date.now();
      const dist = weddingDate - now;
      
      if (dist < 0) {
        days.textContent = hours.textContent = minutes.textContent = seconds.textContent = '00';
        return;
      }
      
      days.textContent = String(Math.floor(dist / (1000*60*60*24))).padStart(2,'0');
      hours.textContent = String(Math.floor((dist/(1000*60*60))%24)).padStart(2,'0');
      minutes.textContent = String(Math.floor((dist/(1000*60))%60)).padStart(2,'0');
      seconds.textContent = String(Math.floor((dist/1000)%60)).padStart(2,'0');
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }
  
})();
