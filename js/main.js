// ============================================
// eSports Portal - Main JavaScript
// ============================================

// Countdown Timer
function initCountdown() {
    const countdownElements = document.querySelectorAll('.countdown-item');
    if (countdownElements.length === 0) return;

    // Set target date (example: 30 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            countdownElements.forEach(el => {
                el.querySelector('.countdown-number').textContent = '00';
            });
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElements.forEach(el => {
            const label = el.querySelector('.countdown-label').textContent.toLowerCase();
            if (label.includes('day')) {
                el.querySelector('.countdown-number').textContent = String(days).padStart(2, '0');
            } else if (label.includes('hour')) {
                el.querySelector('.countdown-number').textContent = String(hours).padStart(2, '0');
            } else if (label.includes('min')) {
                el.querySelector('.countdown-number').textContent = String(minutes).padStart(2, '0');
            } else if (label.includes('sec')) {
                el.querySelector('.countdown-number').textContent = String(seconds).padStart(2, '0');
            }
        });
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Tournament Slider
function initTournamentSlider() {
    const slider = document.querySelector('.tournament-slider');
    if (!slider) return;

    let currentIndex = 0;
    const cards = slider.querySelectorAll('.tournament-card');
    const totalCards = cards.length;

    if (totalCards <= 1) return;

    function showCard(index) {
        cards.forEach((card, i) => {
            card.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextCard() {
        currentIndex = (currentIndex + 1) % totalCards;
        showCard(currentIndex);
    }

    // Auto-advance slider
    if (totalCards > 1) {
        setInterval(nextCard, 5000);
        showCard(0);
    }
}

// Mobile Menu Toggle
function initMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
}

// Smooth Scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Form Validation
function initFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            let isValid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#ff3366';
                } else {
                    input.style.borderColor = 'rgba(0, 255, 136, 0.3)';
                }
            });

            if (isValid) {
                // Show success message
                alert('Form submitted successfully!');
                form.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    });
}

// Modal Handler
function initModal() {
    const modalTriggers = document.querySelectorAll('[data-modal]');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close');

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'block';
            }
        });
    });

    closeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Close on outside click
    window.addEventListener('click', function(e) {
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
}

// Search Functionality
function initSearch() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const searchableItems = document.querySelectorAll('[data-searchable]');

        searchableItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
}

// Lazy Load Images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', function() {
    initCountdown();
    initTournamentSlider();
    initMobileMenu();
    initSmoothScroll();
    initFormValidation();
    initModal();
    initSearch();
    initLazyLoading();
});

// Scroll to Top Button
window.addEventListener('scroll', function() {
    const scrollBtn = document.getElementById('scroll-top');
    if (scrollBtn) {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

