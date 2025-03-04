import React from "react";
import "../styles/StudentCard.css";

const StudentCard = ({ image, name, major, year }) => {
  return (
    <div className="student-card">
      <img src={image} alt={name} className="student-image" />
      <h2>{name}</h2>
      <p><strong>Major:</strong> {major}</p>
      <p><strong>Year:</strong> {year}</p>
    </div>
  );
};

export default StudentCard;
