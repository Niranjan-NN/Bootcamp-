import React from "react";
import "../styles/StudentCard.css";

const StudentCard = ({ image, name, major, year }) => {
  // Function to determine background color based on year
  const getBackgroundColor = (year) => {
    if (year.includes("2022 - 2026")) return "#4CAF50"; // Green (Freshman)
    if (year.includes("2021 - 2025")) return "#FFEB3B"; // Yellow (Sophomore)
    if (year.includes("2020 - 2024")) return "#2196F3"; // Blue (Junior)
    if (year.includes("2019 - 2023")) return "#F44336"; // Red (Senior)
    return "#9E9E9E"; // Gray (Unknown year)
  };

  return (
    <div className="student-card" style={{ backgroundColor: getBackgroundColor(year) }}>
      <img src={image} alt={name} className="student-image" />
      <h2>{name}</h2>
      <p><strong>Major:</strong> {major}</p>
      <p><strong>Year:</strong> {year}</p>
    </div>
  );
};

export default StudentCard;
