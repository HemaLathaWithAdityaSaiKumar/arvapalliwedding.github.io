// script.js

(function() {
  
  // Entry Screen
  const entryScreen = document.getElementById('entry-screen');
  const enterBtn = document.getElementById('enter-btn');
  const bgMusic = document.getElementById('bg-music');
  const body = document.body;
  
  // Initially prevent scrolling on main content
  body.classList.add('entry-active');
  
  if (bgMusic) bgMusic.volume = 0.2;
  
  if (enterBtn && entryScreen) {
    enterBtn.addEventListener('click', function() {
      if (bgMusic) bgMusic.play().catch(() => {});
      
      // Hide entry screen
      entryScreen.classList.add('hide');
      
      // Allow scrolling on main content
      body.classList.remove('entry-active');
      body.classList.add('main-active');
      
      setTimeout(() => {
        if (entryScreen.parentNode) {
          entryScreen.style.display = 'none';
        }
      }, 500);
    });
  }
  
  // Countdown
  const weddingDate = new Date('2026-03-08T02:38:00+05:30').getTime();
  
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');
  
  if (daysEl && hoursEl && minutesEl && secondsEl) {
    function updateCountdown() {
      const now = Date.now();
      const distance = weddingDate - now;
      
      if (distance < 0) {
        daysEl.textContent = '00';
        hoursEl.textContent = '00';
        minutesEl.textContent = '00';
        secondsEl.textContent = '00';
        return;
      }
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      daysEl.textContent = String(days).padStart(2, '0');
      hoursEl.textContent = String(hours).padStart(2, '0');
      minutesEl.textContent = String(minutes).padStart(2, '0');
      secondsEl.textContent = String(seconds).padStart(2, '0');
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }
  
  // Touch flip for mobile
  const portraitCards = document.querySelectorAll('.portrait-card');
  
  portraitCards.forEach(card => {
    let isFlipped = false;
    
    card.addEventListener('click', function() {
      const inner = this.querySelector('.portrait-inner');
      
      if (!isFlipped) {
        inner.style.transform = 'rotateY(180deg)';
        isFlipped = true;
      } else {
        inner.style.transform = 'rotateY(0deg)';
        isFlipped = false;
      }
    });
  });
  
})();
