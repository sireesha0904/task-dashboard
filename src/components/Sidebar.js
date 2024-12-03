import React from "react";
import "../Styles/Sidebar.css";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/tasksSlice";

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <aside className="sidebar">
      <ul>
        <li onClick={() => dispatch(setFilter("All"))}>All Tasks</li>
        <li onClick={() => dispatch(setFilter("Completed"))}>Completed</li>
        <li onClick={() => dispatch(setFilter("Pending"))}>Pending</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
