import React, { useState } from "react";
import StudentCard from "./StudentCard";

const StudentList = ({ students }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter students based on search term
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="student-list-container">
      <input
        type="text"
        placeholder="Search students..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <div className="student-list">
        {filteredStudents.map((student, index) => (
          <StudentCard 
            key={index}
            image={student.image}
            name={student.name}
            major={student.major}
            year={student.year}
          />
        ))}
      </div>
    </div>
  );
};

export default StudentList;
