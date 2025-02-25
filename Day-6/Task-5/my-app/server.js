const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Sample user data
let users = [
  { id: 1, name: "Niju" },
  { id: 2, name: "dhagi" }
];

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to the API! Use /users or /users/:id for user data.");
});

// GET: Fetch all users
app.get("/users", (req, res) => {
  res.json(users);
});

// GET: Fetch a single user by ID
app.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (!user) return res.status(404).json({ error: "User not found" });

  res.json(user);
});

// POST: Add a new user
app.post("/users", (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: "Name is required" });

  const newUser = { id: users.length + 1, name };
  users.push(newUser);

  res.status(201).json({ message: "User added", user: newUser });
});

// PUT: Update an existing user
app.put("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (!user) return res.status(404).json({ error: "User not found" });

  const { name } = req.body;
  if (!name) return res.status(400).json({ error: "Name is required" });

  user.name = name;
  res.json({ message: "User updated", user });
});

// DELETE: Remove a user
app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === userId);

  if (userIndex === -1) return res.status(404).json({ error: "User not found" });

  users.splice(userIndex, 1);
  res.json({ message: "User deleted" });
});

// Handle invalid routes
app.use((req, res) => res.status(404).json({ error: "Route not found" }));

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});