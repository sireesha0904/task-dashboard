import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TaskItem from "../components/TaskItem";
import { addTask } from "../redux/tasksSlice";
import { selectTasks, selectFilter } from "../redux/tasksSlice";
import "../Styles/TaskDashboard.css";

const TaskDashboard = ({ searchTerm }) => {
  const tasks = useSelector(selectTasks);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    status: "Pending",
    dueDate: new Date(),
  });

  const handleAddTask = (e) => {
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

  const filteredTasks = tasks
    .filter((task) => (filter === "All" ? true : task.status === filter))
    .filter(
      (task) =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="task-dashboard">
      <h2>Task Dashboard</h2>
      <form className="task-form" onSubmit={handleAddTask}>
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

      <div className="task-list">
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskDashboard;
