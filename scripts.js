document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    const contactForm = document.querySelector('form');
    
    // Smooth scrolling function
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    window.addEventListener('scroll', function() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 50) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Initialize Typed.js for the tagline
    var typed = new Typed('#typed-text', {
        strings: ["Hey, I'm Samyak .."],
        typeSpeed: 50, // Adjust typing speed if needed
        showCursor: true, // Hide the cursor if desired
        startDelay: 500, // Start typing after a delay (in milliseconds)
        onComplete: function() {
            // Show the sub tagline with wave effect after the main tagline completes
            const waveText = document.getElementById('wave-text');
            waveText.style.display = 'block'; // Show the element
            waveText.style.opacity = '1'; // Ensure opacity for fade-in effect
        }
    });

    // Handle form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent actual form submission
        alert("Thanks, I will get back to you."); // Show the message
        contactForm.reset(); // Reset the form fields
    });
});
