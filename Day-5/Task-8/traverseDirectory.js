// traverseDirectory.js

const fs = require('fs');         // File system module
const path = require('path');     // Path module for handling file paths

// Recursive function to traverse directories
function traverseDirectory(dirPath) {
  // Read contents of the current directory
  const items = fs.readdirSync(dirPath);

  items.forEach(item => {
    const fullPath = path.join(dirPath, item); // Absolute path

    const stats = fs.statSync(fullPath);       // Get file/directory stats

    if (stats.isDirectory()) {
      console.log(`📁 Directory: ${fullPath}`);
      traverseDirectory(fullPath);             // Recursively traverse subdirectory
    } else if (stats.isFile()) {
      console.log(`📄 File: ${fullPath}`);
    }
  });
}

// Get directory from command-line argument or default to current directory
const dir = process.argv[2] || __dirname;

console.log(`🔍 Traversing directory: ${dir}\n`);
traverseDirectory(dir);
