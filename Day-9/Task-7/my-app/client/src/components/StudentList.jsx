import React, { useState } from "react";
import StudentCard from "./StudentCard";
import "../styles/StudentList.css";

const StudentList = ({ initialStudents }) => {
  const [students, setStudents] = useState(initialStudents);
  const [searchQuery, setSearchQuery] = useState("");

  // Function to filter students based on search query
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.year.includes(searchQuery)
  );

  return (
    <div className="student-list-container">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by Name or Year..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />

      {/* Student List */}
      <div className="student-list">
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student, index) => (
            <StudentCard key={index} {...student} />
          ))
        ) : (
          <p>No students found</p>
        )}
      </div>
    </div>
  );
};

export default StudentList;
