import React from "react";
import "./App.css";

const StudentName = ({ name }) => {
  return (
    <div className="student-container">
      Student Name: {name}
    </div>
  );
};

export default StudentName;
