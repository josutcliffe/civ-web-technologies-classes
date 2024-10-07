// Challenge 2 Solution
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Your code goes here
for (const [index, number] of numbers.entries()) {
    if (number % 2 === 0) {
        console.log(`Number at index ${index} is even: ${number}`);
    } else {
        console.log(`Number at index ${index} is odd: ${number}`);
    }
}