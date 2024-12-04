import React from "react";
import "../Styles/TaskItem.css";

const TaskItem = ({ task }) => {
  return (
    <div className="task-item">
      <div>
        <h4>{task.title}</h4>
        <p>{task.description}</p>
        <p>Due: {task.dueDate}</p>
        <p>Status: {task.status}</p>
      </div>
      <div className="task-actions">
        <button>Edit</button>
        <button>Delete</button>
        <button>
          {task.status === "Completed" ? "Mark Pending" : "Mark Completed"}
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
