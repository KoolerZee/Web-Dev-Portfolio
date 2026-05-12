document.addEventListener("DOMContentLoaded", () => {
    // Feedback form handling
    const feedbackForm = document.getElementById("feedbackForm");

    if (feedbackForm) {
        feedbackForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();

            if (subject && message) {
                alert("Thank you for your feedback!");
                feedbackForm.reset();
            } else {
                alert("Please fill out both the subject and message fields.");
            }
        });
    }

    // Navigation active link tracking
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove('active'));
                const activeLink = document.querySelector(`nav a[href="#${entry.target.id}"]`);
                if (activeLink) activeLink.classList.add('active');
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));

    // Scroll animations for elements
    const scrollAnimationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.visibility = 'visible';
            }
        });
    }, { threshold: 0.15 });

    // Observe all animated elements
    document.querySelectorAll('[class*="animate-"]').forEach(el => {
        scrollAnimationObserver.observe(el);
    });

    // Smooth hover effects to links
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('mouseenter', function() {
            if (this.classList.contains('cta-btn')) {
                this.style.transform = 'translateY(-3px)';
            }
        });
        
        link.addEventListener('mouseleave', function() {
            if (this.classList.contains('cta-btn')) {
                this.style.transform = 'translateY(0)';
            }
        });
    });
});

