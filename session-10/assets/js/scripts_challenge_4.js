function isValidEmail(email) {
  // Initialise a variable to store feedback
  let feedback = '';

  // Check for basic email format
  switch (true) {
      case !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/):
          feedback += 'Email should follow the basic format. ';
          break;
  }

  // Check for spaces in the email
  switch (true) {
      case email.includes(' '):
          feedback += 'Email should not contain spaces. ';
          break;
  }

  // Check for the "@" symbol
  switch (true) {
      case !email.includes('@'):
          feedback += 'Email should contain an "@" symbol. ';
          break;
      default:
          // Check for multiple "@" symbols
          const parts = email.split('@');
          switch (true) {
              case parts.length !== 2:
                  feedback += 'Email should contain exactly one "@" symbol. ';
                  break;
              default:
                  const localPart = parts[0];
                  const domainPart = parts[1];

                  // Check for "@" at the start or end
                  switch (true) {
                      case localPart === '' || domainPart === '':
                          feedback += 'The "@" symbol should not be at the start or end of the email. ';
                          break;
                  }

                  // Check for "." in the domain part
                  switch (true) {
                      case !domainPart.includes('.'):
                          feedback += 'The domain part should contain at least one "." character. ';
                          break;
                      default:
                          const domainParts = domainPart.split('.');
                          switch (true) {
                              case domainParts[0] === '' || domainParts[domainParts.length - 1] === '':
                                  feedback += 'The "." character should not be at the start or end of the domain part. ';
                                  break;
                          }
                  }
          }
  }

  // Determine the final validation result & return the feedback message
  if (feedback === '') {
      return 'Email is valid.';
  } else {
      return `Invalid email: ${feedback}`;
  }
}
  
  // Test cases
  console.log(isValidEmail("john@example.com"));
  console.log(isValidEmail("invalid email@.com"));
  console.log(isValidEmail("no spaces@example.com"));
  console.log(isValidEmail("bademail@.com"));
  console.log(isValidEmail("@invalid.com"));
  console.log(isValidEmail("extra@@invalid.com"));
  