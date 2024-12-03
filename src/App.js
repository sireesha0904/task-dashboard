import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import TaskDashboard from "./pages/TaskDashboard";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Toggle Theme Logic
  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
    document.body.classList.toggle("dark-theme", !isDarkTheme);
  };

  return (
    <div className="app">
      {/* Pass searchTerm, setSearchTerm, toggleTheme, and isDarkTheme to Navbar */}
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        toggleTheme={toggleTheme}
        isDarkTheme={isDarkTheme}
      />
      <div className="app-body">
        <Sidebar />
        <TaskDashboard searchTerm={searchTerm} />
      </div>
    </div>
  );
}

export default App;
