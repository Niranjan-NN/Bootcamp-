const Task = require("../models/Task");

// ✅ GET all tasks
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: "Error fetching tasks" });
    }
};

// ✅ CREATE a new task
exports.createTask = async (req, res) => {
    try {
        const { title, description, dueDate, status } = req.body;
        if (!title) {
            return res.status(400).json({ error: "Title is required" });
        }

        const newTask = new Task({ title, description, dueDate, status: status || "Open" });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ error: "Error creating task" });
    }
};

// ✅ UPDATE a task
exports.updateTask = async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ error: "Error updating task" });
    }
};

// ✅ DELETE a task
exports.deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: "Task deleted" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting task" });
    }
};
