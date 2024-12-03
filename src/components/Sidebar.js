import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/tasksSlice";
import {
  FaChartBar,
  FaTasks,
  FaCheckCircle,
  FaHourglass,
} from "react-icons/fa";
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
          <button onClick={() => handleFilterChange("All")}>
            <FaTasks /> All Tasks
          </button>
        </li>
        <li>
          <button onClick={() => handleFilterChange("Completed")}>
            <FaCheckCircle /> Completed
          </button>
        </li>
        <li>
          <button onClick={() => handleFilterChange("Pending")}>
            <FaHourglass /> Pending
          </button>
        </li>
        <li>
          <button onClick={() => handleFilterChange("Analysis")}>
            <FaChartBar /> Analysis
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
