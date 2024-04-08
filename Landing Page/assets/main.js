// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight the current navigation link based on scroll position
window.addEventListener('scroll', function() {
    const currentSection = document.querySelector('section.active');
    const scrollPosition = window.scrollY;

    document.querySelectorAll('nav ul li a').forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Add active class to the section currently in view
document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;

    document.querySelectorAll('section').forEach(section => {
        if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
});
