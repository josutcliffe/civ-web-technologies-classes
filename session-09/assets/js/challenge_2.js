// Event handler function for form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const email = document.getElementById('email').value;
    const message = isValidEmail(email);

    console.log(message); // Log the message regardless of validity
});

// Function to validate email addresses and return a user message
function isValidEmail(email) {
    // Regular expression to validate email addresses
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // Use the test() method to check if the email matches the regex
    const isValid = regex.test(email);
    // Construct the message using a ternary operator
    const message = `The email address ${email} is ${isValid ? 'valid' : 'invalid'}.`;

    return message;
}