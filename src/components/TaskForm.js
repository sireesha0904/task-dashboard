// src/components/TaskForm.js
import React from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";
import "./TaskForm.css";

const TaskForm = ({ newTask, setNewTask }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.title && newTask.description) {
      dispatch(addTask(newTask));
      setNewTask({
        title: "",
        description: "",
        status: "Pending",
        dueDate: new Date(),
      });
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={newTask.title}
        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        placeholder="Task Title"
      />
      <input
        type="text"
        name="description"
        value={newTask.description}
        onChange={(e) =>
          setNewTask({ ...newTask, description: e.target.value })
        }
        placeholder="Task Description"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
