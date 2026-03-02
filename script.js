// Scroll reveal
function reveal() {
  document.querySelectorAll('.reveal').forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// Light parallax effect
window.addEventListener("scroll", function() {
  const scrollY = window.scrollY;
  const hero = document.querySelector(".hero-content");
  hero.style.transform = "translateY(" + scrollY * 0.05 + "px)";
});
