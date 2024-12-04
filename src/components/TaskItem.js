import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleComplete } from "../redux/tasksSlice";

const TaskItem = ({ task, onEdit }) => {
  const dispatch = useDispatch();

  return (
    <div className="task-item">
      <div>
        <h4>{task.title}</h4>
        <p>{task.description}</p>
        <p>Due: {task.dueDate}</p>
        <p>Status: {task.status}</p>
      </div>
      <div className="task-actions">
        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
        <button onClick={() => dispatch(toggleComplete(task.id))}>
          {task.status === "Completed" ? "Mark Pending" : "Mark Completed"}
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
