import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import StudentList from "./components/StudentList";
import "./styles/App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <StudentList />
      </div>
    </div>
  );
}

export default App;
