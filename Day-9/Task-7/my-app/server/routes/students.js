const express = require("express");
const router = express.Router();
const Student = require("../models/student");

// Get all students
router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Search students
router.get("/search", async (req, res) => {
  const { query } = req.query;
  try {
    const students = await Student.find({
      $or: [{ name: new RegExp(query, "i") }, { year: new RegExp(query, "i") }],
    });
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
