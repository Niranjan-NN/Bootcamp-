import React from "react";
import { motion } from "framer-motion";

export default function TaskList({ tasks, setTasks }) {
  const toggleStatus = (index) => {
    setTasks(prev =>
      prev.map((task, i) => i === index ? { ...task, status: task.status === "Open" ? "Completed" : "Open" } : task)
    );
  };

  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <motion.div
          key={index}
          className={`task ${task.status === "Completed" ? "completed" : ""}`}
          whileHover={{ scale: 1.02 }}
          onClick={() => toggleStatus(index)}
        >
          <p>{task.title}</p>
          <button onClick={() => setTasks(tasks.filter((_, i) => i !== index))}>
            ❌
          </button>
        </motion.div>
      ))}
    </div>
  );
}
