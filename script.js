// script.js - SIMPLE & RELIABLE

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
    });
  }
  
  // Countdown
  const weddingDate = new Date('2026-03-08T02:38:00+05:30').getTime();
  
  function updateCountdown() {
    const now = Date.now();
    const distance = weddingDate - now;
    
    if (distance < 0) {
      document.getElementById('days').textContent = '00';
      document.getElementById('hours').textContent = '00';
      document.getElementById('minutes').textContent = '00';
      document.getElementById('seconds').textContent = '00';
      return;
    }
    
    document.getElementById('days').textContent = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
    document.getElementById('hours').textContent = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    document.getElementById('minutes').textContent = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    document.getElementById('seconds').textContent = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');
  }
  
  updateCountdown();
  setInterval(updateCountdown, 1000);
  
  // Simple flip
  document.querySelectorAll('.portrait-card').forEach(card => {
    card.addEventListener('click', function() {
      const inner = this.querySelector('.portrait-inner');
      if (inner.style.transform === 'rotateY(180deg)') {
        inner.style.transform = 'rotateY(0deg)';
      } else {
        inner.style.transform = 'rotateY(180deg)';
      }
    });
  });
  
})();
