// Import the Express module
const express = require('express');

// Create an instance of Express
const app = express();

// Define the port to run the server
const PORT = 3000;

// Hardcoded array of users
const users = [
  { id: 1, name: 'Visa' },
  { id: 2, name: 'Arjun' },
];

// Create a GET endpoint at /users
app.get('/users', (req, res) => {
  res.json(users); // Send the users array as JSON response
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
