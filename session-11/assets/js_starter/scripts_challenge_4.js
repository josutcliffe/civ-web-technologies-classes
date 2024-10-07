// Challenge 4 Starter
const eventLinks = document.querySelectorAll('.sidebar ul li a');

function logEvent(eventDetails) {
    // Your code goes here
    // Log the event details in uppercase
    console.log(eventDetails.innerHTML.toUpperCase());
}

// Your code goes here
// Use a for loop to loop through the event links array created using entries()
for (const [index, eventLink] of eventLinks.entries()) {
    logEvent(eventLink);
}