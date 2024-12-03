import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/tasksSlice";
import "../Styles/Sidebar.css";

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (status) => {
    dispatch(setFilter(status));
  };

  return (
    <div className="sidebar">
      <ul>
        <li>
          <button onClick={() => handleFilterChange("All")}>All Tasks</button>
        </li>
        <li>
          <button onClick={() => handleFilterChange("Completed")}>
            Completed
          </button>
        </li>
        <li>
          <button onClick={() => handleFilterChange("Pending")}>Pending</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
