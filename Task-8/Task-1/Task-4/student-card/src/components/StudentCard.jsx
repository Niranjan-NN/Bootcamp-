import React from "react";
import "../styles/App.css"; // Import CSS

const StudentCard = ({ image, name, major, year }) => {
  return (
    <div className="student-card">
      {/* Image at the top center */}
      <img src={image} alt={name} className="student-image" />
      <h2 className="student-name">{name}</h2>
      <p className="student-major">{major}</p>
      <p className="student-year">Year: {year}</p>
    </div>
  );
};

export default StudentCard;
