document.addEventListener("DOMContentLoaded", () => {
    const feedbackForm = document.getElementById("feedbackForm");

    if (!feedbackForm) {
        return;
    }

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
});
