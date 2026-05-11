document.addEventListener("DOMContentLoaded", () => {
    
    // Prevent default form submission to stop page reload
    const feedbackForm = document.getElementById("feedbackForm");
    
    if(feedbackForm) {
        feedbackForm.addEventListener("submit", function(event) {
            event.preventDefault();
            
            // You can add your form handling logic here (like sending to an API)
            const subject = document.getElementById("subject").value;
            const message = document.getElementById("message").value;
            
            if(subject && message) {
                alert("Thank you for your feedback!");
                feedbackForm.reset();
            } else {
                alert("Please fill out both the subject and message fields.");
            }
        });
    }

});