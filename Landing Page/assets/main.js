// main.js

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// // Parallax effect
// window.addEventListener('scroll', function() {
//     let parallax = document.querySelector('.parallax');
//     let scrollPosition = window.pageYOffset;
//     parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
// });
