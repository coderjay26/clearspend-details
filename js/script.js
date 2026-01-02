
//dynamic year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.innerHTML = navMenu.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
}

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        // Toggle active class on button
        button.classList.toggle('active');
        
        // Get the answer element
        const answer = button.nextElementSibling;
        
        // Toggle answer visibility
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            answer.classList.remove('open');
        } else {
            answer.style.maxHeight = answer.scrollHeight + 'px';
            answer.classList.add('open');
        }
        
        // Close other FAQ items
        document.querySelectorAll('.faq-question').forEach(otherButton => {
            if (otherButton !== button) {
                otherButton.classList.remove('active');
                const otherAnswer = otherButton.nextElementSibling;
                otherAnswer.style.maxHeight = null;
                otherAnswer.classList.remove('open');
            }
        });
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll to top button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerHTML = '<i class="fas fa-chevron-up"></i>';
scrollToTopButton.className = 'scroll-to-top';
document.body.appendChild(scrollToTopButton);

scrollToTopButton.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background-color: var(--primary-color);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.2rem;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    opacity: 0;
    visibility: hidden;
    transform: translateY(20px);
`;

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.opacity = '1';
        scrollToTopButton.style.visibility = 'visible';
        scrollToTopButton.style.transform = 'translateY(0)';
    } else {
        scrollToTopButton.style.opacity = '0';
        scrollToTopButton.style.visibility = 'hidden';
        scrollToTopButton.style.transform = 'translateY(20px)';
    }
});

// Add hover effect to scroll button
scrollToTopButton.addEventListener('mouseenter', () => {
    scrollToTopButton.style.backgroundColor = 'var(--secondary-color)';
    scrollToTopButton.style.transform = 'translateY(-5px)';
});

scrollToTopButton.addEventListener('mouseleave', () => {
    scrollToTopButton.style.backgroundColor = 'var(--primary-color)';
    scrollToTopButton.style.transform = window.scrollY > 300 ? 'translateY(0)' : 'translateY(20px)';
});

// Form validation for contact form (if added later)
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

// Animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature-card, .screenshot-item, .download-btn');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for animated elements
document.querySelectorAll('.feature-card, .screenshot-item, .download-btn').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
    
    // Add animation delay to feature cards
    document.querySelectorAll('.feature-card').forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
});