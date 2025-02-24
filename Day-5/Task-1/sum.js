// Get command-line arguments (excluding 'node' and filename)
const args = process.argv.slice(2);

// Convert arguments to numbers
const num1 = parseFloat(args[0]);
const num2 = parseFloat(args[1]);

// Check if both numbers are valid
if (isNaN(num1) || isNaN(num2)) {
    console.log("Please provide two valid numbers.");
} else {
    console.log(`The sum is: ${num1 + num2}`);
}
