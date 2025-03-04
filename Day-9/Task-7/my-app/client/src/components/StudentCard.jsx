import React from "react";
import "../styles/StudentCard.css";

const StudentCard = ({ image, name, major, year }) => {
  // Function to determine background color based on year
  const getBackgroundColor = (year) => {
    if (year.includes("2022 - 2026")) return "green";  
    if (year.includes("2021 - 2025")) return "yellow"; 
    if (year.includes("2020 - 2024")) return "blue";   
    if (year.includes("2019 - 2023")) return "red";    
    return "gray"; 
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
