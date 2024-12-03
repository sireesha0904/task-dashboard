// src/components/CalendarComponent.js
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../Styles/CalendarComponent.css";

const CalendarComponent = ({ dueDate, setDueDate }) => {
  return (
    <div className="calendar">
      <DatePicker
        selected={dueDate}
        onChange={(date) => setDueDate(date)}
        dateFormat="dd-MM-yyyy"
        placeholderText="Select due date"
        showPopperArrow={false}
      />
    </div>
  );
};

export default CalendarComponent;
