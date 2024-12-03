import React from "react";
import { useSelector } from "react-redux";
import { FaTasks, FaCheckCircle, FaHourglass } from "react-icons/fa"; // keep these imports
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { selectTasks, selectFilter } from "../redux/tasksSlice";

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TaskDashboard = ({ searchTerm }) => {
  const tasks = useSelector(selectTasks);
  const filter = useSelector(selectFilter);

  const filteredTasks = tasks.filter(
    (task) =>
      filter === "All" ||
      (filter === "Completed" && task.status === "Completed") ||
      (filter === "Pending" && task.status === "Pending")
  );

  const completedCount = tasks.filter(
    (task) => task.status === "Completed"
  ).length;
  const pendingCount = tasks.filter((task) => task.status === "Pending").length;

  // Data for analysis graph
  const data = {
    labels: ["Completed", "Pending"],
    datasets: [
      {
        label: "Task Status",
        data: [completedCount, pendingCount],
        backgroundColor: ["#4caf50", "#ff9800"], // Green for completed, Orange for pending
        borderColor: ["#4caf50", "#ff9800"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="task-dashboard">
      <h2>Task Dashboard</h2>
      {filter === "Analysis" ? (
        <div className="chart-container">
          <h3>Task Completion Analysis</h3>
          <Line data={data} options={options} />
        </div>
      ) : (
        <div className="task-list">
          {filteredTasks.map((task) => (
            <div key={task.id}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
              <p>Status: {task.status}</p>
              <div>
                {task.status === "Completed" && <FaCheckCircle />}
                {task.status === "Pending" && <FaHourglass />}
                {task.status === "All" && <FaTasks />}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskDashboard;
