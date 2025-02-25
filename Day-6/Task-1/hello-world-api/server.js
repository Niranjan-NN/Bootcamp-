// Import the express module
const express = require('express');

// Create an instance of express
const app = express();

// Define the port to run the server
const PORT = 3000;

// Set up a GET route for the root URL
app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
