function isValidEmail(email) {
    // Use expression operators, the match method, a regex and strings to validate the email
    // Regular expression for validating an email address
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Use the match method to check if the email matches the regex
    const result = email.match(regex);
    // Return true if the result is not null, otherwise return false
    return result !== null;
  }
  
  // Test cases
console.log(isValidEmail("john@example.com")); // Should return true
console.log(isValidEmail("invalidemail@.com")); // Should return false
console.log(isValidEmail("nospaces@example.com")); // Should return true
