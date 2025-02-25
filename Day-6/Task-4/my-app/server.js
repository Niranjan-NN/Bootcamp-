// Import the Express module
const express = require('express');

// Create an instance of Express
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Define the port
const PORT = 3000;

// Hardcoded array of users
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
];

// POST endpoint at /users to add a new user
app.post('/users', (req, res) => {
  const newUser = req.body; // Get the new user data from request body

  if (!newUser.id || !newUser.name) {
    return res.status(400).json({ message: 'Please provide both id and name.' });
  }

  // Check if user with the same ID already exists
  const userExists = users.some((user) => user.id === newUser.id);

  if (userExists) {
    return res.status(409).json({ message: 'User with this ID already exists.' });
  }

  users.push(newUser); // Add the new user to the array
  res.status(201).json({ message: 'User added', user: newUser });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
