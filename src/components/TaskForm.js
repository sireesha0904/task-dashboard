import React from "react";
import "../Styles/TaskForm.css";

const TaskForm = () => {
  // Form logic here
  return (
    <div className="task-form">
      <h3>Add New Task</h3>
      <form>
        <label>Task</label>
        <input type="text" placeholder="Enter task title" />

        <label>Description</label>
        <textarea placeholder="Enter task description"></textarea>

        <label>Due Date</label>
        <input type="date" />

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
