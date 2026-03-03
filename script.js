// script.js - Clean and functional

(function() {
  
  // Entry Screen
  const enterBtn = document.getElementById('enter-btn');
  const entryScreen = document.getElementById('entry-screen');
  const bgMusic = document.getElementById('bg-music');
  
  if (bgMusic) {
    bgMusic.volume = 0.2;
  }
  
  if (enterBtn && entryScreen) {
    enterBtn.addEventListener('click', function() {
      // Try to play music
      if (bgMusic) {
        bgMusic.play().catch(function(error) {
          console.log('Audio play failed:', error);
        });
      }
      
      // Hide entry screen
      entryScreen.classList.add('hide');
      
      // Remove from DOM after animation
      setTimeout(function() {
        if (entryScreen.parentNode) {
          entryScreen.style.display = 'none';
        }
      }, 500);
    });
  }
  
  // Countdown Timer
  const weddingDate = new Date('2026-03-08T02:38:00+05:30').getTime();
  
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');
  
  if (daysEl && hoursEl && minutesEl && secondsEl) {
    
    function updateCountdown() {
      const now = new Date().getTime();
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
      
      daysEl.textContent = days.toString().padStart(2, '0');
      hoursEl.textContent = hours.toString().padStart(2, '0');
      minutesEl.textContent = minutes.toString().padStart(2, '0');
      secondsEl.textContent = seconds.toString().padStart(2, '0');
    }
    
    // Initial call
    updateCountdown();
    
    // Update every second
    setInterval(updateCountdown, 1000);
  }
  
})();
