import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import TaskDashboard from "./pages/TaskDashboard";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="app">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="app-body">
        <Sidebar />
        <TaskDashboard searchTerm={searchTerm} />
      </div>
    </div>
  );
}

export default App;
