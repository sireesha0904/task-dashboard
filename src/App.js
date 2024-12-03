import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import TaskDashboard from "./pages/TaskDashboard";
import "./App.css"; // Global styles

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle theme logic
  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  // Apply the theme globally when isDarkTheme changes
  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [isDarkTheme]);

  // Toggle Sidebar open/close on small screens
  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState); // Toggle the sidebar state
  };

  return (
    <div className="app">
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        toggleTheme={toggleTheme}
        isDarkTheme={isDarkTheme}
        toggleSidebar={toggleSidebar} // Pass toggleSidebar to Navbar
      />
      <div className={`app-body ${isSidebarOpen ? "sidebar-open" : ""}`}>
        <Sidebar />
        <TaskDashboard searchTerm={searchTerm} />
      </div>
    </div>
  );
}

export default App;
