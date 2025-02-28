import React from "react";
import StudentCard from "./StudentCard";
import "../styles/StudentCard.css";

const StudentList = ({ students }) => {
  return (
    <div className="student-list">
      {students.map((student, index) => (
        <StudentCard 
          key={index}
          image={student.image}
          name={student.name}
          major={student.major}
          year={student.year}
        />
      ))}
    </div>
  );
};

export default StudentList;
