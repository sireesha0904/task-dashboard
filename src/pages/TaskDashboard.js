import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectTasks, selectFilter } from "../redux/tasksSlice";
import TaskItem from "../components/TaskItem";
import TaskForm from "../components/TaskForm";

const TaskDashboard = () => {
  const tasks = useSelector(selectTasks);
  const filter = useSelector(selectFilter);

  const [editingTask, setEditingTask] = useState(null);

  const filteredTasks = tasks.filter(
    (task) => filter === "All" || task.status === filter
  );

  return (
    <div className="task-dashboard">
      <TaskForm editingTask={editingTask} setEditingTask={setEditingTask} />
      <div className="tasks-list">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onEdit={(task) => setEditingTask(task)}
            />
          ))
        ) : (
          <p>No tasks available</p>
        )}
      </div>
    </div>
  );
};

export default TaskDashboard;
