// Function to validate email addresses and return a user message
function isValidEmail(email) {
    let message = `The email address ${email} is `;
    
    // Check if the email contains exactly one "@" character
    if (email.indexOf('@') === -1 || email.indexOf('@') !== email.lastIndexOf('@')) {
        message += 'invalid because it must contain exactly one "@" character.';
        return message;
    }

    // Check if the "@" character is not the first or last character in the email
    if (email.indexOf('@') === 0 || email.indexOf('@') === email.length - 1) {
        message += 'invalid because the "@" character cannot be the first or last character.';
        return message;
    }

    // Check if the email contains at least one "." character after the "@" character
    const domainPart = email.split('@')[1];
    if (domainPart.indexOf('.') === -1) {
        message += 'invalid because it must contain at least one "." character after the "@" character.';
        return message;
    }

    // Check if the "." character is not the first or last character after the "@" character
    if (domainPart.indexOf('.') === 0 || domainPart.indexOf('.') === domainPart.length - 1) {
        message += 'invalid because the "." character cannot be the first or last character after the "@" character.';
        return message;
    }

    // Check if the email does not contain spaces
    if (email.indexOf(' ') !== -1) {
        message += 'invalid because it cannot contain spaces.';
        return message;
    }

    // If all checks pass, the email is valid
    message += 'valid.';
    return message;
}

// Example usage
console.log(isValidEmail("test@example.com")); // The email address test@example.com is valid.
console.log(isValidEmail("invalid-email")); // The email address invalid-email is invalid because it must contain exactly one "@" character.
console.log(isValidEmail("another.test@domain.co")); // The email address another.test@domain.co is valid.