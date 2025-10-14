import React, { useState } from "react";
import TaskList from "./TaskList";
import "./App.css";

function App() {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState("Add a task to get started!");
  const [bgColor, setBgColor] = useState("white");

  const handleAddTask = () => {
    if (taskName.trim() === "") return;

    setTasks([...tasks, taskName]);
    setMessage(`Task added: ${taskName}!`);
    setTaskName("");
    setBgColor("lightblue");
  };

  return (
    <div className="container mt-5">
      <div className="card p-4" style={{ backgroundColor: bgColor }}>
        <h3 className="mb-4 text-center">React Task Planner</h3>
        
        <div className="mb-3">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter a task"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <button className="btn btn-primary w-100" onClick={handleAddTask}>
            Add Task
          </button>
        </div>

        {/* Child component */}
        <TaskList tasks={tasks} message={message} />
      </div>
    </div>
  );
}

export default App;
