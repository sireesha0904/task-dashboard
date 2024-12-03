import React from "react"; // Remove `useState` if not used.
import { useSelector } from "react-redux";
import TaskItem from "../components/TaskItem";
import TaskForm from "../components/TaskForm";
import { selectTasks, selectFilter } from "../redux/tasksSlice";
import "../Styles/TaskDashboard.css";

const TaskDashboard = ({ searchTerm }) => {
  const tasks = useSelector(selectTasks);
  const filter = useSelector(selectFilter);
  

  const filteredTasks = tasks
    .filter((task) => (filter === "All" ? true : task.status === filter))
    .filter(
      (task) =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="task-dashboard">
      <TaskForm />
      <div className="task-list">
        {filteredTasks.length ? (
          filteredTasks.map((task) => <TaskItem key={task.id} task={task} />)
        ) : (
          <p>No tasks found.</p>
        )}
      </div>
    </div>
  );
};

export default TaskDashboard;
