import React, { useState, useEffect } from "react";
import StudentCard from "./StudentCard";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchStudents();
  }, [page]);

  const fetchStudents = async () => {
    try {
      const response = await fetch(`http://localhost:3000/students?page=${page}&limit=3`);
      const data = await response.json();
      setStudents(data.students);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const nextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="student-list-container">
      {/* Student List */}
      <div className="student-list">
        {students.map((student, index) => (
          <StudentCard key={index} {...student} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination-controls">
        <button onClick={prevPage} disabled={page === 1}>
          Previous
        </button>
        <span> Page {page} of {totalPages} </span>
        <button onClick={nextPage} disabled={page === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default StudentList;
