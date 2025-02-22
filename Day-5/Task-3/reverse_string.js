// Get the command-line argument (excluding 'node' and filename)
const args = process.argv.slice(2);

// Join the arguments in case multiple words are provided
const inputString = args.join(" ");

// Check if input is provided
if (!inputString) {
    console.log("Please provide a string.");
} else {
    // Reverse the string
    const reversedString = inputString.split("").reverse().join("");
    console.log(reversedString);
}
