// script.js
// Simple fade-in animation for elements on scroll to make it look premium
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    // Start with things hidden
    const elementsToAnimate = document.querySelectorAll('.event-card, .section-header');
    
    elementsToAnimate.forEach((el, index) => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.8s ease, transform 0.8s ease`;
        el.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(el);
    });

    // Hero animation sequence on load
    const heroTitle = document.querySelector('.hero h1');
    const heroDesc = document.querySelector('.hero p');
    const heroBtn = document.querySelector('.hero .btn-primary');

    [heroTitle, heroDesc, heroBtn].forEach(el => {
        if (el) {
            el.style.opacity = 0;
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 1s ease, transform 1s ease';
        }
    });

    setTimeout(() => {
        if (heroTitle) {
            heroTitle.style.opacity = 1;
            heroTitle.style.transform = 'translateY(0)';
        }
    }, 100);

    setTimeout(() => {
        if (heroDesc) {
            heroDesc.style.opacity = 1;
            heroDesc.style.transform = 'translateY(0)';
        }
    }, 400);

    setTimeout(() => {
        if (heroBtn) {
            heroBtn.style.opacity = 1;
            heroBtn.style.transform = 'translateY(0)';
        }
    }, 700);
});
