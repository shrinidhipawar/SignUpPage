document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm');
    const messageDiv = document.getElementById('message');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form from submitting normally

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const agree = document.getElementById('agree').checked;

            // Clear previous messages
            messageDiv.style.display = 'none';
            messageDiv.textContent = '';

            // Basic validation checks
            if (name === "" || email === "" || phone === "") {
                messageDiv.style.display = 'block';
                messageDiv.textContent = 'Please fill out all fields.';
                return false;
            }

            if (!agree) {
                messageDiv.style.display = 'block';
                messageDiv.textContent = 'You must agree to the terms and conditions.';
                return false;
            }

            // If all checks pass
            messageDiv.style.display = 'block';
            messageDiv.textContent = 'Sign Up Successful!';
        });
    } else {
        console.error("Form not found");
    }
});
