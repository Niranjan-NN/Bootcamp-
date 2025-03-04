import React from "react";
import StudentList from "./components/StudentList";
import "./styles/StudentList.css";

function App() {
  return (
    <div className="app-container">
      <h1>Student Information</h1>
      <StudentList />
    </div>
  );
}

export default App;
