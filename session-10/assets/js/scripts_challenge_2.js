function isValidEmail(email) {
    // Regular expression for validating an email address
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Use the match method to check if the email matches the regex
    const result = email.match(regex);
    // Construct the message
    let message = `The email address "${email}" `;
    message += result ? `is valid.` : `is not valid.`;
    return message;
  }
  
  // Test cases
console.log(isValidEmail("john@example.com")); // Should return true
console.log(isValidEmail("invalidemail@.com")); // Should return false
console.log(isValidEmail("nospaces@example.com")); // Should return true
