// src/components/CalendarComponent.js
import React, { useState } from "react";
import "../Styles/CalendarComponent.css"

const CalendarComponent = ({ setDueDate }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (e) => {
    const date = new Date(e.target.value);
    setSelectedDate(date);
    setDueDate(date);
  };

  return (
    <div className="calendar">
      <input
        type="date"
        value={selectedDate.toISOString().split("T")[0]}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default CalendarComponent;
