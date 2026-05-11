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
});
