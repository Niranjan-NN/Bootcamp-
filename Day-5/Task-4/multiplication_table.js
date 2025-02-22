// Get the command-line argument (excluding 'node' and filename)
const args = process.argv.slice(2);

// Convert the argument to a number
const num = parseInt(args[0]);

// Check if the number is valid
if (isNaN(num)) {
    console.log("Please provide a valid number.");
} else {
    // Print the multiplication table up to 10
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
