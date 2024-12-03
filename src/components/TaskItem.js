import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleComplete } from "../redux/tasksSlice";
import "../Styles/TaskItem.css";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggleComplete = () => {
    dispatch(toggleComplete(task.id));
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
      <button onClick={handleToggleComplete}>
        {task.status === "Completed" ? "Mark as Pending" : "Mark as Completed"}
      </button>
      <button onClick={handleDeleteTask}>Delete Task</button>
    </div>
  );
};

export default TaskItem;
