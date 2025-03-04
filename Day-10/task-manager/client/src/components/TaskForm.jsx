import React, { useState } from "react";
import { motion } from "framer-motion";

export default function TaskForm({ setTasks }) {
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim()) {
      setTasks(prev => [...prev, { title: task, status: "Open" }]);
      setTask("");
    }
  };

  return (
    <motion.div 
      className="task-form"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <input
        type="text"
        placeholder="Enter a task..."
        className="task-input"
        value={task}
        onChange={e => setTask(e.target.value)}
      />
      <motion.button
        onClick={addTask}
        className="add-btn"
        whileHover={{ scale: 1.1 }}
      >
        Add
      </motion.button>
    </motion.div>
  );
}
