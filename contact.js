document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Basic validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        // You can also add more advanced validation for the email field, e.g., using regular expressions.

        // Submit the form (you'd typically use AJAX or fetch to submit to a server)
        alert('Form submitted successfully!');
        contactForm.reset();
    });
});
