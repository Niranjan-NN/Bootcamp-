import React from "react";
import StudentList from "./components/StudentList";
import "./styles/App.css";
import niju from "./assets/niju.jpeg"; 
import kaviya from "./assets/kaviya.jpeg"; 
import visaa from "./assets/visaa.jpeg"; 

function App() {
  const students = [
    { image: niju, name: "Niranjan NN", major: "Information Technology", year: "2022 - 2026*" },
    { image: kaviya, name: "Kaviya M", major: "Information Technology", year: "2021 - 2025*" },
    { image: visaa, name: "Visalachi N", major: "Information Technology", year: "2020 - 2024*" },
  ];

  return (
    <div className="app-container">
      <h1 className="title">Student List</h1>
      <StudentList students={students} />
    </div>
  );
}

export default App;
