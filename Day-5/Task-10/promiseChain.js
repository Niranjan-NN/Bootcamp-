const fs = require('fs').promises;

// 1️⃣ Read the file
const readFile = (filePath) => {
  return fs.readFile(filePath, 'utf-8');
};

// 2️⃣ Process the content (convert to uppercase)
const processContent = (content) => {
  return content.toUpperCase();
};

// 3️⃣ Write to a new file
const writeFile = (filePath, data) => {
  return fs.writeFile(filePath, data);
};

// 🚀 Chain the promises
readFile('input.txt')
  .then((content) => {
    console.log('✅ File read successfully.');
    const processed = processContent(content);
    console.log('🔄 Content processed.');
    return writeFile('output.txt', processed);
  })
  .then(() => {
    console.log('📄 Processed content written to output.txt.');
  })
  .catch((err) => {
    console.error('❌ Error:', err.message);
  });
