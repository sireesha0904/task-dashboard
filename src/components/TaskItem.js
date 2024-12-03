import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleComplete } from "../redux/tasksSlice";
import "../Styles/TaskItem.css";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
      <button onClick={() => dispatch(toggleComplete(task.id))}>
        {task.status === "Completed" ? "Mark Pending" : "Mark Completed"}
      </button>
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
    </div>
  );
};

export default TaskItem;
