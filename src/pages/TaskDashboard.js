import React from "react";
import { useSelector } from "react-redux";
import { selectTasks, selectFilter } from "../redux/tasksSlice";
import TaskItem from "../components/TaskItem";
import TaskGraph from "../components/TaskGraph";

const TaskDashboard = () => {
  const tasks = useSelector(selectTasks);
  const filter = useSelector(selectFilter);

  const filteredTasks = tasks.filter(
    (task) => filter === "All" || task.status === filter
  );

  return (
    <div className="task-dashboard">
      {filter === "Analysis" ? (
        <TaskGraph tasks={tasks} />
      ) : (
        filteredTasks.map((task) => <TaskItem key={task.id} task={task} />)
      )}
    </div>
  );
};

export default TaskDashboard;
