import React, { useState } from "react";
import StudentCard from "./StudentCard";

const StudentList = ({ initialStudents }) => {
  const [students, setStudents] = useState(initialStudents);
  const [newStudent, setNewStudent] = useState({
    image: "",
    name: "",
    major: "",
    year: "",
  });

  // Function to handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  // Function to add a student
  const addStudent = () => {
    if (newStudent.name && newStudent.major && newStudent.year) {
      setStudents([...students, newStudent]);
      setNewStudent({ image: "", name: "", major: "", year: "" }); // Reset form
    }
  };

  // Function to remove a student
  const removeStudent = (index) => {
    setStudents(students.filter((_, i) => i !== index));
  };

  return (
    <div className="student-list-container">
      {/* Add Student Form */}
      <div className="add-student-form">
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newStudent.image}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newStudent.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="major"
          placeholder="Major"
          value={newStudent.major}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="year"
          placeholder="Year (e.g., 2022 - 2026)"
          value={newStudent.year}
          onChange={handleInputChange}
        />
        <button onClick={addStudent}>Add Student</button>
      </div>

      {/* Student List */}
      <div className="student-list">
        {students.map((student, index) => (
          <div key={index} className="student-card-container">
            <StudentCard
              image={student.image}
              name={student.name}
              major={student.major}
              year={student.year}
            />
            <button className="remove-btn" onClick={() => removeStudent(index)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentList;
