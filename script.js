// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
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

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.skill-item, .project-card, .education-card, .timeline-item').forEach(el => {
    observer.observe(el);
});

// Contact form handling
// const contactForm = document.getElementById('contact-form');
// contactForm.addEventListener('submit', function(e) {
//     e.preventDefault();
    
//     // Get form data
//     const formData = new FormData(contactForm);
//     const name = formData.get('name');
//     const email = formData.get('email');
//     const subject = formData.get('subject');
//     const message = formData.get('message');
    
//     // Simple validation
//     if (!name || !email || !subject || !message) {
//         showNotification('Please fill in all fields', 'error');
//         return;
//     }
    
//     if (!isValidEmail(email)) {
//         showNotification('Please enter a valid email address', 'error');
//         return;
//     }
    
//     // Simulate form submission
//     showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
//     contactForm.reset();
// });

// Email validation function
// function isValidEmail(email) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }

// Notification system
// function showNotification(message, type) {
//     // Remove existing notifications
//     const existingNotification = document.querySelector('.notification');
//     if (existingNotification) {
//         existingNotification.remove();
//     }
    
//     // Create notification element
//     const notification = document.createElement('div');
//     notification.className = `notification ${type}`;
//     notification.innerHTML = `
//         <div class="notification-content">
//             <span>${message}</span>
//             <button class="notification-close">&times;</button>
//         </div>
//     `;
    
//     // Add styles
//     notification.style.cssText = `
//         position: fixed;
//         top: 20px;
//         right: 20px;
//         background: ${type === 'success' ? '#28a745' : '#dc3545'};
//         color: white;
//         padding: 1rem 1.5rem;
//         border-radius: 5px;
//         box-shadow: 0 4px 12px rgba(0,0,0,0.15);
//         z-index: 10000;
//         animation: slideInRight 0.3s ease;
//         max-width: 400px;
//     `;
    
//     // Add animation styles
//     const style = document.createElement('style');
//     style.textContent = `
//         @keyframes slideInRight {
//             from {
//                 transform: translateX(100%);
//                 opacity: 0;
//             }
//             to {
//                 transform: translateX(0);
//                 opacity: 1;
//             }
//         }
//         .notification-content {
//             display: flex;
//             justify-content: space-between;
//             align-items: center;
//             gap: 1rem;
//         }
//         .notification-close {
//             background: none;
//             border: none;
//             color: white;
//             font-size: 1.5rem;
//             cursor: pointer;
//             padding: 0;
//             line-height: 1;
//         }
//     `;
//     document.head.appendChild(style);
    
//     // Add to page
//     document.body.appendChild(notification);
    
//     // Close button functionality
//     const closeBtn = notification.querySelector('.notification-close');
//     closeBtn.addEventListener('click', () => {
//         notification.remove();
//     });
    
//     // Auto remove after 5 seconds
//     setTimeout(() => {
//         if (notification.parentNode) {
//             notification.remove();
//         }
//     }, 5000);
// }

// Typing animation for hero section
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 50);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Skills animation on scroll
const skillItems = document.querySelectorAll('.skill-item');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }, index * 100);
        }
    });
}, { threshold: 0.1 });

skillItems.forEach(item => {
    skillObserver.observe(item);
});

// Project cards hover effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Back to top button
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '↑';
backToTopButton.className = 'back-to-top';
backToTopButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #007bff;
    color: white;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
`;

document.body.appendChild(backToTopButton);

// Show/hide back to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.opacity = '1';
        backToTopButton.style.visibility = 'visible';
    } else {
        backToTopButton.style.opacity = '0';
        backToTopButton.style.visibility = 'hidden';
    }
});

// Back to top functionality
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add CSS for loading state
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    body:not(.loaded) {
        overflow: hidden;
    }
    
    body:not(.loaded)::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #fff;
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    body:not(.loaded)::after {
        content: '';
        width: 50px;
        height: 50px;
        border: 3px solid #f3f3f3;
        border-top: 3px solid #007bff;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10001;
    }
    
    @keyframes spin {
        0% { transform: translate(-50%, -50%) rotate(0deg); }
        100% { transform: translate(-50%, -50%) rotate(360deg); }
    }
`;
document.head.appendChild(loadingStyle);

console.log('Portfolio website loaded successfully! 🚀');