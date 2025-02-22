// Get the command-line argument (excluding 'node' and filename)
const args = process.argv.slice(2);

// Convert the argument to a number
const num = parseInt(args[0]);

// Check if the number is valid
if (isNaN(num)) {
    console.log("Please provide a valid number.");
} else {
    // Check if even or odd
    if (num % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}
