import React from "react";
import {
  FaSearch,
  FaBell,
  FaMoon,
  FaSun,
  FaUserCircle,
  FaBars,
} from "react-icons/fa";
import "../Styles/Navbar.css";

const Navbar = ({
  searchTerm,
  setSearchTerm,
  toggleTheme,
  isDarkTheme,
  toggleSidebar,
}) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="navbar-brand">Task Manager</h2>
      </div>
      <div className="navbar-center">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="navbar-right">
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkTheme ? <FaSun /> : <FaMoon />}
        </button>
        <FaBell className="icon bell-icon" />
        <FaUserCircle className="icon profile-icon" />
        {/* Mobile sidebar toggle button */}
        <FaBars className="icon sidebar-toggle" onClick={toggleSidebar} />
      </div>
    </nav>
  );
};

export default Navbar;
