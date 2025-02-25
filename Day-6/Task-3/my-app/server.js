// Import the Express module
const express = require('express');

// Create an instance of Express
const app = express();

// Define the port
const PORT = 3000;

// Hardcoded array of users
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
];

// Create a GET endpoint at /users/:id
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id); // Get 'id' from URL and convert to number
  const user = users.find((u) => u.id === userId); // Find user by id

  if (user) {
    res.json(user); // Return user if found
  } else {
    res.status(404).json({ message: 'User not found' }); // Handle user not found
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
