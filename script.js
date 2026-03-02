function reveal() {
    document.querySelectorAll('.reveal').forEach(el => {
        const windowHeight = window.innerHeight;
        const top = el.getBoundingClientRect().top;
        if (top < windowHeight - 100) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);
