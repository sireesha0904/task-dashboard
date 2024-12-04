import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";

const TaskForm = ({ editingTask, setEditingTask }) => {
  const [title, setTitle] = useState(editingTask?.title || "");
  const [description, setDescription] = useState(
    editingTask?.description || ""
  );
  const [dueDate, setDueDate] = useState(editingTask?.dueDate || new Date());
  const [status, setStatus] = useState(editingTask?.status || "Pending");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert("Task title is required!");
      return;
    }

    const newTask = {
      id: editingTask?.id || Date.now(),
      title,
      description,
      dueDate: dueDate.toISOString().split("T")[0],
      status,
    };

    dispatch(addTask(newTask));
    setTitle("");
    setDescription("");
    setDueDate(new Date());
    setStatus("Pending");
    if (setEditingTask) setEditingTask(null);
  };

  return (
    <div className="task-form">
      <h3>{editingTask ? "Edit Task" : "Add Task"}</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Task</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task title"
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Task description"
          />
        </div>
        <div>
          <label>Due Date</label>
          <DatePicker
            selected={dueDate}
            onChange={(date) => setDueDate(date)}
            dateFormat="yyyy-MM-dd"
          />
        </div>
        <div>
          <label>Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <button type="submit">
          {editingTask ? "Update Task" : "Add Task"}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
