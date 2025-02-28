import React from "react";
import StudentCard from "./components/StudentCard";
import "./styles/App.css"; // Import CSS

function App() {
  return (
    <div className="app-container">
      <StudentCard 
        image="/images/niju.jpg"
        name="Niranjan NN" 
        major="Information Technology" 
        year="2022 - 2026*" 
      />
    </div>
  );
}

export default App;
