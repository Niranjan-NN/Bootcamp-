const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());

const usersFilePath = path.join(__dirname, 'users.json');

// ✅ Create users.json if it doesn't exist
if (!fs.existsSync(usersFilePath)) {
  fs.writeFileSync(usersFilePath, JSON.stringify([], null, 2), 'utf-8');
}

// Read users from the file
const readUsersFromFile = () => JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

// Write users to the file
const writeUsersToFile = (users) => fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2), 'utf-8');

const validateUserInput = (req, res, next) => {
  const { id, name } = req.body;
  if (id === undefined || name === undefined) return res.status(400).json({ message: 'Both "id" and "name" fields are required.' });
  if (typeof id !== 'number') return res.status(400).json({ message: '"id" must be a number.' });
  if (typeof name !== 'string' || name.trim() === '') return res.status(400).json({ message: '"name" must be a non-empty string.' });
  next();
};

app.post('/users', validateUserInput, (req, res) => {
  const users = readUsersFromFile();
  const newUser = req.body;

  if (users.some((user) => user.id === newUser.id)) {
    return res.status(409).json({ message: 'User with this ID already exists.' });
  }

  users.push(newUser);
  writeUsersToFile(users);
  res.status(201).json({ message: 'User added successfully.', user: newUser });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
