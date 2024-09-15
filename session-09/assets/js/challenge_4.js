// Function to validate email addresses and return a user message
function isValidEmail(email) {
    let message = `The email address ${email} is `;
    const atIndex = email.indexOf('@');
    const lastAtIndex = email.lastIndexOf('@');
    const domainPart = email.split('@')[1];
    const dotIndex = domainPart ? domainPart.indexOf('.') : -1;

    switch (true) {
        case (atIndex === -1 || atIndex !== lastAtIndex):
            message += 'invalid because it must contain exactly one "@" character.';
            break;
        case (atIndex === 0 || atIndex === email.length - 1):
            message += 'invalid because the "@" character cannot be the first or last character.';
            break;
        case (dotIndex === -1):
            message += 'invalid because it must contain at least one "." character after the "@" character.';
            break;
        case (dotIndex === 0 || dotIndex === domainPart.length - 1):
            message += 'invalid because the "." character cannot be the first or last character after the "@" character.';
            break;
        case (email.indexOf(' ') !== -1):
            message += 'invalid because it cannot contain spaces.';
            break;
        default:
            message += 'valid.';
    }

    return message;
}

// Example usage
console.log(isValidEmail("test@example.com")); // The email address test@example.com is valid.
console.log(isValidEmail("invalid-email")); // The email address invalid-email is invalid because it must contain exactly one "@" character.
console.log(isValidEmail("another.test@domain.co")); // The email address another.test@domain.co is valid.