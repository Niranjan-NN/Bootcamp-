const express = require('express');
const router = express.Router();
const Student = require('../models/student');

// GET /students - Retrieve paginated students
router.get('/', async (req, res) => {
  try {
    let { page, limit } = req.query;
    page = parseInt(page) || 1;
    limit = parseInt(limit) || 3; // Default 3 students per page

    const totalStudents = await Student.countDocuments();
    const students = await Student.find()
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({
      students,
      currentPage: page,
      totalPages: Math.ceil(totalStudents / limit),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
