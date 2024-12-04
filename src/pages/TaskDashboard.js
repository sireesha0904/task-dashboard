import React from "react";
import TaskForm from "../components/TaskForm";
import TaskItem from "../components/TaskItem";
import { useSelector } from "react-redux";
import { selectTasks } from "../redux/tasksSlice";
import "../Styles/TaskDashboard.css";

const TaskDashboard = ({ searchTerm }) => {
  const tasks = useSelector(selectTasks);

  // Filter tasks based on the search term
  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="task-dashboard">
      <TaskForm />
      <div className="tasks-list">
        {filteredTasks.length ? (
          filteredTasks.map((task) => <TaskItem key={task.id} task={task} />)
        ) : (
          <p>No tasks found</p>
        )}
      </div>
    </div>
  );
};

export default TaskDashboard;
