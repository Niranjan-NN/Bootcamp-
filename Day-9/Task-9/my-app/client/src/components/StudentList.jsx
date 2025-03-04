import React, { useEffect, useState } from "react";
import StudentCard from "./StudentCard";
import axios from "axios";
import "../styles/StudentList.css";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/students")
      .then((res) => setStudents(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="student-list">
      {students.map((student) => (
        <StudentCard 
          key={student._id} 
          image={student.image} 
          name={student.name} 
          major={student.major} 
          year={student.year} 
        />
      ))}
    </div>
  );
};

export default StudentList;
