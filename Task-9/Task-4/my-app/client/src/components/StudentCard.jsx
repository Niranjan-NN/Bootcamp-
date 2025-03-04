import React from "react";
import "../styles/StudentCard.css";

const StudentCard = ({ name, id, major, email, year }) => {
  return (
    <div className="student-card">
          {/* This is a JSX comment */}

      <img src="https://tse3.mm.bing.net/th?id=OIP.6NivW0DzXMg9URlZ2Ca_qAHaE7&pid=Api&P=0&h=180" alt="Student" className="student-img" />
      <h2>{name}</h2>
      <p><strong>Role:</strong> {major}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Year:</strong> {year}</p>
      <p><strong>ID:</strong> {id}</p>
    </div>
  );
};

export default StudentCard;
