document.addEventListener('DOMContentLoaded', function() {
    // Form validation script
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name === '' || email === '' || message === '') {
            alert('All fields are required.');
            event.preventDefault();
        } else if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            event.preventDefault();
        }
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }

    // Additional scripts for DHTML/DOM scripting
    // Example: Dynamic Date in Footer
    const currentYear = document.getElementById('currentYear');
    currentYear.textContent = new Date().getFullYear();
});
