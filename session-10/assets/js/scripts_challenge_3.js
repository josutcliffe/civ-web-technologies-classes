function isValidEmail(email) {
    // Initialize a variable to store feedback
    let feedback = '';

    // Check for spaces in the email
    if (email.includes(' ')) {
        feedback += 'Email should not contain spaces. ';
    }

    // Check for the "@" symbol
    if (!email.includes('@')) {
        feedback += 'Email should contain an "@" symbol. ';
    } else {
        // Check for multiple "@" symbols
        const parts = email.split('@');
        if (parts.length !== 2) {
            feedback += 'Email should contain exactly one "@" symbol. ';
        } else {
            const localPart = parts[0];
            const domainPart = parts[1];

            // Check for "@" at the start or end
            if (localPart === '' || domainPart === '') {
                feedback += 'The "@" symbol should not be at the start or end of the email. ';
            }

            // Check for "." in the domain part
            if (!domainPart.includes('.')) {
                feedback += 'The domain part should contain at least one "." character. ';
            } else {
                const domainParts = domainPart.split('.');
                if (domainParts[0] === '' || domainParts[domainParts.length - 1] === '') {
                    feedback += 'The "." character should not be at the start or end of the domain part. ';
                }
            }
        }
    }

    // Determine the final validation result
    if (feedback === '') {
        feedback = 'Email is valid.';
    }

    return feedback;
}

// Test cases
console.log(isValidEmail("john@example.com"));
console.log(isValidEmail("invalidemail@.com"));
console.log(isValidEmail("no spaces@example.com"));
    