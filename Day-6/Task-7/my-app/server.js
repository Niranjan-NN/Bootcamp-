const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());

const usersFilePath = path.join(__dirname, 'users.json');

// ✅ Create users.json if it doesn’t exist
if (!fs.existsSync(usersFilePath)) {
  fs.writeFileSync(usersFilePath, JSON.stringify([], null, 2), 'utf-8');
}

// Helper functions
const readUsersFromFile = () => JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const writeUsersToFile = (users) => fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2), 'utf-8');

// ✅ Input validation middleware
const validateUserInput = (req, res, next) => {
  const { id, name } = req.body;
  if (id === undefined || name === undefined) {
    return res.status(400).json({ error: 'Both "id" and "name" fields are required.' });
  }
  if (typeof id !== 'number') {
    return res.status(400).json({ error: '"id" must be a number.' });
  }
  if (typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({ error: '"name" must be a non-empty string.' });
  }
  next();
};

// 📝 GET /users - Get all users
app.get('/users', (req, res, next) => {
  try {
    const users = readUsersFromFile();
    res.json(users);
  } catch (err) {
    next(err); // Pass error to the error handler
  }
});

// 📝 GET /users/:id - Get user by ID
app.get('/users/:id', (req, res, next) => {
  try {
    const users = readUsersFromFile();
    const user = users.find((u) => u.id === parseInt(req.params.id, 10));
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }
    res.json(user);
  } catch (err) {
    next(err);
  }
});

// 📝 POST /users - Add a new user
app.post('/users', validateUserInput, (req, res, next) => {
  try {
    const users = readUsersFromFile();
    const newUser = req.body;

    if (users.some((user) => user.id === newUser.id)) {
      return res.status(409).json({ error: 'User with this ID already exists.' });
    }

    users.push(newUser);
    writeUsersToFile(users);
    res.status(201).json({ message: 'User added successfully.', user: newUser });
  } catch (err) {
    next(err);
  }
});

// 📝 DELETE /users/:id - Delete user by ID
app.delete('/users/:id', (req, res, next) => {
  try {
    const users = readUsersFromFile();
    const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id, 10));

    if (userIndex === -1) {
      return res.status(404).json({ error: 'User not found.' });
    }

    const deletedUser = users.splice(userIndex, 1)[0];
    writeUsersToFile(users);
    res.json({ message: 'User deleted successfully.', user: deletedUser });
  } catch (err) {
    next(err);
  }
});

// ❌ 404 Handler for invalid routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found.' });
});

// ⚠️ Global Error Handler
app.use((err, req, res, next) => {
  console.error('🔥 Error:', err.stack);
  res.status(500).json({ error: 'Internal Server Error. Please try again later.' });
});

// 🚀 Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
