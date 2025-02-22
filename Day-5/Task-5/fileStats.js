// fileStats.js

const fs = require('fs'); // Built-in module to work with the file system

// Get the file path from command-line arguments
const args = process.argv.slice(2);

// Check if the user provided a file path
if (args.length !== 1) {
  console.log("Please provide exactly one file path.");
  process.exit(1); // Exit with an error code if the argument is missing
}

const filePath = args[0];

// Check if the file exists
if (!fs.existsSync(filePath)) {
  console.log("The specified file does not exist.");
  process.exit(1);
}

// Get file statistics
fs.stat(filePath, (err, stats) => {
  if (err) {
    console.error("Error retrieving file stats:", err.message);
    process.exit(1);
  }

  console.log(`📄 File Statistics for: ${filePath}`);
  console.log(`Size: ${stats.size} bytes`);
  console.log(`Created On: ${stats.birthtime}`);
  console.log(`Last Modified: ${stats.mtime}`);
});
